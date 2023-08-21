
<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import PersonCard from '$lib/classes/user';
	import type { AccountInfo } from '$lib/classes/user';
	import ndk from '$lib/stores/ndk';
	import type { NDKEvent, NDKUser, NDKUserProfile } from '@nostr-dev-kit/ndk';
	import MeritByAccount from './MeritByAccount.svelte';
	import type {RocketInfo} from '$lib/classes/rocket';
	import MeritsForRocket from './MeritsForRocket.svelte';
    import status from '$lib/stores/status';
	import type{MeritInfo} from '$lib/classes/merit';
	import { getIdentityByAccount } from '$lib/utils/helpers';
	export let rocketInfo: RocketInfo;
	const rocketId = rocketInfo.RocketUID;
	const creator = rocketInfo.CreatedBy;
	const meritsStatus = $status.merits as Map<string, MeritInfo>
	let merits :MeritInfo
	const realMerits = new Map(Object.entries(meritsStatus))
	$: merits = realMerits.get(rocketId) as MeritInfo
	// if ($status.merits) {merits = $status.merits.get(rocketId)}

	// const hexPubKey = rocketAccount.Account;

	// const personCard = PersonCard.get(hexPubKey, rocketAccount);

	// const realCard = personCard
</script>



<div class="new_mirv"><div class="rocketName"><h3 class="is-3">🚀{rocketInfo.RocketName}🚀</h3></div>
<div class="new_mirv"><div><h3 class="title is-3" id="flamebucketrelay">Flame Bucket Relay</h3>
	<p>This is a new type of paid relay system, which will hopefully demonstrate a new type of  financially sustainable economic model for operating relays.</p>
	<p>See the Nostrocket problem tracker for more details on how this works.</p>
	<p>I will make an announcement when this relay set is operational and accepting membership.</p></div><button>Buy Now for 6000 sats</button><span> </span><button>Modify this product</button></div></div>