// import type { PageLoad } from './$types';
import type { Kind } from 'nostr-tools';
import { writable } from 'svelte/store';
import { ndk } from '$lib/stores/ndk';
import type { NDKFilter } from '@nostr-dev-kit/ndk';
import type { AccountInfo } from '$lib/classes/user';

// import {AccountInfo} from "$lib/classes/user";
interface Status {
	// Define the expected properties and their types here
	// For example:
	identity: Record<string, AccountInfo> | null;
	shares: number | null;
	problems: Map<string, string> | null;
	merits: Map<string, string> | null;
	// ...
}
const statusfake: Status = {
	identity: {
		'00000000827ffaa94bfea288c3dfce4422c794fbb96625b6b31e9049f729d700': {
			Account: '00000000827ffaa94bfea288c3dfce4422c794fbb96625b6b31e9049f729d700',
			Name: 'cameri',
			UniqueSovereignBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 10,
			PermanymEventID: 'a14a1faa6eff885d8cbd2a01da3ead62e14bade0822968917f5eedb58d8d84cc'
		},
		'3492dd43d496a237f4441fd801f5078b63542c3e158ffea903cb020a1af4ffdd': {
			Account: '3492dd43d496a237f4441fd801f5078b63542c3e158ffea903cb020a1af4ffdd',
			Name: 'AK',
			UniqueSovereignBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 7,
			PermanymEventID: 'f4fc7ed435d68f2684e3072a973a565a1f81e759c3acf28bad014036c62ecbda'
		},
		'546b402e5e6967ed2187706bdf0927110c7bebeffd713c35a03b9161921c0871': {
			Account: '546b402e5e6967ed2187706bdf0927110c7bebeffd713c35a03b9161921c0871',
			Name: 'Nostrocket Relay',
			UniqueSovereignBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 1,
			PermanymEventID: '641601f94f9835e0ca25cc7885f5699fc64dd7ad06358012827d898646f1c1c1'
		},
		'546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882': {
			Account: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			Name: 'wuwei',
			UniqueSovereignBy: '1Humanityrvhus5mFWRRzuJjtAbjk2qwww',
			CharacterVouchedForBy: null,
			MaintainerBy: '1Humanityrvhus5mFWRRzuJjtAbjk2qwww',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 0,
			PermanymEventID: '8cdcee1e62c92b55b6ff6b576b77234fd7a4c1cbadc0827b1784b9bd1ce41dcd'
		},
		'652d58acafa105af8475c0fe8029a52e7ddbc337b2bd9c98bb17a111dc4cde60': {
			Account: '652d58acafa105af8475c0fe8029a52e7ddbc337b2bd9c98bb17a111dc4cde60',
			Name: 'leonwankum',
			UniqueSovereignBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 8,
			PermanymEventID: '19cfd2082b0b2047bc30cf99542cd8b7fb773782fd7267276fe3be5d53818f50'
		},
		'95a69326449931adda32e7e0f6275bec0e387abeee4bb56b3e94f46a6ac402e2': {
			Account: '95a69326449931adda32e7e0f6275bec0e387abeee4bb56b3e94f46a6ac402e2',
			Name: 'stelios',
			UniqueSovereignBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 9,
			PermanymEventID: 'e04fe5e8072c1eeea0856d83ad92c3273f7edf889f134b64c1a93407a06ef6d2'
		},
		'97c70a44366a6535c145b333f973ea86dfdc2d7a99da618c40c64705ad98e322': {
			Account: '97c70a44366a6535c145b333f973ea86dfdc2d7a99da618c40c64705ad98e322',
			Name: 'hodlbod',
			UniqueSovereignBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 6,
			PermanymEventID: '64322510976a860e7a03fd0357072c8bcfbec26a132d184fdca14170e9f18faa'
		},
		c5fb6ecc876e0458e3eca9918e370cbcd376901c58460512fe537a46e58c38bb: {
			Account: 'c5fb6ecc876e0458e3eca9918e370cbcd376901c58460512fe537a46e58c38bb',
			Name: 'Jack',
			UniqueSovereignBy: 'cc8d072efdcc676fcbac14f6cd6825edc3576e55eb786a2a975ee034a6a026cb',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 11,
			PermanymEventID: '9145d7e0189a53d5c0fd101408812fac0127cbca6e9cddcaa92f1e671ee6346a'
		},
		c80b5248fbe8f392bc3ba45091fb4e6e2b5872387601bf90f53992366b30d720: {
			Account: 'c80b5248fbe8f392bc3ba45091fb4e6e2b5872387601bf90f53992366b30d720',
			Name: 'armstrys',
			UniqueSovereignBy: '',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 0,
			PermanymEventID: '6c2589dac645c884e108fe89f8f8530c773211df01ddf840aedf13f60486639e'
		},
		c8383d81dd24406745b68409be40d6721c301029464067fcc50a25ddf9139549: {
			Account: 'c8383d81dd24406745b68409be40d6721c301029464067fcc50a25ddf9139549',
			Name: 'Sync',
			UniqueSovereignBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 3,
			PermanymEventID: '0074084d158e1bbef5164583731078bbf4df0a8bac29ef327fe66b0e316bd85f'
		},
		cc8d072efdcc676fcbac14f6cd6825edc3576e55eb786a2a975ee034a6a026cb: {
			Account: 'cc8d072efdcc676fcbac14f6cd6825edc3576e55eb786a2a975ee034a6a026cb',
			Name: 'Sherry',
			UniqueSovereignBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 5,
			PermanymEventID: '17cf0c8f6316fd6eba54f4a7496afbfde1eede422a3def6ed0e0b5d40b88c55c'
		},
		d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075: {
			Account: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Name: 'gsovereignty',
			UniqueSovereignBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 2,
			PermanymEventID: '123247c9c7ad1c3fcb53126c6c68258e83a8b9834d80a80bd3f295c49a5050c4'
		},
		e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a: {
			Account: 'e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a',
			Name: 'arkinox',
			UniqueSovereignBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 4,
			PermanymEventID: '402129b2647cda0c345da51244faf33e267630e4869eecab02ae34787da930ea'
		},
		fa984bd7dbb282f07e16e7ae87b26a2a7b9b90b7246a44771f0cf5ae58018f52: {
			Account: 'fa984bd7dbb282f07e16e7ae87b26a2a7b9b90b7246a44771f0cf5ae58018f52',
			Name: 'pablof7z',
			UniqueSovereignBy: 'cc8d072efdcc676fcbac14f6cd6825edc3576e55eb786a2a975ee034a6a026cb',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 12,
			PermanymEventID: 'e526cd0888ad8bc17d92e5763afa2f7994402765c5ab358a4ac7205a462445f4'
		}
	},
	shares: null,
	replay: {
		'00000000827ffaa94bfea288c3dfce4422c794fbb96625b6b31e9049f729d700':
			'a14a1faa6eff885d8cbd2a01da3ead62e14bade0822968917f5eedb58d8d84cc',
		'3492dd43d496a237f4441fd801f5078b63542c3e158ffea903cb020a1af4ffdd':
			'f4fc7ed435d68f2684e3072a973a565a1f81e759c3acf28bad014036c62ecbda',
		'546b402e5e6967ed2187706bdf0927110c7bebeffd713c35a03b9161921c0871':
			'641601f94f9835e0ca25cc7885f5699fc64dd7ad06358012827d898646f1c1c1',
		'546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882':
			'7c9f4379d9acde30f2d7a46d26f4b1105c22007d80f46eb312589227d29d87aa',
		'652d58acafa105af8475c0fe8029a52e7ddbc337b2bd9c98bb17a111dc4cde60':
			'19cfd2082b0b2047bc30cf99542cd8b7fb773782fd7267276fe3be5d53818f50',
		'95a69326449931adda32e7e0f6275bec0e387abeee4bb56b3e94f46a6ac402e2':
			'e04fe5e8072c1eeea0856d83ad92c3273f7edf889f134b64c1a93407a06ef6d2',
		'97c70a44366a6535c145b333f973ea86dfdc2d7a99da618c40c64705ad98e322':
			'64322510976a860e7a03fd0357072c8bcfbec26a132d184fdca14170e9f18faa',
		c5fb6ecc876e0458e3eca9918e370cbcd376901c58460512fe537a46e58c38bb:
			'9145d7e0189a53d5c0fd101408812fac0127cbca6e9cddcaa92f1e671ee6346a',
		c80b5248fbe8f392bc3ba45091fb4e6e2b5872387601bf90f53992366b30d720:
			'6c2589dac645c884e108fe89f8f8530c773211df01ddf840aedf13f60486639e',
		c8383d81dd24406745b68409be40d6721c301029464067fcc50a25ddf9139549:
			'0074084d158e1bbef5164583731078bbf4df0a8bac29ef327fe66b0e316bd85f',
		cc8d072efdcc676fcbac14f6cd6825edc3576e55eb786a2a975ee034a6a026cb:
			'857e5eb7fa871370b70888af90328dfdbeb2e5ee82e7c7cac7516588aab49b6f',
		d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075:
			'c623d0daeb8ffb3675a606c7912ccf450e6034b161dc5aab099c0d58e927f629',
		e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a:
			'402129b2647cda0c345da51244faf33e267630e4869eecab02ae34787da930ea',
		fa984bd7dbb282f07e16e7ae87b26a2a7b9b90b7246a44771f0cf5ae58018f52:
			'e526cd0888ad8bc17d92e5763afa2f7994402765c5ab358a4ac7205a462445f4'
	},
	mirvs: null,
	problems: {
		'1e05473b181d03cf46592cfb4f2435db86cea864345f142e17c31eef70fe16d1': {
			UID: '1e05473b181d03cf46592cfb4f2435db86cea864345f142e17c31eef70fe16d1',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: spaceman site gets fully re-rendered every time state gets updated',
			Body: 'This is pretty annoying. Especially when adding problems to the problem tracker.',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075'
		},
		'434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025': {
			UID: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Parent: 'e33b0ca01858aa06aedd77484d5b6b53c0a234e08c2552d9fdccde794dde1772',
			Title: 'Problem: nostrocket is not currently applicable to more than a few people',
			Body: "The nostrocket implementation is currently lacking most of the features that are described in the unprotocol.\n\nThis means most people are not really able to use nostrocket for very much. It's only really applicable to a few people at this stage because it takes a lot of time and effort to understand what it is and even more to get involved.\n\nSolution: start adding problems nested under this one when it relates to the implementation and UX of Spaceman, Engine, the Relay, etc.\n\nWhenever logging a problem, think: does solving this problem make bring Nostrocket closer to another participant getting involved?",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882'
		},
		'6439b9ff8c19b537ba5cdb7a7809f2031eb34c033229117ecfe055f608ff8842': {
			UID: '6439b9ff8c19b537ba5cdb7a7809f2031eb34c033229117ecfe055f608ff8842',
			Parent: '37993b56525f84b814b372acfb69c4474951ee255a104ae6fbb2182623ed7ac1',
			Title: 'Problem: we are not living up to our full potential as humanity',
			Body: 'All problems in the problem tracker **must** be nested under another problem, creating a tree structure.\n\nThis initial problem is intended to set the scope of all possible problems that MAY become applicable to Nostrocket - in the broadest possible sense.\n\nThis is the ultimate problem, and the reason for creating this project.',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882'
		},
		a37a018bb0a1591467ee64c88228f28bc7a79390b02031bc21e9da6e4a3701f7: {
			UID: 'a37a018bb0a1591467ee64c88228f28bc7a79390b02031bc21e9da6e4a3701f7',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: "Problem: people can't use Nostrocket for their own projects",
			Body: "It's somewhat possible for people other than myself to begin working on nostrocket, but no one can use Nostrocket for their own projects.",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075'
		},
		ab046170c1c4ab9e22f752a184c8c1fec5e2ce2c127216946113f26649c5f6c6: {
			UID: 'ab046170c1c4ab9e22f752a184c8c1fec5e2ce2c127216946113f26649c5f6c6',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: "Problem: can't send people a direct link to a problem",
			Body: "Sometimes I want to share a problem with someone, but I can't do this because problems do not have direct links.",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075'
		},
		b1da5a9f19c9ce489773f13060cc2b511add50a37fdd02bcfdba8755aba3567a: {
			UID: 'b1da5a9f19c9ce489773f13060cc2b511add50a37fdd02bcfdba8755aba3567a',
			Parent: '6439b9ff8c19b537ba5cdb7a7809f2031eb34c033229117ecfe055f608ff8842',
			Title: 'Problem: Bitcoin could be fixing the world a lot faster',
			Body: "We have all the tools we need to create a golden age for humanity, but we aren't using them in the most intelligent possible way. \n\nBitcoin has created a new territory of freedom by providing a form of Money that operates in parallel to legacy civilisation, but Number Go Up technology has created a tenacious complacency: get in the lifeboat or put the oxygen mask on, and Satoshi (MHEP) will do all the work. It's careless to assume that a universal Bitcoin standard is inevitable.\n\nWe are likely approaching two challenges on the path towards a universal Bitcoin standard:\n* The Fiat Dominion is slowly overcoming its arrogance and waking up to the existential threat that Bitcoin poses. We can hope for the best, but it's naive to believe the Fiat Dominion will not use every class of weapon at its disposal as it fights for survival.\n* Civilisations tend to collapse exponentially in a cascade failure. The loss of trust in key institutions is a clear signal that this process is underway, and we are likely to be much closer to chaos than it appears to our linear-thinking minds. If Bitcoin doesn't fix things before this happens, we will need to do things the old fashioned way, which sounds romantic but it isn't fun for anyone.\n\n### Solution: a self-organising civilisation centered upon Bitcoin\n\nThe simplest solution is not to fix the current structures and system(s), but to instead build something new, in parallel and as an opt-in alternative. If successful, it will become a fallback position for the masses as legacy civilisation continues its collapse.\n\nThe flow of humanity into a Bitcoin standard is dependent upon the community around Bitcoin making Bitcoin more useful - the larger the economy *around* Bitcoin becomes, the more useful Bitcoin itself is and the faster humanity transitions to a Bitcoin standard.\n\nA civilisation that's centered on Bitcoin will naturally accelerate the usefulness of Bitcoin (to the degree that the civilisation itself is useful). In this regard, our parallel civilisation is just another tool in Bitcoin's toolbox. Instead of trying to modify Bitcoin to become a sharper instrument, we create resilient and powerful parallel systems that integrate Bitcoin.\n\nNostrocket, or any similar attempt, would not be possible without Bitcoin, as anyone who's ever uttered **fix the money fix the world** will understand. Here are some examples:\n\n* A free and open civilisation requires honest price discovery, which can only happen with sound money.\n* A civilisation based on a Money that can be created at no cost is ultimately a worthless civilisation.\n* Nostrocket needs a source of undeniable and objective **Newtonian** truth that everyone can agree on:\n    * A shared clock to know when things happened in the past, what's happening right now, and roughly how long till things should happen in the future.\n    * Objective certainty that some information existed at a specific time in the past.\n    * Objective certainty over the current financial state of a system/organisation/person/transaction/etc.\n    * A constant of economics such that we have the ability to objectively reason about our civilisation's economy.\n* Nostrocket requires economic value to be transacted between parties even when powerful interests want to censor these transactions.\n* Nostrocket requires some mechanism by which state can be considered immutable.\n* We need to know (in a way that leaves no doubt) when something doesn't work and let our new civilisation's ideas die instead of the civilisation itself. Bitcoin is a source of Darwinian truth, and can act as guard rails against Darwinian mistakes - does x produce surplus or not?\n\nAside from a Bitcoin standard being the only viable mechanism to keep any civilisation sane, the corollary to the dependency on Bitcoin described above is that Nostrocket needs Bitcoin to live up to its full potential, so Nostrocket should naturally:\n* support the ongoing development and adoption of Bitcoin, maximising the degree to which Bitcoin benefits humanity,\n* ensure that Bitcoin benefits the bottom of the Cantillion pyramid more than the top\n    * ensure that the bottom of the Cantillion pyramid has the greatest trust in Bitcoin\n        * ensure that the bottom of the Cantillion pyramid is the most Bitcoin-literate\n    * ensure that those at the bottom of the Cantillion Pyramid have the most frictionless and lossless access to store their economic power in Bitcoin\n* prevent any changes to Bitcoin that reduce the degree to which Bitcoin is resistant to attack by the Fiat Dominion\n* be capable of rapidly addressing any imminent threats to Bitcoin, for example if there's evidence of a capability to break any of the cryptographic primitives\n* uphold and promote a view of Bitcoin not as a complacency-breeding NGI technology, but as an active guerrilla insurrection against fiat occupation",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882'
		},
		b4848eb203d65361d6c54aa18140b951454046c1f21bc10b48b0683c2791f164: {
			UID: 'b4848eb203d65361d6c54aa18140b951454046c1f21bc10b48b0683c2791f164',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: the Nostrocket Unprotocol cannot be read by anyone',
			Body: 'No one can actually read the nostrocket unprotocol because it has not been published anywhere.\n\nSolution: implement primitives of the protocol, which allows the protocol to build itself according to the protocol.',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075'
		},
		c623d0daeb8ffb3675a606c7912ccf450e6034b161dc5aab099c0d58e927f629: {
			UID: 'c623d0daeb8ffb3675a606c7912ccf450e6034b161dc5aab099c0d58e927f629',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: segfault in eventcatcher',
			Body: '```\npanic: runtime error: invalid memory address or nil pointer dereference\n[signal SIGSEGV: segmentation violation code=0x2 addr=0x0 pc=0x1044c9564]\n\ngoroutine 20 [running]:\nnostrocket/messaging/eventcatcher.SubscribeToTree(0x1400008c120, 0x1400006a300, 0x1400008c0c0)\n        /Users/g/nostrocket_repo/engine/messaging/eventcatcher/eventcatcher.go:63 +0x354\ncreated by nostrocket/messaging/eventconductor.handleEvents\n        /Users/g/nostrocket_repo/engine/messaging/eventconductor/eventconductor.go:64 +0x170\nexit status 2\nmake: *** [reset] Error 1\n```',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075'
		},
		e33b0ca01858aa06aedd77484d5b6b53c0a234e08c2552d9fdccde794dde1772: {
			UID: 'e33b0ca01858aa06aedd77484d5b6b53c0a234e08c2552d9fdccde794dde1772',
			Parent: 'b1da5a9f19c9ce489773f13060cc2b511add50a37fdd02bcfdba8755aba3567a',
			Title:
				"Problem: we don't have a good way to focus the action of multiple humans while remaining sovereign",
			Body: "When Bitcoiners organise around shared goals, they tend to rely on the State to anchor their organisational structures and serve as the mediator of last resort between all stakeholders. Coinkite and OpenSats, for example.\n\nAll human organisational structures are fundamentally composed of human action (and **inter** action) because human action is the **only** primitive by which humanity can influence how the present reality is brought forth from the infinite potential of the future.\n\nFamilies, tribes, companies, governments, civilisations, etc are all examples of organisational structures composed of human action.\n\n#### Composing human action through boundary conditions\n\nThe usefulness of a bucket is created by the limitations or restrictions imposed by its base and sides. A bucket is useful because it holds water by creating **boundary conditions** on what the water **cannot** do while **remaining in the bucket**.\n\nHuman organisational structures are useful because what they do with humans is analogous to what a bucket does with water. These structures are defined by their boundary conditions on human action - what type of action humans can take while remaining within the organisational structure.\n\n**Centrally planned** organisations like companies or governments tend to create boundary conditions on human action through a combination of:\n\n* internal rules about what types of human action is permissible,\n* internal rulers with the power to decide when to change the rules, and when to break them, and\n* excluding people who don't submit to the rules and rulers (\"don't fit the culture\" or aren't a \"team player\").\n\nHuman action within organisations is also restricted by the underlying security model. Investors tend to rely on the State to enforce contracts, and so any organisation that wants to raise money tends to be nested under the State. All humans within such an organisation are therefor ultimately responsible to the State for their actions. For example, the CFO is responsible to the State for all financial activity performed within the organisation, and all humans within the organisation are responsible to the CFO when their action involves money. The same is true for all aspects of the organisation. It's therefor impossible for an organisation to be nested under the State without being centrally planned.\n\nCentrally planned organisations exist along a spectrum of just how centrally planned they are - from highly planned military organisations to the **Teal** organisations as described by Frederic Laloux (well worth skimming through his book).\n\nSo-called **Decentralised organisations** tend to restrict human action by:\n* deciding ahead of time on all the possible types of human action that shall be permissible within the organisation, and\n* encoding the rules about these actions into some form of state machine (usually a \"smart\" \"contract\").\n\nThese organisations are typically inflexible due to this architecture. Modifying the set of human action that is permissible within the organisation requires smart contracts to be republished, which is where the community generally falls back to trusting a central team.\n\n#### Mutexless organisations\n\nThe more you need upfront consensus or agreement on what to do, the [less speedup you get](https://en.wikipedia.org/wiki/Amdahl%27s_law) by adding additional \"workers\".\n\nThe more sequential operations or mutexes you have, the less speedup you get by adding additional threads or workers because all of those threads need to pause execution and wait for the sequential parts of the process. It's a non-linear relationship: a tiny increase in wait-states drastically reduces the speedup gained when adding more threads. At some point, adding more threads does not result in any speedup.\n\nIn human organizations, we have the same thing. Individuals within the organization are workers or threads. Human organizations have a ratio of sequential to parallel operations, just like computer programs. The more a team needs to stop and synchronize, the less work they get done and the smaller the maximum team size, after which adding more people does not result in any additional productivity.\n\nRequiring permission or agreement over what to do within an organisation is a sequential operation. Meetings are the mutexes of human organisations.\n\nThus, the most efficient organisational structure is one where participants can do productive work without requiring any permission or agreement with others over what work to do.\n\n#### Sovereign organisations\n\nSovereign human action is human action taken by a **sovereign individual**.\n\nSovereign human action does not **require** permission from others. It does not **require** upfront consensus or agreement. The sovereign individual MAY seek agreement or permission before taking some action, but this is not **required**, it's entirely their own decision.\n\nA sovereign organisation is one where individuals may participate while remaining sovereign. A better term for this is a sovereign unorganisation.\n\nThe organisational structure of a sovereign unorganisation MUST be composed of sovereign human action.\n\nA sovereign civilisation is probably some form of meta sovereign unorganisation composed not only of sovereign human action but also many sovereign unorganisations, and inhabited by sovereign individuals.\n\n#### How do we focus sovereign human action?\n\nIf an organisation is sovereign, it's also mutexless because participants can do productive work without requiring any permission or agreement with others over what work to do.\n\nThe implication is that participants within such an organisation can do work without anyone knowing what they are working on, because work can be done without any upfront agreement on what is being built.\n\nHow do we create an organisational structure which allows individuals to remain sovereign and work towards building something without requiring any agreement on what we are building?\n\nWhat are the boundary conditions on sovereign human action that create the conditions for such an organisational paradigm?\n\nThe metric we use to judge if Nostrocket has optimal boundary conditions on human action within it is the community size - are humans being attracted to it faster than any alternative?\n\n* Humans with something to contribute must be better off by acting **within** the structure of Nostrocket than they are by acting within any other structure.\n    * Nostrocket must result in more value for Participants than any other opportunity available to them.\n    * Nostrocket must become, and actively remain, the most efficient organisational paradigm possible with the current technology\n        * The mechanism by which work gets done within Nostrocket cannot require upfront agreement on what that work should involve or what the end result should look like\n        * Nostrocket cannot require any upfront funding and cannot retain any capital\n    * To remove any internal friction, Nostrocket must be radically fair to all Participants, more fair than any other organisational structure\n        * Nostrocket's rules and ideology must be as pristine and *credibly neutral* as possible\n        * It's not possible to be as pristine and neutral as Bitcoin because Nostrocket is an organisational structure while Bitcoin is property, but Bitcoin is the standard to judge against.\n    * The boundary conditions or limitations should be simple, explicit, clear, and graduated such that there's no overhead required to onboard new Participants, and Participants may advance at their own speed along their own zone of proximal development.\n\n---\n\n### Possible Solution: an unprotocol for a universally applicable hill-climbing algorithm, executed by sovereign human action.\n\nThe core of the solution is a hill-climbing algorithm which optimises for increasing the number of Participants.\n\nSoftware can be used to make things more efficient and to provide continuity of the current state of Nostrocket, but the algorithm itself is executed by self-interested sovereign human action and not machine.\n\nHuman action within Nostrocket must be executed for purely self-interested reasons in order for it to be optimally efficient, accurate, scalable, and to minimise any social attack surface. When people solve problems for their own reasons, the solutions are more accurate than when they are doing it because someone is coercing them with money. A case in point: organic contributions to wikipedia vs. paid contributions.\n\nThe life-force (or fuel) of an organisational structure is human action that yields **surplus** - that means production of surplus is in the critical path to more Participants, and so our algorithm must optimise for this.\n\nAmdahl's law can be restated as \"the more you need consensus about what to build, the less efficient you will be at building it\". For Nostrocket to be the most efficient problem solver and builder, it must require the least amount of consensus on what to build and how to build it.\n\nProjects like ZeroMQ have proven that it's possible for valuable products/services (i.e. powerful and effective solutions) to evolve from simple rules with **no upfront planning** or consensus. This is core to our approach to innovation and surplus without requiring any consensus on what to build or how to build it - no upfront planning and no leadership.\n\nThe set of boundary conditions for human action within Nostrocket is defined by the Nostrocket Unprotocol. It's rather long, so here's a summary:\n\n0. Anyone who's not already a **Participant** MAY become a Participant by being validated by an existing Participant. This results in a **tree of Participants** called the Identity Tree.\n\n1. Change follows the **Serbian method** - a continuous pattern of accurately identifying **Problems**, and applying the **simplest possible solution** to each Problem.\n    * This project is currently applicable only to a *very* tiny subset of humanity who are able to understand the concept and do something useful with it, but this subset should get *less tiny* with each problem solved.\n    * As these problems and minimal solutions pile on top of each other, novel and valuable products/services will evolve (read the protocol to get a more complete picture of how this works).\n    * There's nothing that inherently limits Nostrocket to producing software based solutions, it could also produce hardware, houses, food, etc.\n\n2. Any Participant MAY log a **Problem** (an observed matter or situation regarded as unsatisfactory).\n    * There are no bug reports or feature requests, these are just problems (or they aren't).\n    * There are no priority levels for problems, there are just problems that are worth solving (or not).\n    * Problems should be reasoned about and broken down into smaller problems until they are objective or replicable, and actionable.\n    * Problems should be broken down until they are small enough that they can be solved very quickly - anything longer than 6 hours of working time is probably too big.\n    * Problems MUST be relevant to Nostrocket itself. Nostrocket is not a freelancing market or a problem-solver for hire.\n    * Problems MUST be nested under another Problem, creating a Problem Tree.\n\n3. Any Participant MAY **Claim** (and solve, typically with a **Patch**) any unclaimed Problem. Any **Maintainer** can (and should) **Merge** any Patch that does **not** violate the Unprotocol.\n    * At this early stage most of the problems Nostrocket is likely to encounter will simply be with its own implementation, hence they will typically be solved with a Patch. However, if the experiment is a success this will start to involve the physical world, things like Nostrocket meetup or conference related problems might be some of the first examples.\n\n4. A Participant who solves a Problem MAY indicate the value of their work by creating a **Dispendium**\n    * A Dispendium MUST be denominated in Satoshi\n    * A Dispendium is **not** an entitlement or guarantee to be paid\n    * An Dispendium is how a Participant SHOULD communicate the sacrifice they have made in solving the problem\n    * An Dispendium allows Participants to peer review the value being claimed by comparing individual solutions and their associated Dispendiums\n\n5. Participants with **Votepower** MAY vote to **Ratify** (approve) or **Blackball** (reject) a Dispendium.\n    * The Dispendium SHOULD be rejected unless it's along the route (or **critical path**) to more Participants.\n    * Votepower is a measure of a Participant's **skin in the game**.\n    * `Votepower = Shares * Leadtime`\n        * Every Participant's `Leadtime` starts at `0`.\n        * A Participant's Shares **cannot** be spent/transferred if their `Leadtime \u003e 0`.\n        * A Participant MAY increase or decrease their Leadtime by `1` every 2,016 blocks (but can't become negative)\n        * If more than 50% of Nostrocket's Votepower approves a Dispendium, and less than 5% reject it, its Approved.\n    * If Participants with Votepower reject Dispendiums that comply with the Unprotocol and are reasonable amounts, others will see this and stop working, and Nostrocket will die or be forked.\n    * If Participants with Votepower approve Dispendiums that should not be approved, they are diluting their own Shares for no good reason.\n\n6. If a Dispendium is **Approved**, new **Shares** are created for the Participant who logged the Dispendium (1:1 per Satoshi claimed in the Dispendium).\n    * Shares MUST NOT be created **any other way** (that would mean the experiment has **failed**).\n    * Nostrocket has been instantiated with a **single** share as this is technically the only way to bootstrap the process.\n\n7. Participants own **all** revenue produced by anything Nostrocket builds. Whenever anyone pays for a product/service created (or **discovered**) by Nostrocket, the Sats are streamed **directly** to Participants in proportion to the number of Shares they have and how long they've had them.\n    * Revenue distribution MUST be fair for everyone. Potential Participants who take more risk by making sacrifices before it's clear if the experiment will work or not need to agree that it's fair. Potential Participants who want to do work after the concept is well established and revenue is being generated must also agree that revenue distribution is fair.\n    * When there's a pot of money available, Mallory finds a way to corrupt whatever is guarding it.\n    * Nostrocket MUST NOT retain any capital or raise any funds (and doing so is an anti-pattern that fundamentally precludes decentralisation).",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882'
		},
		f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec: {
			UID: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: the Nostrocket problem tracker is clunky and annoying to use',
			Body: 'Now that we are using the Nostrocket problem tracker to build nostrocket itself, the most pressing problem is that the problem tracker is annoying to use.\n\nSolution: Log problems with the problem tracker, nest them under this problem to keep them all in one place.',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075'
		}
	}
};
const initalRootIds = new Map<string, string>([
	['IgnitionEvent', '1bf16cac62588cfd7e3c336b8548fa49a09627f03dbf06c7a4fee27bc01972c8'],
	['IdentityRoot', 'ae14dd661475351993f626f66df8052ed73166796e5cd893c09e4d333e170bb5'],
	['Merits', '9f7211ac022b500a7adeeacbe44bb84225d1bb1ee94169f8c5d8d1640a154cbc'],
	['MirvsRoot', '0f56599b6530f1ed1c11745b76a0d0fc29934e9a90accce1521f4dfac7a78532'],
	['ReplayRoot', '9ab11d92bdeffd28762374d5dfc5286e0f494d7cff5bc00b4fce177bf1115b94'],
	['ProblemRoot', '6439b9ff8c19b537ba5cdb7a7809f2031eb34c033229117ecfe055f608ff8842'],
	['ignition_account', '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882']
]);
export const status = await beginListeningForEvents();
// data: JSON.stringify(decodedAddr.data)
// console.log(status, '??????');

const statusStore = writable(status);

export default statusStore;

async function beginListeningForEvents() {
	let statusResult;
	try {
		const statusKind = 10311 as Kind;
		const filter: NDKFilter = {
			kinds: [statusKind],
			['#e']: [initalRootIds.get('IgnitionEvent') as string]
		};
		const a = await ndk.fetchEvents(filter);
		let status = a.values().next().value.content;
		statusResult = JSON.parse(status) as Status;
	} catch (e) {
		// console.log(status, 'sss11');}
		statusResult = statusfake;
	}

	return statusResult;

	// console.log(),"??????");
	// return event
}
