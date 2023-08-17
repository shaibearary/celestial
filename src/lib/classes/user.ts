import { browser } from '$app/environment';
import { db } from '$lib/interfaces/db';
import type { NDKUser } from '@nostr-dev-kit/ndk';
import { liveQuery, type Observable } from 'dexie';
import { unixTimeNow } from '$lib/utils/helpers';
import ndkStore from '$lib/stores/ndk';
import { get, writable, type Writable } from 'svelte/store';
import { truncatedBech } from '$lib/utils/helpers';
import { status } from '$lib/stores/status';
import type { P } from 'flowbite-svelte';
/**
 * nostroceket identity interface
 */
export interface AccountInfo {
	Account: string;
	Name: string;
	UniqueSovereignBy: string;
	CharacterVouchedForBy: string | null;
	MaintainerBy: string;
	Pubkeys: any;
	OpReturnAddr: any;
	Order: number;
	PermanymEventID: string;
    NostrProfile?: Observable<User>;
}


interface UserParams {
	pubkey: string;
	npub?: string;
	name?: string;
	displayName?: string;
	image?: string;
	banner?: string;
	bio?: string;
	nip05?: string;
	lud16?: string;
	about?: string;
	zapService?: string;
	lastFetched?: number;
	relayUrls?: string[];
}
interface PersonCardParams {
    name?: string;
    about?: string;
    order?: number;
    added_by?: string; //name or 1human
    npub: string;
    // profile: NDKUserProfile
    // button: string;
    avatar?: string;}
	// console.log(p, 'sji');
export default class PersonCard{
	name?: string;
	about?: string;
	order?: number;
	added_by?: string; //name or 1human
	npub: string;
	// profile: NDKUserProfile
	// button: string;
	avatar?: string;
	constructor(p: PersonCardParams){
		this.name = p.name;
		this.about = p.about;
		this.order = p.order;
		this.added_by = p.added_by;
		this.npub = p.npub;
		this.avatar = p.avatar;
	}
	static get(pubkey: string, rktAccount: AccountInfo): PersonCard  {
		// let personCard = new PersonCard({"name": rktAccount.Name, "about": user.about as string, "order": rktAccount.Order, "added_by": addBy, "npub": user.npub as string})
		
		const ndk = get(ndkStore);
		const ndkUser = ndk.getUser({ hexpubkey: pubkey });
		const npub = ndkUser.npub
		// ndkUser.fetchProfile()



		let addBy: string;
		if (rktAccount.UniqueSovereignBy=="1Humanityrvhus5mFWRRzuJjtAbjk2qwww"){
			 addBy = "1Humanityrvhus5mFWRRzuJjtAbjk2qwww" 
		}

		else{
			if (rktAccount.UniqueSovereignBy != ""){
				addBy = status.identity[rktAccount.UniqueSovereignBy].Name as string
			}
			else{
				addBy = "error"
			}
			//  console.log(addBy,"	dkcm" )
		}
		// console.log(addBy,"sdsdsdsddddddddddddd")
		let personCard = new PersonCard({"npub":npub,"added_by": addBy,"name": rktAccount.Name, "order": rktAccount.Order})
		const user = personCard.fetchFromNostr(pubkey)
		// let personCard = new PersonCard({"name": rktAccount.Name, "about": user.about as string, "order": rktAccount.Order, "added_by": addBy, "npub": user.npub as string})
		return personCard
	
	}
	private  fetchFromNostr(pubkey: string): User {
		const ndk = get(ndkStore);
		const ndkUser = ndk.getUser({ hexpubkey: pubkey });
		console.log(ndkUser, "	ndkUser")
		ndkUser
		.fetchProfile()
		.then(() => {
			// this.name = user.profile?.name as string;
			// this.displayName = user.profile?.displayName as string;
			// this.image = user.profile?.image as string;
			// this.banner = user.profile?.banner as string;
			this.about = ndkUser.profile?.bio as string;
			console.log(this.about, "	about")
			// this.nip05 = user.profile?.nip05 as string;
			// this.lud16 = user.profile?.lud16 as string;
			// this.about = user.profile?.about as string;
			// this.zapService = user.profile?.zapService as string;
		})

		const user = new User({ pubkey: pubkey, npub: ndkUser.npub });
		
		return user
		// user.updateProfileAndRelays(ndkUser);
	}
}
	
class User {
	pubkey: string;
	npub?: string;
	name?: string;
	displayName?: string;
	image?: string;
	banner?: string;
	bio?: string;
	nip05?: string;
	lud16?: string;
	about?: string;
	zapService?: string;
	lastFetched?: number;
	relayUrls?: string[];

	constructor(userParams: UserParams) {
		this.pubkey = userParams.pubkey;
		this.npub = userParams.npub;
		this.name = userParams.name;
		this.displayName = userParams.displayName;
		this.image = userParams.image;
		this.banner = userParams.banner;
		this.bio = userParams.bio;
		this.nip05 = userParams.nip05;
		this.lud16 = userParams.lud16;
		this.about = userParams.about;
		this.zapService = userParams.zapService;
		this.lastFetched = userParams.lastFetched;
		this.relayUrls = userParams.relayUrls;
	}

	/**
	 * Get a user from the local cache, or fetch if we don't find a user locally.
	 * @param pubkey The user's hexpubkey
	 * @returns Observable<User>
	 */
	static get(pubkey: string): Observable<User> {
		let user: User;
		// First check for a user in the db
		if (browser) {
			db.users.get({ pubkey: pubkey }).then((dbUser) => {
				// If user, set it
				if (dbUser) user = new User(dbUser);
				// If no user, or user is stale, update from Nostr
				if (!dbUser || (user && user.needsUpdate())) User.fetchFromNostr(pubkey);
			});
		}
		// User.fetchFromNostr(pubkey)

		return liveQuery(() => ( user)) as Observable<User>;
	}

	/**
	 * Fetch a user's profile data from relays
	 * @param pubkey The user's hexpubkey to fetch
	 * @return void
	 */
	static fetchFromNostr(pubkey: string): void {
		const ndk = get(ndkStore);
		const ndkUser = ndk.getUser({ hexpubkey: pubkey });
		
		const user = new User({ pubkey: pubkey, npub: ndkUser.npub });
		user.updateProfileAndRelays(ndkUser);
	}

	/**
	 * Checks whether we should go out and refresh a user's profile
	 * Currently caching for 24 hours.
	 * @returns boolean
	 */
	private needsUpdate(): boolean {
		return (
			!this.lastFetched ||
			// !this.relayUrls ||
			this.lastFetched < unixTimeNow() - 3600 * 24 ||
			(!this.displayName && !this.name)
		);
	}

	private updateProfileAndRelays(user: NDKUser): void {
		user
			.fetchProfile()
			.then(() => {
				this.name = user.profile?.name as string;
				this.displayName = user.profile?.displayName as string;
				this.image = user.profile?.image as string;
				this.banner = user.profile?.banner as string;
				this.bio = user.profile?.bio as string;
				this.nip05 = user.profile?.nip05 as string;
				this.lud16 = user.profile?.lud16 as string;
				this.about = user.profile?.about as string;
				this.zapService = user.profile?.zapService as string;
			})
			// .then(() => {
			//     user.relayList().then((eventSet) => {
			//         const sorted = Array.from(eventSet).sort((a, b) => {
			//             return (b.created_at as number) - (a.created_at as number);
			//         });
			//         if (sorted.length) {
			//             const tags = sorted[0].getMatchingTags('r');
			//             this.relayUrls = tags.map((tag) => tag[1]);
			//         }
			//     });
			// })
			.then(() => {
				this.lastFetched = unixTimeNow();
				this.save();
			});
			
	}
	public async save(): Promise<User | null> {
		try {
			if (browser) await db.users.put(this);
			return this;
		} catch (e) {
			console.log(e);
			return null;
		}
	}

	public truncatedNpub(): string {
		return this.npub ? truncatedBech(this.npub) : '';
	}

	public displayableName(): string {
		return this.name || this.displayName || this.truncatedNpub();
	}

	public truncatedNip05(): string {
		// Return blank string if we don't have a NIP-05
		if (!this.nip05) return '';

		if (this.nip05?.substring(0, 1) === '_') {
			return this.nip05.substring(2) as string;
		} else {
			return this.nip05 as string;
		}
	}
}

/**
 * An extended version of the NDKUser class
 */
