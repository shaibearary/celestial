// import type { PageLoad } from './$types';
import type { Kind } from 'nostr-tools';
import { get } from 'svelte/store';
import { writable } from 'svelte/store';
import ndkStore from '$lib/stores/ndk';
import type { NDKFilter } from '@nostr-dev-kit/ndk';
import type { AccountInfo } from '$lib/classes/user';
import type { RocketInfo } from '$lib/classes/rocket';
import type { NDKEvent } from '@nostr-dev-kit/ndk';
import type { ProblemInfo } from '$lib/classes/problem';
// import {AccountInfo} from "$lib/classes/user";
interface Status {
	// Define the expected properties and their types here
	// For example:
	identity: Record<string, AccountInfo> | null;
	shares: number | null;
	problems: Map<string, ProblemInfo> | null;
	merits: Map<string, string> | null;
	rockets: Map<string, RocketInfo> | null;
	// ...
}
const statusfake = {
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
			PermanymEventID: 'a14a1faa6eff885d8cbd2a01da3ead62e14bade0822968917f5eedb58d8d84cc',
			LatestKind0: {
				id: '1c42d032a1eb4c4fca337598165a7513d90c71f1059ea03475189858c5afc630',
				pubkey: '00000000827ffaa94bfea288c3dfce4422c794fbb96625b6b31e9049f729d700',
				created_at: 1692488679,
				kind: 0,
				tags: [],
				content:
					'{"banner":"https://nostr.build/i/nostr.build_90a51a2e50c9f42288260d01b3a2a4a1c7a9df085423abad7809e76429da7cdc.gif","website":"https://primal.net/cameri","damus_donation_v2":100,"nip05":"cameri@elder.nostr.land","lud16":"cameri@getalby.com","picture":"https://nostr.build/i/8cd2fc3d7e6637dc26c6e80b5e1b6ccb4a1e5ba5f2bec67904fe6912a23a85be.jpg","display_name":"Cameri🪽","about":"@HodlWithLedn. All opinions are my own.\\nBitcoiner class of 2021. Core Nostr Developer. Author of Nostream. Ex Relay Operator.","name":"cameri"}',
				sig: 'b89b9e7771d762fe81809a0699a8088eb6f71564590eff514a176838e09c306aeeb90c9437bee590dd8d8899f16a64acf335af1003d065c75799de066c6d319d',
				fromConsensusEvent: false
			}
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
			PermanymEventID: 'f4fc7ed435d68f2684e3072a973a565a1f81e759c3acf28bad014036c62ecbda',
			LatestKind0: {
				id: 'd6bf6eb5e50502b84b636a348bce8001405e62647c88d592f712dafe19ebc7ae',
				pubkey: '3492dd43d496a237f4441fd801f5078b63542c3e158ffea903cb020a1af4ffdd',
				created_at: 1689065613,
				kind: 0,
				tags: [],
				content:
					'{"banner":"https://rejecttheframe.xyz/wp-content/uploads/2022/08/RejectTheFrame.001.png","lud06":"lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhhxar9v9j8jun0daehgetjx5uqpmkz9w","website":"rejecttheframe.xyz","reactions":false,"nip05":"ak@rejecttheframe.xyz","damus_donation":25,"picture":"https://andrewkeir.xyz/images/AK.png","display_name":"AK","about":" Anti-rug tech","name":"AK"}',
				sig: 'da9a1042e67652eb06f0821de68a314429c60ac74a7fd16569e131e915d37dbfef4327865ec666d5b092bd0e55830564ee1266e47e3156d5eec59a9bebbe62c3',
				fromConsensusEvent: false
			}
		},
		'546b402e5e6967ed2187706bdf0927110c7bebeffd713c35a03b9161921c0871': {
			Account: '546b402e5e6967ed2187706bdf0927110c7bebeffd713c35a03b9161921c0871',
			Name: 'Nostrocket Relay',
			UniqueSovereignBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			CharacterVouchedForBy: null,
			MaintainerBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 1,
			PermanymEventID: '641601f94f9835e0ca25cc7885f5699fc64dd7ad06358012827d898646f1c1c1',
			LatestKind0: {
				id: 'b902e91cfc911faeb4e006a771fc47c147f49d76cb4f89cc73163e7a0a41472b',
				pubkey: '546b402e5e6967ed2187706bdf0927110c7bebeffd713c35a03b9161921c0871',
				created_at: 1687673614,
				kind: 0,
				tags: [],
				content:
					'{"name":"Nostrocket Relay","nip05":"nostrocket-relay@nostrovia.org","picture":"https://media.istockphoto.com/id/1163399815/photo/drops-on-ice-cube.jpg?s=612x612&w=0&k=20&c=4vm7sZw6dar81wxRit7WzB_fEROCzB-c3_3Ds9RXQIc=","about":"I\'m the nostrocket relay and sometimes I work"}',
				sig: 'ec96fb2d5792d249945a205df4028849a19a6ebf98a5555a9b043c5fc771bee54430e46ce0fe4a5b855e2f943edbaab405c0f742fd0ef5432f47da19cd2160e3',
				fromConsensusEvent: false
			}
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
			PermanymEventID: '8cdcee1e62c92b55b6ff6b576b77234fd7a4c1cbadc0827b1784b9bd1ce41dcd',
			LatestKind0: {
				id: '56aa31994a1dcda866e2cb4de29dd2be449d72076e843c55d852fb974b435d5b',
				pubkey: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
				created_at: 1688301356,
				kind: 0,
				tags: [],
				content:
					'{"picture":"https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs13752-019-00330-w/MediaObjects/13752_2019_330_Fig2_HTML.png","nip05":"wuwei@nostrovia.org","name":"wuwei","about":"Do without doing","nip05valid":true,"banner":"https://hackaday.com/wp-content/uploads/2018/08/projectorionconfiguration_propellant.png"}',
				sig: '6b44e5a29fbde8f5cb12d37f1afe3aa728a95246b03cb843f6427b5218555208740ef790e8558b0f49c46f9aeda409d5fcf3f32280e3982b356bbf6bd9ce51ee',
				fromConsensusEvent: false
			}
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
			PermanymEventID: '19cfd2082b0b2047bc30cf99542cd8b7fb773782fd7267276fe3be5d53818f50',
			LatestKind0: {
				id: 'b10939aada91eaaceafe4cdde78efca6335fcd3a06d4be18f3d571aab089017e',
				pubkey: '652d58acafa105af8475c0fe8029a52e7ddbc337b2bd9c98bb17a111dc4cde60',
				created_at: 1690232642,
				kind: 0,
				tags: [],
				content:
					'{"banner":"https://cdn.nostr.build/i/bd5d4e1832543b66483e8de51e7f07ed50dcb2dd928c0dc4faa26aa9ce917fcd.jpg","website":"linktr.ee/leonwankum","damus_donation_v2":0,"nip05":"@leonawankum@BitcoinNostr.com","lud16":"snappycollar55@walletofsatoshi.com","picture":"https://cdn.nostr.build/i/69e75defa0c76d375e853e20b561afd33e49adb3ab73d701b91b9f489b349aea.jpg","display_name":"Leon A. Wankum","about":"Bitcoin. Real Estate. Philosophy & Ethics. PoW.","name":"leonwankum"}',
				sig: '435eb37c7b5dfdeb076c7285323b5f408b24f434511083ed6787acdd1f7a6f72550b3fc17f23e13958ec197918722cfefe254cfbfa4ff1fb77dc7175e70cfda0',
				fromConsensusEvent: false
			}
		},
		'659505becda938dafde592af9b5a4f2ac23e70a1dc2f3148e8239dcc31e9c054': {
			Account: '659505becda938dafde592af9b5a4f2ac23e70a1dc2f3148e8239dcc31e9c054',
			Name: 'amaurel',
			UniqueSovereignBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 16,
			PermanymEventID: '87343929c113e6f29a3626e62776f6062c1de44d228d36e108cc099c9f7efe28',
			LatestKind0: {
				id: 'd781380640d2a8262b70e2df84206b2a7d218b6a61993285576efb3310398d71',
				pubkey: '659505becda938dafde592af9b5a4f2ac23e70a1dc2f3148e8239dcc31e9c054',
				created_at: 1689586909,
				kind: 0,
				tags: [],
				content:
					'{"name":"amaurel","about":"Engineering and Technology Consultant\\n\\nhttps://amboss.space/node/03f711a90de6a8cc1530d15d7ec2ff291ddbb26e27f0f3f94a0c0f8ea7944a6046\\n\\nSimpleXChat: https://simplex.chat/contact#/?v=1-2&smp=smp%3A%2F%2F0YuTwO05YJWS8rkjn9eLJDjQhFKvIYd8d4xG8X1blIU%3D%40smp8.simplex.im%2F2fxifVgVB18s55sMKBqF6UIvKySMu9vv%23%2F%3Fv%3D1-2%26dh%3DMCowBQYDK2VuAyEAMTuCq0gtVkBKkdse7jIgq3W4f5b_HAK_sYSTVXjYDCM%253D%26srv%3Dbeccx4yfxxbvyhqypaavemqurytl6hozr47wfc7uuecacjqdvwpw2xid.onion","lud06":"","lud16":"amaurel@getalby.com","picture":"https://inosta.cc/images/680e55b6f64bd7e34799626e4ed09aeb975211247178bddcefbe22051ce01369/pol0iwhc82d1677431793648uw2g8a3qr9.png","website":"https://www.nostrsites.com/amaurel","nip05":"amaurel@nostrplebs.com","banner":"https://void.cat/d/YcBFSsnt6X1WBLB8TpsbFC.webp","username":"amaurel","display_name":"amaurel","displayName":"amaurel","Linktr.ee":"https://linktr.ee/amaurel","My Nostrsite":"https://nostrsites.com/amaurel"}',
				sig: '6edd36c82897e790cfee15c2b76d5b647db1e4d98cf379d7b3f763a9abfbae666f375facb709d8bfd6ba6c97e5a0429958fda118bc72fd6da08111ada650ab92',
				fromConsensusEvent: false
			}
		},
		'7b1589d7c04f1c555e6fd84024637ac95ceb4853e1fcfbb1bb823c8b2cfd64fc': {
			Account: '7b1589d7c04f1c555e6fd84024637ac95ceb4853e1fcfbb1bb823c8b2cfd64fc',
			Name: 'CryptoClay ⚡',
			UniqueSovereignBy: 'e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 14,
			PermanymEventID: 'c75b9adafc11db49b29f243fe208c16d123b939a4d5c23cb9be7012a4c0160a4',
			LatestKind0: {
				id: 'e917531194098254602b15fa1bff5ff42eda7d05a8ac55b68620414cbbfd68a6',
				pubkey: '7b1589d7c04f1c555e6fd84024637ac95ceb4853e1fcfbb1bb823c8b2cfd64fc',
				created_at: 1692451675,
				kind: 0,
				tags: [],
				content:
					'{"name":"CryptoClay ⚡","about":"Les Nostriches","picture":"https://void.cat/d/JbLaZ2mcw3aqtfvfHrkMy1.webp","nip05":"cryptoclay@nostrplebs.com","lud06":"","lud16":"theunhosted@getalby.com","display_name":"CryptoClay","website":"https://nostrcyber.space","banner":"https://m.primal.net/HHKS.png","username":"CryptoClay","displayName":"CryptoClay","damus_donation_v2":0,"created_at":1691762060}',
				sig: 'fdf287eeaebe562d8a2c9e648fced8fe471fc8de2546233bf79be9473c853dd240034ca677bab0f0eaba1a144cd396d2312e5ec4d14b5c565fdf08f51e1e20bf',
				fromConsensusEvent: false
			}
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
			PermanymEventID: 'e04fe5e8072c1eeea0856d83ad92c3273f7edf889f134b64c1a93407a06ef6d2',
			LatestKind0: {
				id: '3613023c60b95f053ad560c5a15dd04a2eff364cf994bb831bc5cc4b7d45f385',
				pubkey: '95a69326449931adda32e7e0f6275bec0e387abeee4bb56b3e94f46a6ac402e2',
				created_at: 1691710221,
				kind: 0,
				tags: [],
				content:
					'{"banner":"https://nostr.build/i/nostr.build_688d18ed474b1c3018be2137338f4ab0d9ef70e88dde8af244fb09282c1a118e.jpg","website":"https://geyser.fund","lud16":"nostrpartyriga23@geyser.fund","picture":"https://pbs.twimg.com/profile_images/1620577939183075328/ckP_EDFp_400x400.jpg","display_name":"⚡️Στεlios 🌊","about":"Technology raises humanity.\\n\\nBuilding @geyser 🌊\\n\\n#Bitcoin","name":"stelios"}',
				sig: '8fca19da809d36b5e68df928cff2ce8a86b1b126c003b6cdb45ab43759dd9d8cfe9920c062e7fcc2c2ce870bcc39f643a11aa6798aa9c007e25c7e4f7d0a35e7',
				fromConsensusEvent: false
			}
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
			PermanymEventID: '64322510976a860e7a03fd0357072c8bcfbec26a132d184fdca14170e9f18faa',
			LatestKind0: {
				id: '01a54d0a709d1403f8ed72f885d364c72a3d424c6c276287e7c0e97f912e52ac',
				pubkey: '97c70a44366a6535c145b333f973ea86dfdc2d7a99da618c40c64705ad98e322',
				created_at: 1686938546,
				kind: 0,
				tags: [['client', 'coracle']],
				content:
					'{"picture":"https://us-southeast-1.linodeobjects.com/dufflepud/uploads/b2a7ef93-fa12-469b-bf3d-0f2654cab346.jpg","about":"Christian Bitcoiner and developer of the coracle.social nostr client. Fund development at https://geyser.fund/project/coracle","name":"hodlbod","nip05":"hodlbod@coracle.social","nip05_updated_at":1676671261,"banner":"https://nostr.build/i/nostr.build_6a33cdc8619443e64999eb0c437326afda84733fe13e1b326ce0ad3685aafcc4.jpeg","lud16":"compactjacket98@walletofsatoshi.com"}',
				sig: 'c7bab67fcc2686b49d61af073aa85f349f47880414e8a355cf654c17c5ac9cd4116a49ff83366a58e5c4be6d67b981d147fd64d3ea5ac28cfd837ab65c7216aa',
				fromConsensusEvent: false
			}
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
			PermanymEventID: '9145d7e0189a53d5c0fd101408812fac0127cbca6e9cddcaa92f1e671ee6346a',
			LatestKind0: {
				id: '1abc422095c224f83cef05c235b08b971f885da5cc505c62d8df9203bd0eb117',
				pubkey: 'c5fb6ecc876e0458e3eca9918e370cbcd376901c58460512fe537a46e58c38bb',
				created_at: 1691349629,
				kind: 0,
				tags: [],
				content:
					'{"banner":"https://nostr.build/i/nostr.build_d8db82d56a82fa54e2a59083caa8f51141f9fd9512989a778058c50c8a27b987.gif","damus_donation_v2":100,"website":"https://jacany.com","nip05":"jack@chaker.net","picture":"https://cdn.nostr.build/i/03483c203a5df52ac3835685541fb06e1a87611961394e3af923b10dfdbdd75a.jpg","lud16":"jacanyy@getalby.com","damus_donation":100,"display_name":"Jack Chakany","about":"on nostr since 768,897\\njacany.com - my website\\nblog.jacany.com - my blog\\nnrtc.jacany.com - voice over nostr demo\\nnosbin.com - nostr pastebin (also my website)\\nzapperne.ws - hackernews on nostr (my website too)","name":"Jack"}',
				sig: '0c5d2ae2e017386f4e9e1dabd915d80053db35661285a02d07067216d4bb7b29e70eb7c25aeccd61ab974eeb1187b252af784e80f5142bac7411d1bffcd95cbe',
				fromConsensusEvent: false
			}
		},
		c80b5248fbe8f392bc3ba45091fb4e6e2b5872387601bf90f53992366b30d720: {
			Account: 'c80b5248fbe8f392bc3ba45091fb4e6e2b5872387601bf90f53992366b30d720',
			Name: 'armstrys',
			UniqueSovereignBy: 'fa984bd7dbb282f07e16e7ae87b26a2a7b9b90b7246a44771f0cf5ae58018f52',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 13,
			PermanymEventID: '6c2589dac645c884e108fe89f8f8530c773211df01ddf840aedf13f60486639e',
			LatestKind0: {
				id: 'b6c80cd7f3b7b93589753f72a7a949e855526a9d9253dcca2ecc126ad3d43530',
				pubkey: 'c80b5248fbe8f392bc3ba45091fb4e6e2b5872387601bf90f53992366b30d720',
				created_at: 1688790549,
				kind: 0,
				tags: [],
				content:
					'{"banner":"https://pbs.twimg.com/profile_banners/1121050427028537345/1610506549/1500x500","website":"https://habla.news/c/naddr1qqr8q7t5dphkuq3qeq94yj8maree90pm53gfr76wdc44su3cwcqmly848xfrv6es6usqxpqqqzr0vclkwad","reactions":true,"nip05":"armstrys@nostr.directory","picture":"https://i.imgur.com/cI62eqU.gif","lud16":"armstrys@ln.tips","display_name":"Ryan","about":"Thinking about python, geospatial, LiDAR in small-town Idaho. \\nJoin me at n/python","name":"armstrys"}',
				sig: 'a6db9a9bc0863e6ba723e6c53c4c4be405b429b45ab5ef6edcf56a68a13981eea09b855ff352d4a8822c208705ce3d0f7ec4d4b6e7ccb76e548d04e15aabf452',
				fromConsensusEvent: false
			}
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
			PermanymEventID: '0074084d158e1bbef5164583731078bbf4df0a8bac29ef327fe66b0e316bd85f',
			LatestKind0: {
				id: '787c13a23ad59d82970859f649f45caae9e9f392dbd679707ddba3bca975783f',
				pubkey: 'c8383d81dd24406745b68409be40d6721c301029464067fcc50a25ddf9139549',
				created_at: 1691858132,
				kind: 0,
				tags: [],
				content:
					'{"banner":"https://kevingaethofs.be/banner.gif","website":"","npub":"c8383d81dd24406745b68409be40d6721c301029464067fcc50a25ddf9139549","damus_donation_v2":0,"nip05":"fire@nostrpurple.com","picture":"https://nostrdam.com/v4.gif","lud16":"lightning@kevingaethofs.be","display_name":"SyncMidi","about":"🌩️⚡️🔥","name":"Fire"}',
				sig: 'ded773b1e43d28fd165adab104f4e7cadb839713ce3e70f10c26e1cfb95a8126cdd9fca46c55c5cf2fb285757c3a917be30d7b10458536517860dcc77da3fbf5',
				fromConsensusEvent: false
			}
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
			PermanymEventID: '17cf0c8f6316fd6eba54f4a7496afbfde1eede422a3def6ed0e0b5d40b88c55c',
			LatestKind0: {
				id: '78afb7a37948ec8c80308a205750554c16990ef5681d9d037242d797ab33c46e',
				pubkey: 'cc8d072efdcc676fcbac14f6cd6825edc3576e55eb786a2a975ee034a6a026cb',
				created_at: 1691055388,
				kind: 0,
				tags: [],
				content:
					'{"github":"https://github.com/shaibearary","damus_donation_v2":0,"banner":"https://us-southeast-1.linodeobjects.com/dufflepud/uploads/ceceacff-657c-4106-a6cf-a2b439d909d1.png","nip05":"sherry@nostrovia.org","picture":"https://nostr.build/i/nostr.build_374f05af8959162dc7345d21443e5274b7fa01d88aa8fb5fff9516e0ca70310e.jpeg","lud16":"spang@getalby.com","nip05valid":"true","about":"👻nostr.hk 👻nostrocket.org👻nossence  Data Scientist 👻Your HK nostrich bestie\\n\\n 这里有所有NIP的中文翻译 https://sherry-pang.gitbook.io/nostr-cn/fu-lu-1-nip-xiang-jie","name":"Sherry"}',
				sig: '5dedfa1d991d3c432f16a4179428c3051ca84b076284756a8afd1da1b5fca6af544e2ac091061d3adb98fff2b66b95cc3d749d7f40e4835951ec1a2210faee88',
				fromConsensusEvent: false
			}
		},
		d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075: {
			Account: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Name: 'gsovereignty',
			UniqueSovereignBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			CharacterVouchedForBy: null,
			MaintainerBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 2,
			PermanymEventID: '123247c9c7ad1c3fcb53126c6c68258e83a8b9834d80a80bd3f295c49a5050c4',
			LatestKind0: {
				id: '98b53354d8df014841237d83e2c91aa3a0f42c5ed330441d0dd405a096f9afca',
				pubkey: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
				created_at: 1688722649,
				kind: 0,
				tags: [],
				content:
					'{"name":"gsovereignty","picture":"https://nostr.build/i/nostr.build_029831470fc213b50dca90bd35ae0fea4e2a2540388bb1d459ab73d1c1a51f5c.jpg","about":"💥 nostrocket.org 💥 Nostrovia podcast💥 Electronics 💥 RF 💥 hardware 💥 embedded 💥 C 💥 c++ 💥 rust 💥 go 💥  Light infantary (HK battalion, small block div.) during XT & Segwit wars 💥 Peak of pull-request comedy career: https://github.com/diem/diem/pull/83 💥","website":"nostrovia.org","banner":"https://www.whoi.edu/wp-content/uploads/2017/10/Operation_Crossroads_Baker_Edit_1280_476154.jpg","username":"gsovereignty","display_name":"gsovereignty","displayName":"gsovereignty","lud06":"lnurl1dp68gurn8ghj7em9w3skccne9e3k7mf09emk2mrv944kummhdchkcmn4wfk8qtm8wdhhvetjv45kwmn50y7wthx2","lud16":"gsovereignty@getalby.com","nip05":"gsovereignty@nostrovia.org","nip05valid":true}',
				sig: '855b89d0eea4925f3d3adac1b44913cdf1607f4c4ab178a04cdea5c84d654d496e1220c11d4e46dd36ad10d7a837bb69d82ecfe8285ffee28fe56dd354faec0e',
				fromConsensusEvent: false
			}
		},
		deba262b2d87f7ed1252241e607bd1bbf42e67354992f89e7536d65d7a19e423: {
			Account: 'deba262b2d87f7ed1252241e607bd1bbf42e67354992f89e7536d65d7a19e423',
			Name: 'OriginalSize',
			UniqueSovereignBy: 'cc8d072efdcc676fcbac14f6cd6825edc3576e55eb786a2a975ee034a6a026cb',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 17,
			PermanymEventID: '0a32ac96e4e0adb7167d965d852bbd4f0b21b930cd436a2a7dca3dc879455f61',
			LatestKind0: {
				id: 'e3fadcbe1be5f39efb621aca64ab5a1ff48dbfdcf2c8a703958513e0dc6eb06b',
				pubkey: 'deba262b2d87f7ed1252241e607bd1bbf42e67354992f89e7536d65d7a19e423',
				created_at: 1686020980,
				kind: 0,
				tags: [],
				content:
					'{"name":"OriginalSize","username":"OriginalSize","display_name":"OriginalSize","displayName":"OriginalSize","picture":"https://i.nostrimg.com/6e29dad059f2350f29ae3b5d5c4ec905511e79bd0cca3eb8399c26fbbedde855/file.jpg","banner":"https://i.nostrimg.com/d4731678b7f7b22086f03b4e35a127e7ee15bc60408773b6767f23c8a0f0ddf4/file.png","website":"","about":"Shrinkflation-proof\\nNYK, SHSS, Never KYC\\nBitcoin channel: npub1p7dy9ku6ckpup8z24d0lsqpsdlayupnwxwur0zn8nfhnqph3dj0qcjpgkq\\nTest my digital assistant  npub1lf32sud4hf95tyt7cf4h47zmmvd7crw0rmwydzedvxfdl4qm2wmshk570k","nip05":"originalsize@nostrich.zone","lud16":"defaultimminent@getalby.com","lud06":""}',
				sig: '0268280bc7405a14499047d93628aa5cf8e4d895559c0f86ab0a46918ce7ff5d9601745e1788e2ba1073abd039279d3a4a22548f4ab2b1e9bf05a1d6455d3cb7',
				fromConsensusEvent: false
			}
		},
		e25a8b2051022a08f97d267d4b99ddfc500a0bfe149a5f671e46f72e9ea36ec9: {
			Account: 'e25a8b2051022a08f97d267d4b99ddfc500a0bfe149a5f671e46f72e9ea36ec9',
			Name: 'lnproxy',
			UniqueSovereignBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 18,
			PermanymEventID: 'a71b71bee9dec75c338cf6e1c8f52a03df43e448f9933331d24b729dc9a8b4be',
			LatestKind0: {
				id: '2e6daeeb78dcc8cbe4f810519795d67ad88ddf58c12da831d9558aa497dd361c',
				pubkey: 'e25a8b2051022a08f97d267d4b99ddfc500a0bfe149a5f671e46f72e9ea36ec9',
				created_at: 1692019667,
				kind: 0,
				tags: [],
				content:
					'{"name":"lnproxy","picture":"https://lnproxy.org/assets/icon-large.png","nip05":"_@lnproxy.org","lud06":"lnurl1dp68gurn8ghj7mrwwpex77re9ehhyee09emk2mrv944kummhdchkcmn4wfk8qtmnw4c8qmmjwswttr80","lud16":"_@lnproxy.org","display_name":"lnproxy","about":"A simple lightning privacy tool.","website":"https://lnproxy.org"}',
				sig: 'b44adee2f8dfa5aeb928f43544c6332cd4ba9ede822e3c1a08035abc2878f614638dec720dae60f32c0413c363fdf5aefb24619e3aa1cd18ec497b3623a4620d',
				fromConsensusEvent: false
			}
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
			PermanymEventID: '402129b2647cda0c345da51244faf33e267630e4869eecab02ae34787da930ea',
			LatestKind0: {
				id: 'f9bf3bce0cace5485b4f489d0ac67b34b3f4708d2886c98e10e6e379cf58ba7d',
				pubkey: 'e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a',
				created_at: 1692296409,
				kind: 0,
				tags: [],
				content:
					'{"banner":"https://i.postimg.cc/fy8P1Mdf/20230128-220417.jpg","website":"https://onosendai.tech","nip05":"arkinox@arkinox.tech","picture":"https://avatars.githubusercontent.com/u/99223753?s=400&u=a5c6e84e34485e3ebbf93c9cd4ae2e85ef0e293c&v=4","lud16":"arkinox@getalby.com","display_name":"arkinox","about":"Cyberspace engineer for ONOSENDAI. Join the community https://t.me/ONOSENDAITECH\\nCo-Founder of innovatAR.io","name":"arkinox","username":"arkinox","displayName":"arkinox","lud06":"","pubkey":"e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a","npub":"npub1arkn0xxxll4llgy9qxkrncn3vc4l69s0dz8ef3zadykcwe7ax3dqrrh43w","created_at":1686063428}',
				sig: '88432280b53c2236c3d57c4992add0333431fc011b5dfb64ce2983636976e589a14a8cf827162d47dcbdf284c77331378b6c9388c5da9b63a0e70c2f52453e96',
				fromConsensusEvent: false
			}
		},
		ee6cd7fd534667b7aacaaa7411dea425c0b5bf0e4b6be0e808fabac650bf237c: {
			Account: 'ee6cd7fd534667b7aacaaa7411dea425c0b5bf0e4b6be0e808fabac650bf237c',
			Name: 'gibbs',
			UniqueSovereignBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CharacterVouchedForBy: null,
			MaintainerBy: '',
			Pubkeys: null,
			OpReturnAddr: null,
			Order: 15,
			PermanymEventID: 'cce6be0db69787f921b61fdb53c2fe251c1a7cee6e1c4b6aefbc8e3cc5bfe0c0',
			LatestKind0: {
				id: 'cfe472b1ad36c112b53554f4abc2b86f835452007574b64ae88b4c4f1167cb76',
				pubkey: 'ee6cd7fd534667b7aacaaa7411dea425c0b5bf0e4b6be0e808fabac650bf237c',
				created_at: 1689587048,
				kind: 0,
				tags: [],
				content:
					'{"name":"gibbs","about":"python, golang. salud, socialismo y amor","picture":"https://cdn.nostr.build/i/f14376d8d424ffea1dd9f695f248e4131b18b819dac7df1fdf3d361d18974657.jpg"}',
				sig: 'ec9a402dc89fceb423a188e804ed5a62f9ef78984f54af3d6b84beaa6601477376256e4a2f807f17280e5bb24cc46d1789f86eba98e88ae692f4809cd7071bc1',
				fromConsensusEvent: false
			}
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
			PermanymEventID: 'e526cd0888ad8bc17d92e5763afa2f7994402765c5ab358a4ac7205a462445f4',
			LatestKind0: {
				id: 'd39cf7ed37c9c06cfa3aff0519fe8e224e8bedb69c3bf33a6501f60b206ab196',
				pubkey: 'fa984bd7dbb282f07e16e7ae87b26a2a7b9b90b7246a44771f0cf5ae58018f52',
				created_at: 1691063041,
				kind: 0,
				tags: [],
				content:
					'{"banner":"https://pablof7z.com/images/banner.jpg","website":"https://pablof7z.com","nip05":"_@f7z.io","lud16":"pablof7z@ln.tips","damus_donation":15,"display_name":"PABLOF7z","about":"Writing software for fun and freedom / former NIP-26 apologist\\n\\n🎯 psbt.io -- IFTTT for bitcoin txs\\n🎯 nostrit.com -- IFTTT for nostr publishing\\nananostr.com -- Craigslist on Nostr\\nnostri.chat -- Chat widget over nostr\\nzaplife.lol -- Zap Feed\\nzapstr.live -- Nostr music/podcast client\\nhighlighter.com -- Highlights and knowledge organization\\nNDK -- https://ndk.fyi","picture":"https://pablof7z.com/images/me.jpg","name":"pablof7z"}',
				sig: '30e071c7fcd6130865c2db57457e891986592395ad7c5adc368f2dde8bc8cc1d14719242bc3373f00c502584bc7b5b65daf268793ae2d99b196ce40bc0775f05',
				fromConsensusEvent: false
			}
		}
	},
	merits: {
		'041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2': {
			'546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882': {
				Account: '',
				RocketID: '',
				LeadTimeLockedMerits: 1,
				LeadTime: 1,
				LastLtChange: 0,
				LeadTimeUnlockedMerits: 0,
				TotalMerits: 0,
				Requests: null
			},
			e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a: {
				Account: '',
				RocketID: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
				LeadTimeLockedMerits: 0,
				LeadTime: 0,
				LastLtChange: 800000,
				LeadTimeUnlockedMerits: 20000,
				TotalMerits: 0,
				Requests: [
					{
						LtLocked: false,
						OwnedBy: 'e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a',
						CreatedBy: 'e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a',
						RocketID: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
						UID: 'e78b8730c3c5dc5b86e16efe566ad278315997c38e62106a78f955b1f77c6d31',
						Problem: 'd542e4e6ebdf31d9a22d8c87886051c79e153e86b9ebf77b056008d4502609d6',
						CommitMsg: '',
						Solution: '',
						Commit: '',
						Amount: 10000,
						RemuneratedAmount: 0,
						DividendAmount: 0,
						WitnessedAt: 800000,
						Nth: 1,
						Ratifiers: {
							'546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882': {}
						},
						RatifyPermille: 1000,
						Blackballers: {},
						BlackballPermille: 0,
						Approved: true,
						Rejected: false,
						MeritsCreated: 10000
					},
					{
						LtLocked: false,
						OwnedBy: 'e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a',
						CreatedBy: 'e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a',
						RocketID: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
						UID: '360d72ec26e0d69b803b976d410e9cbc91cf95d9333d9708950d742a0bafad4e',
						Problem: '0b06e50e10bf44ec5d13ee4737e55ca900941e3c4b9981d31ba9e025922d38ff',
						CommitMsg: '',
						Solution: '',
						Commit: '',
						Amount: 10000,
						RemuneratedAmount: 0,
						DividendAmount: 0,
						WitnessedAt: 803853,
						Nth: 2,
						Ratifiers: {
							'546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882': {}
						},
						RatifyPermille: 1000,
						Blackballers: {},
						BlackballPermille: 0,
						Approved: true,
						Rejected: false,
						MeritsCreated: 10000
					}
				]
			}
		},
		'30bc123dd2a36a04b0a66c858a8fbc7e348a9f110c93f1afdcfd9625eeabf513': {
			d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075: {
				Account: '',
				RocketID: '30bc123dd2a36a04b0a66c858a8fbc7e348a9f110c93f1afdcfd9625eeabf513',
				LeadTimeLockedMerits: 1,
				LeadTime: 1,
				LastLtChange: 800000,
				LeadTimeUnlockedMerits: 0,
				TotalMerits: 0,
				Requests: null
			}
		},
		'5ae2d0f32aa7f656a752cb1700c175fb8e37132effdcf1836c019322d4dd31af': {
			d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075: {
				Account: '',
				RocketID: '5ae2d0f32aa7f656a752cb1700c175fb8e37132effdcf1836c019322d4dd31af',
				LeadTimeLockedMerits: 1,
				LeadTime: 1,
				LastLtChange: 800000,
				LeadTimeUnlockedMerits: 0,
				TotalMerits: 0,
				Requests: null
			}
		},
		dcae336bb17d655b4a78758fec3afc344ca0959f6cfd7ec9ea8f9814934bf3ce: {
			d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075: {
				Account: '',
				RocketID: 'dcae336bb17d655b4a78758fec3afc344ca0959f6cfd7ec9ea8f9814934bf3ce',
				LeadTimeLockedMerits: 1,
				LeadTime: 1,
				LastLtChange: 800000,
				LeadTimeUnlockedMerits: 103108,
				TotalMerits: 0,
				Requests: [
					{
						LtLocked: false,
						OwnedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
						CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
						RocketID: 'dcae336bb17d655b4a78758fec3afc344ca0959f6cfd7ec9ea8f9814934bf3ce',
						UID: '428e8c8714924278ed6304fca85fca2385d5e699f3d4d1a2d0374f36cc9635be',
						Problem: 'b5e6890c8fb2417ab269069b9a6204ac3e129a9a5e4b539a4348b26f6f7cf278',
						CommitMsg: '',
						Solution: '',
						Commit: '',
						Amount: 103108,
						RemuneratedAmount: 50,
						DividendAmount: 0,
						WitnessedAt: 800000,
						Nth: 1,
						Ratifiers: {
							d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075: {}
						},
						RatifyPermille: 1000,
						Blackballers: {},
						BlackballPermille: 0,
						Approved: true,
						Rejected: false,
						MeritsCreated: 103108
					}
				]
			}
		},
		dd862650ad92cba7953211a601e65250377934fb2027ad13fac8e4e9c4e805b6: {
			d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075: {
				Account: '',
				RocketID: 'dd862650ad92cba7953211a601e65250377934fb2027ad13fac8e4e9c4e805b6',
				LeadTimeLockedMerits: 1,
				LeadTime: 1,
				LastLtChange: 800000,
				LeadTimeUnlockedMerits: 0,
				TotalMerits: 0,
				Requests: null
			}
		}
	},
	replay: {
		'00000000827ffaa94bfea288c3dfce4422c794fbb96625b6b31e9049f729d700':
			'a14a1faa6eff885d8cbd2a01da3ead62e14bade0822968917f5eedb58d8d84cc',
		'3492dd43d496a237f4441fd801f5078b63542c3e158ffea903cb020a1af4ffdd':
			'f4fc7ed435d68f2684e3072a973a565a1f81e759c3acf28bad014036c62ecbda',
		'546b402e5e6967ed2187706bdf0927110c7bebeffd713c35a03b9161921c0871':
			'641601f94f9835e0ca25cc7885f5699fc64dd7ad06358012827d898646f1c1c1',
		'546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882':
			'40c9f2747ec27b5b65c167c2e71376bf1014022d5ada195eae04b8cd1ed5666c',
		'652d58acafa105af8475c0fe8029a52e7ddbc337b2bd9c98bb17a111dc4cde60':
			'19cfd2082b0b2047bc30cf99542cd8b7fb773782fd7267276fe3be5d53818f50',
		'659505becda938dafde592af9b5a4f2ac23e70a1dc2f3148e8239dcc31e9c054':
			'87343929c113e6f29a3626e62776f6062c1de44d228d36e108cc099c9f7efe28',
		'7b1589d7c04f1c555e6fd84024637ac95ceb4853e1fcfbb1bb823c8b2cfd64fc':
			'c75b9adafc11db49b29f243fe208c16d123b939a4d5c23cb9be7012a4c0160a4',
		'95a69326449931adda32e7e0f6275bec0e387abeee4bb56b3e94f46a6ac402e2':
			'e04fe5e8072c1eeea0856d83ad92c3273f7edf889f134b64c1a93407a06ef6d2',
		'97c70a44366a6535c145b333f973ea86dfdc2d7a99da618c40c64705ad98e322':
			'64322510976a860e7a03fd0357072c8bcfbec26a132d184fdca14170e9f18faa',
		c5fb6ecc876e0458e3eca9918e370cbcd376901c58460512fe537a46e58c38bb:
			'9145d7e0189a53d5c0fd101408812fac0127cbca6e9cddcaa92f1e671ee6346a',
		c80b5248fbe8f392bc3ba45091fb4e6e2b5872387601bf90f53992366b30d720:
			'6c2589dac645c884e108fe89f8f8530c773211df01ddf840aedf13f60486639e',
		c8383d81dd24406745b68409be40d6721c301029464067fcc50a25ddf9139549:
			'35c6ef9e839c1e7490a9b6ff36f6f77c8e54fe2a220d9f67dd6903739f7bf01b',
		cc8d072efdcc676fcbac14f6cd6825edc3576e55eb786a2a975ee034a6a026cb:
			'89e3c2951ee8cafb1f45a1f153a12d346eb91bd5564930793b31d09d0e9065c1',
		d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075:
			'1dbfc5b65597c2fbd501a1b7f9dfac45d29219f0dc78ffc59b6a68d18f1f3bc5',
		deba262b2d87f7ed1252241e607bd1bbf42e67354992f89e7536d65d7a19e423:
			'015e77cdaa5b1486c115ae4b5b3790c5890bd58f1c7b7af5a25c6c37d1dfdd66',
		e25a8b2051022a08f97d267d4b99ddfc500a0bfe149a5f671e46f72e9ea36ec9:
			'a71b71bee9dec75c338cf6e1c8f52a03df43e448f9933331d24b729dc9a8b4be',
		e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a:
			'360d72ec26e0d69b803b976d410e9cbc91cf95d9333d9708950d742a0bafad4e',
		ee6cd7fd534667b7aacaaa7411dea425c0b5bf0e4b6be0e808fabac650bf237c:
			'cce6be0db69787f921b61fdb53c2fe251c1a7cee6e1c4b6aefbc8e3cc5bfe0c0',
		fa984bd7dbb282f07e16e7ae87b26a2a7b9b90b7246a44771f0cf5ae58018f52:
			'c8211925c93f749b2f8400fc872335a2b698be5c464bc0a5b3860b60531d8be6'
	},
	rockets: {
		'041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2': {
			RocketUID: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			RocketName: 'nostrocket',
			CreatedBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			ProblemID: '1bf16cac62588cfd7e3c336b8548fa49a09627f03dbf06c7a4fee27bc01972c8',
			MissionID: '',
			Products: [],
			Maintainers: null
		},
		'30bc123dd2a36a04b0a66c858a8fbc7e348a9f110c93f1afdcfd9625eeabf513': {
			RocketUID: '30bc123dd2a36a04b0a66c858a8fbc7e348a9f110c93f1afdcfd9625eeabf513',
			RocketName: 'rocketmaker',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			ProblemID: 'a37a018bb0a1591467ee64c88228f28bc7a79390b02031bc21e9da6e4a3701f7',
			MissionID: '',
			Products: [],
			Maintainers: ['d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075']
		},
		'5ae2d0f32aa7f656a752cb1700c175fb8e37132effdcf1836c019322d4dd31af': {
			RocketUID: '5ae2d0f32aa7f656a752cb1700c175fb8e37132effdcf1836c019322d4dd31af',
			RocketName: 'Flame Bucket',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			ProblemID: 'f70cfa4ddb76db592c2674b6bea4fc0a46622c8918a8b82f70ecc867342ab055',
			MissionID: '',
			Products: [
				{
					UID: 'e4e920c14af47bbbf03ff1f3d706c4ec6f1064d196add558233bb45d82f4e9da',
					RocketID: '5ae2d0f32aa7f656a752cb1700c175fb8e37132effdcf1836c019322d4dd31af',
					Amount: 6000,
					ProductInformation: 'cf0dc555ce00a2953a8aaaee2c10b05302cab36f3c8b78853e0a8794a0b0ad55',
					NextPayment: {
						UID: 'eb638e8547898642684ffebfdd19c8f825553411fb4faf92033a479529cd25c0',
						Pubkey: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
						LUD06:
							'LNURL1DP68GURN8GHJ7EM9W3SKCCNE9E3K7MF09EMK2MRV944KUMMHDCHKCMN4WFK8QTM8WDHHVETJV45KWMN50Y7WTHX2',
						LUD16: 'gsovereignty@getalby.com',
						Callback: 'https://getalby.com/lnurlp/gsovereignty/callback'
					},
					CurrentUsers: null
				}
			],
			Maintainers: ['d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075']
		},
		dcae336bb17d655b4a78758fec3afc344ca0959f6cfd7ec9ea8f9814934bf3ce: {
			RocketUID: 'dcae336bb17d655b4a78758fec3afc344ca0959f6cfd7ec9ea8f9814934bf3ce',
			RocketName: 'testinet',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			ProblemID: 'bf6bb6520b64f5f8667c04b084be796b2268fce4032a80a5e7301203c823a497',
			MissionID: '',
			Products: [
				{
					UID: '734a503bd5379275e26b88538024845f0904401c1bee8d0d80df800d911f19b9',
					RocketID: 'dcae336bb17d655b4a78758fec3afc344ca0959f6cfd7ec9ea8f9814934bf3ce',
					Amount: 10,
					ProductInformation: 'cf0dc555ce00a2953a8aaaee2c10b05302cab36f3c8b78853e0a8794a0b0ad55',
					NextPayment: {
						UID: 'e095b0856175b614eb1d053b8ee1e1458fb36e7737f86c3a2aa2716712a8942e',
						Pubkey: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
						LUD06:
							'LNURL1DP68GURN8GHJ7EM9W3SKCCNE9E3K7MF09EMK2MRV944KUMMHDCHKCMN4WFK8QTM8WDHHVETJV45KWMN50Y7WTHX2',
						LUD16: 'gsovereignty@getalby.com',
						Callback: 'https://getalby.com/lnurlp/gsovereignty/callback'
					},
					CurrentUsers: {
						d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075: 803853
					}
				}
			],
			Maintainers: ['d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075']
		},
		dd862650ad92cba7953211a601e65250377934fb2027ad13fac8e4e9c4e805b6: {
			RocketUID: 'dd862650ad92cba7953211a601e65250377934fb2027ad13fac8e4e9c4e805b6',
			RocketName: 'PWASTR',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			ProblemID: '1a9e87b5dee97332922f87535e71b6b8ba98edf693762e685f787cf290300657',
			MissionID: '',
			Products: [],
			Maintainers: ['d91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075']
		}
	},
	problems: {
		'015e77cdaa5b1486c115ae4b5b3790c5890bd58f1c7b7af5a25c6c37d1dfdd66': {
			UID: '015e77cdaa5b1486c115ae4b5b3790c5890bd58f1c7b7af5a25c6c37d1dfdd66',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title:
				'Problem: When there are many comments, the problem view opens with the view at the bottom',
			Body: 'When clicking "read more..." on an individual problem with many comments, the view opens scrolled-down. This assumes the user is mainly interested in the comments, however it seems best to open at the top so the problem description can be read first. Same behavior seen in Chrome and Firefox.\n\n#### Solution: Start with the view at the top of the page.',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'deba262b2d87f7ed1252241e607bd1bbf42e67354992f89e7536d65d7a19e423',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'0601c11d647919d0df45f38a07a37d0f5e55fad362ec83651ce542125ebce670': {
			UID: '0601c11d647919d0df45f38a07a37d0f5e55fad362ec83651ce542125ebce670',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: "Problem: can't see how long a problem has been claimed for",
			Body: "People sometimes claim problems and disappear, leaving it in a locked state.\n\nMaintainers can free these problems, but they shouldn't do this unless the time the problem has been locked for exceeds 432 blocks.\n\nSolution:\nDisplay how many blocks a problem has been claimed for",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'0b06e50e10bf44ec5d13ee4737e55ca900941e3c4b9981d31ba9e025922d38ff': {
			UID: '0b06e50e10bf44ec5d13ee4737e55ca900941e3c4b9981d31ba9e025922d38ff',
			Parent: 'e239baf89d948964107181d04801f7b2f4894c6b41c7e6a9f33d24be000310bf',
			Title: "Problem: don't have an image to use for the product header",
			Body: "Problem: we don't have an actual image to use for the flame bucket product\n\nSolution: hopefully arkin0x can make one that looks awesome ",
			Closed: true,
			ClaimedAt: 803853,
			ClaimedBy: 'e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a',
			CreatedBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			Rocket: '5ae2d0f32aa7f656a752cb1700c175fb8e37132effdcf1836c019322d4dd31af',
			Tags: {}
		},
		'145fe07c50030058d42cfa4ca72337b030b7f06fa6ea285b30bdc1f462f11b46': {
			UID: '145fe07c50030058d42cfa4ca72337b030b7f06fa6ea285b30bdc1f462f11b46',
			Parent: 'e239baf89d948964107181d04801f7b2f4894c6b41c7e6a9f33d24be000310bf',
			Title: "Problem: can't put header images on products",
			Body: "We can't actually put a header image on a product yet.\n\nSolution: add an image URL to the product struct and add a field in the frontend to insert it.\nMust be product creator or maintainer on the product's rocket to update this.",
			Closed: false,
			ClaimedAt: 803853,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'1a0f2e5aa2bbc0fb14cf1985f3336266a2b33ed35310427885e0e508c3f16e54': {
			UID: '1a0f2e5aa2bbc0fb14cf1985f3336266a2b33ed35310427885e0e508c3f16e54',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: "Problem: can't link existing problems to each other",
			Body: 'A "child" problem is a dependency of a parent problem. This is an explicit and direct relationship. A parent cannot be closed unless all children are closed.\n\nBut sometimes you go to log a problem, and find out that someone else has already logged it under a different parent. In this situation, the child problem is a dependency of both parents.\n\nTo avoid needing to log the same problem multiple times, we should be able to simply link any problem as a dependency of any other problem.\n\nCaveat: need to prevent circular dependencies.',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'1a9e87b5dee97332922f87535e71b6b8ba98edf693762e685f787cf290300657': {
			UID: '1a9e87b5dee97332922f87535e71b6b8ba98edf693762e685f787cf290300657',
			Parent: 'f5c181d06d815881ac441037afcfbf6c0f0aba1e67dd123435bc0c5811a04340',
			Title: 'Problem: building things with nostr is less efficient than it needs to be',
			Body: "Building apps to facilitate interaction over the nostr protocol is more annoying and less efficient than it could be. \n\n* Similar code is repeated across many different projects, and all of this code is maintained separately. \n* Code is mostly collaborated up using github, which is a huge vulnerability\n\n### Possible solution:\n\nCompose frontend apps from nostr events.\n\nAnyone can re-use anyone else's events to compose an application. Think of these events as modular micro-libraries and micro-elements with standardized interfaces.\n\nApps are composed by following a particular route through directed acyclic graphs of events. The route that is followed through the graph determines how the app is constructed for the end user. The route can be programmed but can also be driven by user action such that an application is constructed on-the-fly depending on what action the user takes.\n\nFor example, when tapping on a community, that community's functionality will be pulled in from events and rendered for the user. Different communities might have different functionality.\n\nInstead of sending pull requests to a repository, developers simply publish events. Instead of asking a maintainer to merge a patch, the end user themselves can immediately try the newly created feature without any action by package maintainers.\n\nUsers can set an amount to zap each event in the chain of events they consume. Events (functions) that are more useful to users will end up getting zapped more. This would work much the same way as V4V works on fountain etc, but for code rather than audio.\n\n### Architecture\n- Events MUST contain exactly one Function, Style, Element, or Component. \n- Events MAY specify a Lightning address to recieve automatic V4V zaps for usage.\n\n#### Function Events\n- Function events take inputs and produce outputs\n- Function events MUST NOT retain any internal state\n- Function events MAY take other function events as input by passing in the event ID\n- Function events MAY produce standard Typescript functions as outputs (to be executed by the browser)\n- Function events MUST be composed of standard Typescript\n- Function events MUST specify the Type and number of inputs and outputs using the tags `in` and `out`.\n\n#### Element Events\nElement events are Function events that produce exactly one DOM Element when executed.\n\n- Element events MAY take JSON objects as inputs\n- Element events MAY take other Element events as inputs by passing in the event ID\n- Element events MAY take Style Events as inputs by passing in the event ID\n- To produce complex elements, take multiple Element events as inputs and produce a single DOM Element as output\n\n#### Style Events\nStyle events MUST contain at least one `property` and `value`.\nStyle events do not need to include a `selector`. Element Events should instead include the ID of the relevant Style event and use this ID as the class. CSS Properties and Values can then be injected, using the event ID as the selector.\n\n#### Component Events\nA Component Event contains Function, Element, Style, and other Component event IDs to be compiled into a PWA by pwastr.js\n- Lisp style language\n\n#### State\nPWASTR apps MUST NOT retain any local state, but MAY cache events.\n",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'1b5dac770c061a1cec7c14bf7892cf46e414feba3699e8a1a0454d6eb90f6904': {
			UID: '1b5dac770c061a1cec7c14bf7892cf46e414feba3699e8a1a0454d6eb90f6904',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: "Problem: can't submit merit requests",
			Body: 'Merit requests are how we indicate and communicate the value we believe our work has in comparison to that of others.\n\nThis is the basis by which merit cap tables enter nostrocket state in order to distribute revenue when someone pays for a product or service offered by a rocket.\n\nThe problem right now is that no one can actually log a merit request.',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'1bc827cc57e4ff13f901b1e5910d1c7e8165311caaa5112705404ab7fb0d5e7d': {
			UID: '1bc827cc57e4ff13f901b1e5910d1c7e8165311caaa5112705404ab7fb0d5e7d',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: 'Problem: many unrelated comments are displayed on problems',
			Body: 'There are a lot of unrelated comments displayed when opening a problem.\n\nThis is due to the tag structure.\n\nSolution: parse the tags somehow to find comments that should be displayed and reject the ones that should not',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'1e05473b181d03cf46592cfb4f2435db86cea864345f142e17c31eef70fe16d1': {
			UID: '1e05473b181d03cf46592cfb4f2435db86cea864345f142e17c31eef70fe16d1',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: spaceman site gets fully re-rendered every time state gets updated',
			Body: 'This is pretty annoying. Especially when adding problems to the problem tracker.',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'299e9a6976c7adcb9545a67d3ed31c77d8871115176c9457380406972088a019': {
			UID: '299e9a6976c7adcb9545a67d3ed31c77d8871115176c9457380406972088a019',
			Parent: 'fdcfa956d84a4bd7c01dfb3412646008908e7eaa8a0130afe8a8d669fcc449f7',
			Title: "Problem: can't view existing merit requests",
			Body: 'Participants can log merit requests but no one can see them anywhere or interact with them in any way.\n\nSolution:\nDisplay open merit requests on the Merits page. ',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'2bff867f3377c37036ce1df136cd4117539220138a9bd2c886ef6b8c144a26d3': {
			UID: '2bff867f3377c37036ce1df136cd4117539220138a9bd2c886ef6b8c144a26d3',
			Parent: 'b7cb60a1b0fafd62b53e1785a13270873f637b6662218b3358ba155392827b86',
			Title: "Problem: sub-rockets can't have their own maintainers",
			Body: "The maintainer tree is currently global, and so there are only Nostrocket maintainers.\n\nSometimes it's going to be neccessary to have a maintainer tree that is specific to a particular rocket, e.g. for updating products.",
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'325f3bb682fc97ce31ccea8d3fd68c3cc79dccefb8d08537b274a89e7f72c1cb': {
			UID: '325f3bb682fc97ce31ccea8d3fd68c3cc79dccefb8d08537b274a89e7f72c1cb',
			Parent: '4080a30dad130e68a186e89e9c80bb7f69201902aec840cc8d2d84e05efced72',
			Title: "Problem: can't derive the next payment address from current state of nostrocket",
			Body: "There's currently no implementation of the nostrocket payment round-robin algorithm. \n\nThis is core to nostrocket being non-custodial.\n\nUsing lightning prisms is one option, but there are currently no best practices to make this non-custodial, it currently relies on lightning nodes to do the actual work of splitting the payments and forwarding the sats to multiple wallets. This is not an option for Nostrocket because it must remain non-custodial and therefor cannot recieve payments.\n\nPayments for products/services created through Nostrocket must go directly to the meritholders of the rocket recieving the payment. \n\nThe Nostrocket payment round-robin is an algorithm to determine the next-payment-address from the current set of merit-holders such that incoming payments are eventually-congruent with the proportion of merits held by pubkeys within a rocket. \n\nThis algorithm is defined in detail by the Nostrocket Unprotocol but it is not yet implemented.",
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'3484e7ea344e0a3ff162855e69693fb98aebdce77ef30a804bdd184d7ee1c0b1': {
			UID: '3484e7ea344e0a3ff162855e69693fb98aebdce77ef30a804bdd184d7ee1c0b1',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: difficult to see how merits relate to different participants',
			Body: 'The page displaying merits is not very clear about who has what merits\n\nsoution: use some borders etc to show groupings of different rockets and merits',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'349b809db0b1c384c67b343d4a837c1adec72589a60e53da3d8fb891c9e0ce44': {
			UID: '349b809db0b1c384c67b343d4a837c1adec72589a60e53da3d8fb891c9e0ce44',
			Parent: '5b111e831c8b11b0303a1ed9c8cf7aa1b21dfe32d5d62d948ffff63388809207',
			Title: 'Problem: describe the problem you face or have observed in less than 100 characters',
			Body: 'It does require you to create styling based on the predefined tags? \n\nme thinks 🧐 the best way to go is just use a framework like react or vue or svelte for the reference build ?',
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'c8383d81dd24406745b68409be40d6721c301029464067fcc50a25ddf9139549',
			Rocket: 'dd862650ad92cba7953211a601e65250377934fb2027ad13fac8e4e9c4e805b6',
			Tags: {}
		},
		'35c6ef9e839c1e7490a9b6ff36f6f77c8e54fe2a220d9f67dd6903739f7bf01b': {
			UID: '35c6ef9e839c1e7490a9b6ff36f6f77c8e54fe2a220d9f67dd6903739f7bf01b',
			Parent: '5b111e831c8b11b0303a1ed9c8cf7aa1b21dfe32d5d62d948ffff63388809207',
			Title: 'Problem: describe the problem you face or have observed in less than 100 characters',
			Body: 'Explain the problem as clearly as possible. Markdown **is supported**.\n\n#### Solution: If you have an idea of what the solution might be, include it.\n\nIt does require you to create styling based on the predefined tags ? \nme thinks 🧐 the best way to go is just use a framework like react or vue or svelte for the reference build ?',
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'c8383d81dd24406745b68409be40d6721c301029464067fcc50a25ddf9139549',
			Rocket: 'dd862650ad92cba7953211a601e65250377934fb2027ad13fac8e4e9c4e805b6',
			Tags: {}
		},
		'406a10bace4399d9928812d9e5377deef7e619e46d70df36e66af75d47d49109': {
			UID: '406a10bace4399d9928812d9e5377deef7e619e46d70df36e66af75d47d49109',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title:
				'Problem: When there are many comments, the problem view opens with the view at the bottom',
			Body: 'When clicking "read more..." on an individual problem with many comments, the view opens scrolled-down. This assumes the user is mainly interested in the comments, however it seems best to open at the top so the problem description can be read first. Same behavior seen in Chrome and Firefox.\n\n#### Solution: Start with the view at the top of the page.',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'deba262b2d87f7ed1252241e607bd1bbf42e67354992f89e7536d65d7a19e423',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'4080a30dad130e68a186e89e9c80bb7f69201902aec840cc8d2d84e05efced72': {
			UID: '4080a30dad130e68a186e89e9c80bb7f69201902aec840cc8d2d84e05efced72',
			Parent: '462f6266b83d8abd9a3a151f25942df95199fa8be189adf69e2f54c7feed1a88',
			Title: 'Problem: no way for the relay to see which pubkeys have paid',
			Body: "There is currently no way to do this because payments haven't been implemented in the Nostrocket Engine yet.\n\nAs per the Nostrocket Unprotocol, payments for products/services need to round-robin between the lightning addresses of merit holders, weighted by how many merits they have so that it is eventually-consistent.\n",
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025': {
			UID: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Parent: 'e33b0ca01858aa06aedd77484d5b6b53c0a234e08c2552d9fdccde794dde1772',
			Title: 'Problem: nostrocket is not currently applicable to more than a few people',
			Body: "The nostrocket implementation is currently lacking most of the features that are described in the unprotocol.\n\nThis means most people are not really able to use nostrocket for very much. It's only really applicable to a few people at this stage because it takes a lot of time and effort to understand what it is and even more to get involved.\n\nSolution: start adding problems nested under this one when it relates to the implementation and UX of Spaceman, Engine, the Relay, etc.\n\nWhenever logging a problem, think: does solving this problem make bring Nostrocket closer to another participant getting involved?",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'434c8f9b2340a61192ab6462b0bf548da57c4454f312437bdc1977d9117eec62': {
			UID: '434c8f9b2340a61192ab6462b0bf548da57c4454f312437bdc1977d9117eec62',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: "Problem: can't view problems by context",
			Body: 'I want to be able to view problems based on what context they are applicable to.\n\nFor example, I want to see which problems are related to the Engine repository, but not spaceman. If I could tag problems with the relevant repository and filter by this, that would be great.\n\nSome other things I might want to filter by are langauge, difficulty level, etc.\n\nSolution:\n\nImplement a state machine that administers tags.\nTags should have types, e.g. `language`, `repository`, `difficulty`.',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'462f6266b83d8abd9a3a151f25942df95199fa8be189adf69e2f54c7feed1a88': {
			UID: '462f6266b83d8abd9a3a151f25942df95199fa8be189adf69e2f54c7feed1a88',
			Parent: 'f70cfa4ddb76db592c2674b6bea4fc0a46622c8918a8b82f70ecc867342ab055',
			Title: "Problem: don't have an easy way to deploy a new relay",
			Body: "There's currently no super easy way to deploy a new relay that can subscribe to nostrocket state.\n\nSolution:\nA build script that can be executed to install everything required to deploy a relay that authorizes pubkeys based on nostrocket state.",
			Closed: false,
			ClaimedAt: 804070,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '5ae2d0f32aa7f656a752cb1700c175fb8e37132effdcf1836c019322d4dd31af',
			Tags: {}
		},
		'49ebe614759c1d992d81c421a65e5827f805fbb9a1621e5c47a6c11f64e98250': {
			UID: '49ebe614759c1d992d81c421a65e5827f805fbb9a1621e5c47a6c11f64e98250',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: "Problem: rocket indicator on problems reverts back to nostrocket when it shouldn't",
			Body: 'At the top-right of a problem there is an indicator showing which rocket currently owns the problem.\n\nThis works for the root problem associated with each rocket, but sub-problems display "nostrocket" even when they are nested under a problem that is owned by a different rocket.',
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'54ae8993f28ddd210f2e8f527e7cfc2c827b69a5873b91924030e7686b07eeac': {
			UID: '54ae8993f28ddd210f2e8f527e7cfc2c827b69a5873b91924030e7686b07eeac',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: there is no maintainer tree',
			Body: 'Some actions require a maintainer - e.g. changing which rocket a problem is tagged with, closing a problem if the person who logged it disappears, merging pull requests, etc.\n\nThe maintainer tree is documented in the Nostrocket Unprotocol but it has not been implemented in the Engine or Spaceman.',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'5b111e831c8b11b0303a1ed9c8cf7aa1b21dfe32d5d62d948ffff63388809207': {
			UID: '5b111e831c8b11b0303a1ed9c8cf7aa1b21dfe32d5d62d948ffff63388809207',
			Parent: '748eefa1bd4b342d36e3d65ec2e0201db53e8de33c4da1b666fe1989b8b55bcc',
			Title: "Problem: don't know what we should use as an example Element event to be rendered",
			Body: "### Solution:\nAs this problem tracker is still a bit clunky, it's easier to collaboratively reason about this using github.\n\nI have created a document [here](https://github.com/nostrocket/pwastr/blob/main/example_events.md) where we can reason about this problem more efficiently.\n",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: 'dd862650ad92cba7953211a601e65250377934fb2027ad13fac8e4e9c4e805b6',
			Tags: {}
		},
		'5de795a3fc4ad9a1726ea86f649b07b009f9701bcfc304aaa6ff6543238b30f4': {
			UID: '5de795a3fc4ad9a1726ea86f649b07b009f9701bcfc304aaa6ff6543238b30f4',
			Parent: 'e904b794eb25a3416fc14ee889ac36a463540fecb39f374c9df89c9879c0ad76',
			Title: 'Problem: nostrocket rocket object does not have a rocket ID',
			Body: 'The nostrocket rocket is the only one which is not created by publishing an event and so it does not have a rocket ID.\n\nSolution: not sure yet',
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'5e8a3d01085be68cd4c60503a6d81424a93541afe559e8d1f42b39f9a0f48e77': {
			UID: '5e8a3d01085be68cd4c60503a6d81424a93541afe559e8d1f42b39f9a0f48e77',
			Parent: '4080a30dad130e68a186e89e9c80bb7f69201902aec840cc8d2d84e05efced72',
			Title: "Problem: can't pay for specific products/services",
			Body: 'We can derive the next payment address from the current nostrocket state, but we can\'t actually store the result of payments anywhere.\n\nSoluton:\nAllow rocket maintainers to add predefined amounts (in sats) for incoming payments. This way we can create a new invoice for the next payment address for each payment amount and store this invoice in state. \n\nWhen a user makes a payment, the client will publish an event that contains the preimage, proving that the payment has been made. When the state machine sees this it adds the payment to state, mapped to the pubkey of the user who paid.\n\nThis will introduce a vulnerability whereby someone could "frontrun" the preimage, but whatever it\'s good enough for now.',
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'6439b9ff8c19b537ba5cdb7a7809f2031eb34c033229117ecfe055f608ff8842': {
			UID: '6439b9ff8c19b537ba5cdb7a7809f2031eb34c033229117ecfe055f608ff8842',
			Parent: '37993b56525f84b814b372acfb69c4474951ee255a104ae6fbb2182623ed7ac1',
			Title: 'Problem: we are not living up to our full potential as humanity',
			Body: 'All problems in the problem tracker **must** be nested under another problem, creating a tree structure.\n\nThis initial problem is intended to set the scope of all possible problems that MAY become applicable to Nostrocket - in the broadest possible sense.\n\nThis is the ultimate problem, and the reason for creating this project.',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'748eefa1bd4b342d36e3d65ec2e0201db53e8de33c4da1b666fe1989b8b55bcc': {
			UID: '748eefa1bd4b342d36e3d65ec2e0201db53e8de33c4da1b666fe1989b8b55bcc',
			Parent: '1a9e87b5dee97332922f87535e71b6b8ba98edf693762e685f787cf290300657',
			Title: "Problem: can't take an Element event and render it in the browser",
			Body: "Problem: there's currently no way to take an event containing an HTML element (or nested elements) specification and render this in the browser.\n",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: 'dd862650ad92cba7953211a601e65250377934fb2027ad13fac8e4e9c4e805b6',
			Tags: {}
		},
		'7a87f6d0ebcfc6ba31f8bb402f61efd5428e635187ec635b4052bf46c5229707': {
			UID: '7a87f6d0ebcfc6ba31f8bb402f61efd5428e635187ec635b4052bf46c5229707',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: invalid memory address or nil pointer dereference in eventcatcher.go:88',
			Body: '```\npanic: runtime error: invalid memory address or nil pointer dereference\n[signal SIGSEGV: segmentation violation code=0x2 addr=0x0 pc=0x102b89298]\n\ngoroutine 37 [running]:\nnostrocket/messaging/eventcatcher.SubscribeToTree(0x1400023c120, 0x1400008e300, 0x1400023c0c0)\n        /Users/g/nostrocket_repo/engine/messaging/eventcatcher/eventcatcher.go:88 +0x3c8\ncreated by nostrocket/messaging/eventconductor.handleEvents\n        /Users/g/nostrocket_repo/engine/messaging/eventconductor/eventconductor.go:64 +0x170\nexit status 2\nmake: *** [reset] Error 1\n```',
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'7cf948bc4d2fe757a6a84249f5fe07f3fdb49c6a63c44327897def4ccdd734da': {
			UID: '7cf948bc4d2fe757a6a84249f5fe07f3fdb49c6a63c44327897def4ccdd734da',
			Parent: 'b8f3d33b60be2e1031c1a8066965a83924e2d297562ac5667cb0d2897afa4fab',
			Title: "Problem: problem tracker state machine can't query rocket state machine's state",
			Body: "The problem tracker state machine can't query the rocket state machine's current state because this would cause a recursive query loop.\n\nSolution:\n\nCreate a shared object with the latest state of all state machines. Push current states from the event conductor to this new object.\n\nEvery state machine can then have read-only access to the current state of any other state machine.",
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'7de70de4f9ffc3da796fcaf4d6fa00df81f6adec3afc85d064d9c59f606afd43': {
			UID: '7de70de4f9ffc3da796fcaf4d6fa00df81f6adec3afc85d064d9c59f606afd43',
			Parent: '0601c11d647919d0df45f38a07a37d0f5e55fad362ec83651ce542125ebce670',
			Title: 'Problem: nostrocket is not aware of the current Bitcoin height',
			Body: 'Solution: anyone with votepower can publish blocks, anyone without votepower can validate them.',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'7e712fd21cc4b46a4c7df101cbffc16dbb43a0babfbdb40d2fcd409543e14c51': {
			UID: '7e712fd21cc4b46a4c7df101cbffc16dbb43a0babfbdb40d2fcd409543e14c51',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: "Problem: we sometimes publish consensus events when we shouldn't",
			Body: "Sometimes when consensus events are slow to come from relays we start building a new consensus leaf node when a better one already exists but we just don't know about it.\n\nI think simplest way to deal with this is to classify consensus events into RAW (we haven't seen a consensus event for this event height yet and are creating a new lead node in the consensus tree) and ACK (we have seen a consensus event and agree with it).\n\nWe should only produce RAW events when we are at the current Bitcoin tip. In the case of a stalled network, we can manually set a flag to produce RAW events when we aren't at the Bitcoin tip so that we can catch up to it.",
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'7f30f183c2497b94fbcfb95c8fab9beccf2c4777ff9a192e96d614647af122de': {
			UID: '7f30f183c2497b94fbcfb95c8fab9beccf2c4777ff9a192e96d614647af122de',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: no such file or directory when running engine ',
			Body: '\n```\nrm -rf ~/nostrocket/data\ngo mod tidy\ngo run cmd/engine/*.go\n# github.com/prashantgupta24/mac-sleep-notifier/notifier\nIn file included from ../../go/pkg/mod/github.com/prashantgupta24/mac-sleep-notifier@v1.0.1/notifier/notifierMain.go:7:\n./main.h:5:10: fatal error: mach/mach_port.h: No such file or directory\n    5 | #include <mach/mach_port.h>\n      |          ^~~~~~~~~~~~~~~~~~\ncompilation terminated.\nmake: *** [Makefile:8: reset] Error 1\n```\nI was running engine at Ubuntu 22.04.1 LTS and run into the problem above.\n',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'cc8d072efdcc676fcbac14f6cd6825edc3576e55eb786a2a975ee034a6a026cb',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'83d3e52e74184006aa221ef1e7838c365f106b04f7b6043c394a8f0cd41041e1': {
			UID: '83d3e52e74184006aa221ef1e7838c365f106b04f7b6043c394a8f0cd41041e1',
			Parent: 'a37a018bb0a1591467ee64c88228f28bc7a79390b02031bc21e9da6e4a3701f7',
			Title: 'Problem: not sure if sub-problems get auto-tagged with mother rocket',
			Body: 'Solution: creating this problem to test it.',
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '30bc123dd2a36a04b0a66c858a8fbc7e348a9f110c93f1afdcfd9625eeabf513',
			Tags: {}
		},
		'9a7fb3e13ceea2d22cbe4a7ba6b9a76def2eb9c82f97bdfd31a0508a6126e1c1': {
			UID: '9a7fb3e13ceea2d22cbe4a7ba6b9a76def2eb9c82f97bdfd31a0508a6126e1c1',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: "Problem: people without any solved problems can't see merit request page",
			Body: "There's a bug preventing the merit request page from rendering if the person logged in does not have any closed/solved problems.\n\n",
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'9e0c10d85b318056251a222e36198be40507f8a2023add7f5a288296a9eb4df7': {
			UID: '9e0c10d85b318056251a222e36198be40507f8a2023add7f5a288296a9eb4df7',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: 'Problem: have to abandon problem in order to create sub-problems',
			Body: 'When I claim a problem to work on it, I often find that the problem is not scoped narrowly enough and I want to add sub-problems.\n\nSolution: allow the creation of sub-problems if you are the person who has currently claimed the problem to work on it.\n\nWhen the sub-problem is created, the Engine should automatically remove the claim on the parent problem.',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		'9e45b28e759b65569f41770464314a8ec214cdc6a18fcecd418de4ebf49a55a0': {
			UID: '9e45b28e759b65569f41770464314a8ec214cdc6a18fcecd418de4ebf49a55a0',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: 'Problem: problem tracker event IDs are not very useful to humans',
			Body: 'when viewed in regular clients, problem tracker events publish an event ID in the content. This is kind of helpful but not really\n\nsolution: use the title of the problem in content instead of publishing the event ID',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		a37a018bb0a1591467ee64c88228f28bc7a79390b02031bc21e9da6e4a3701f7: {
			UID: 'a37a018bb0a1591467ee64c88228f28bc7a79390b02031bc21e9da6e4a3701f7',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: "Problem: people can't use Nostrocket for their own projects",
			Body: "It's somewhat possible for people other than myself to begin working on nostrocket, but no one can use Nostrocket for their own projects.",
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '30bc123dd2a36a04b0a66c858a8fbc7e348a9f110c93f1afdcfd9625eeabf513',
			Tags: {}
		},
		ab046170c1c4ab9e22f752a184c8c1fec5e2ce2c127216946113f26649c5f6c6: {
			UID: 'ab046170c1c4ab9e22f752a184c8c1fec5e2ce2c127216946113f26649c5f6c6',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: "Problem: can't send people a direct link to a problem",
			Body: "Sometimes I want to share a problem with someone, but I can't do this because problems do not have direct links.",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		ab8cc9754621bc8954e12db4146649c14ddbc68c45c370cddd8ad67492a9ec06: {
			UID: 'ab8cc9754621bc8954e12db4146649c14ddbc68c45c370cddd8ad67492a9ec06',
			Parent: '5e8a3d01085be68cd4c60503a6d81424a93541afe559e8d1f42b39f9a0f48e77',
			Title: 'Problem: rocket products cannot recieve payments',
			Body: "Product's can't currently receive payments.\n\nSolution:\nGenerate the next payment invoice based on the next-payment-address in state. \n\n",
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		af594b7ffc924c24ec68ad16bef30faee57ea132b458da35e4207983198e6742: {
			UID: 'af594b7ffc924c24ec68ad16bef30faee57ea132b458da35e4207983198e6742',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: merit requests can be submitted to the wrong rocket',
			Body: "Arkinox just submitted a merit request which SHOULD have been sent to the Flame Bucket rocket, but was instead sent to the master nostrocket rocket.\n\nSolution:\nEngine: validate problem rocket and merit rocket match\nClient: don't let user choose the rocket, just automatically select the correct one.",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		afa26466ea226a865758de724364d2c34ef1f316b3d5e6f3fb6d99c3f411698e: {
			UID: 'afa26466ea226a865758de724364d2c34ef1f316b3d5e6f3fb6d99c3f411698e',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: 'Problem: when viewing a single problem, its context in the tree is not clear',
			Body: "When you view a single problem, there's no indication of where it is in the tree and how it relates to other problems.\n\nSolution:\nAdd parent problems in a similar way to how closed problems are currently displayed in the tree (title only, small size).\n\nAlso display children the same way.",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		b008895881439cf427aff7b274d80541397919a82ef2fc6a2a8012981732b0b3: {
			UID: 'b008895881439cf427aff7b274d80541397919a82ef2fc6a2a8012981732b0b3',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: "Problem: can't change the Rocket taged on a problem once set",
			Body: 'Sometimes problems need to move between different Rockets. For example, I just logged a problem about the Flame Bucket Rocket being unable to recieve payments, but this is a problem that should be fixed by Nostrocket even though it is nested under Flame Bucket.\n\nThis is currently not possible.\n\nSolution: patch the Problem state machine event handler to allow this.',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		b1da5a9f19c9ce489773f13060cc2b511add50a37fdd02bcfdba8755aba3567a: {
			UID: 'b1da5a9f19c9ce489773f13060cc2b511add50a37fdd02bcfdba8755aba3567a',
			Parent: '6439b9ff8c19b537ba5cdb7a7809f2031eb34c033229117ecfe055f608ff8842',
			Title: 'Problem: Bitcoin could be fixing the world a lot faster',
			Body: "We have all the tools we need to create a golden age for humanity, but we aren't using them in the most intelligent possible way. \n\nBitcoin has created a new territory of freedom by providing a form of Money that operates in parallel to legacy civilisation, but Number Go Up technology has created a tenacious complacency: get in the lifeboat or put the oxygen mask on, and Satoshi (MHEP) will do all the work. It's careless to assume that a universal Bitcoin standard is inevitable.\n\nWe are likely approaching two challenges on the path towards a universal Bitcoin standard:\n* The Fiat Dominion is slowly overcoming its arrogance and waking up to the existential threat that Bitcoin poses. We can hope for the best, but it's naive to believe the Fiat Dominion will not use every class of weapon at its disposal as it fights for survival.\n* Civilisations tend to collapse exponentially in a cascade failure. The loss of trust in key institutions is a clear signal that this process is underway, and we are likely to be much closer to chaos than it appears to our linear-thinking minds. If Bitcoin doesn't fix things before this happens, we will need to do things the old fashioned way, which sounds romantic but it isn't fun for anyone.\n\n### Solution: a self-organising civilisation centered upon Bitcoin\n\nThe simplest solution is not to fix the current structures and system(s), but to instead build something new, in parallel and as an opt-in alternative. If successful, it will become a fallback position for the masses as legacy civilisation continues its collapse.\n\nThe flow of humanity into a Bitcoin standard is dependent upon the community around Bitcoin making Bitcoin more useful - the larger the economy *around* Bitcoin becomes, the more useful Bitcoin itself is and the faster humanity transitions to a Bitcoin standard.\n\nA civilisation that's centered on Bitcoin will naturally accelerate the usefulness of Bitcoin (to the degree that the civilisation itself is useful). In this regard, our parallel civilisation is just another tool in Bitcoin's toolbox. Instead of trying to modify Bitcoin to become a sharper instrument, we create resilient and powerful parallel systems that integrate Bitcoin.\n\nNostrocket, or any similar attempt, would not be possible without Bitcoin, as anyone who's ever uttered **fix the money fix the world** will understand. Here are some examples:\n\n* A free and open civilisation requires honest price discovery, which can only happen with sound money.\n* A civilisation based on a Money that can be created at no cost is ultimately a worthless civilisation.\n* Nostrocket needs a source of undeniable and objective **Newtonian** truth that everyone can agree on:\n    * A shared clock to know when things happened in the past, what's happening right now, and roughly how long till things should happen in the future.\n    * Objective certainty that some information existed at a specific time in the past.\n    * Objective certainty over the current financial state of a system/organisation/person/transaction/etc.\n    * A constant of economics such that we have the ability to objectively reason about our civilisation's economy.\n* Nostrocket requires economic value to be transacted between parties even when powerful interests want to censor these transactions.\n* Nostrocket requires some mechanism by which state can be considered immutable.\n* We need to know (in a way that leaves no doubt) when something doesn't work and let our new civilisation's ideas die instead of the civilisation itself. Bitcoin is a source of Darwinian truth, and can act as guard rails against Darwinian mistakes - does x produce surplus or not?\n\nAside from a Bitcoin standard being the only viable mechanism to keep any civilisation sane, the corollary to the dependency on Bitcoin described above is that Nostrocket needs Bitcoin to live up to its full potential, so Nostrocket should naturally:\n* support the ongoing development and adoption of Bitcoin, maximising the degree to which Bitcoin benefits humanity,\n* ensure that Bitcoin benefits the bottom of the Cantillion pyramid more than the top\n    * ensure that the bottom of the Cantillion pyramid has the greatest trust in Bitcoin\n        * ensure that the bottom of the Cantillion pyramid is the most Bitcoin-literate\n    * ensure that those at the bottom of the Cantillion Pyramid have the most frictionless and lossless access to store their economic power in Bitcoin\n* prevent any changes to Bitcoin that reduce the degree to which Bitcoin is resistant to attack by the Fiat Dominion\n* be capable of rapidly addressing any imminent threats to Bitcoin, for example if there's evidence of a capability to break any of the cryptographic primitives\n* uphold and promote a view of Bitcoin not as a complacency-breeding NGI technology, but as an active guerrilla insurrection against fiat occupation",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		b4848eb203d65361d6c54aa18140b951454046c1f21bc10b48b0683c2791f164: {
			UID: 'b4848eb203d65361d6c54aa18140b951454046c1f21bc10b48b0683c2791f164',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: the Nostrocket Unprotocol cannot be read by anyone',
			Body: 'No one can actually read the nostrocket unprotocol because it has not been published anywhere.\n\nSolution: implement primitives of the protocol, which allows the protocol to build itself according to the protocol.',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		b5e6890c8fb2417ab269069b9a6204ac3e129a9a5e4b539a4348b26f6f7cf278: {
			UID: 'b5e6890c8fb2417ab269069b9a6204ac3e129a9a5e4b539a4348b26f6f7cf278',
			Parent: 'bf6bb6520b64f5f8667c04b084be796b2268fce4032a80a5e7301203c823a497',
			Title: "Problem: can't test creating a new request for merits",
			Body: "I cannot test the merit request process without affecting mainnet.\n\nI'm logging this problem to claim it as a test case.",
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		b7cb60a1b0fafd62b53e1785a13270873f637b6662218b3358ba155392827b86: {
			UID: 'b7cb60a1b0fafd62b53e1785a13270873f637b6662218b3358ba155392827b86',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: "Problem: can't modify products",
			Body: 'I want to be able to modify the description of a nostrocket product that I have created but this is currently not possible.\n\nSolution: allow the product creator or a maintainer (of the parent rocket) to update product data (price, and the event ID of the product description)\n\n',
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		b8f3d33b60be2e1031c1a8066965a83924e2d297562ac5667cb0d2897afa4fab: {
			UID: 'b8f3d33b60be2e1031c1a8066965a83924e2d297562ac5667cb0d2897afa4fab',
			Parent: '49ebe614759c1d992d81c421a65e5827f805fbb9a1621e5c47a6c11f64e98250',
			Title: "Problem: can't tag problems with a rocket ID",
			Body: 'When a new rocket is created in response to a problem, the rocket embeds the problemID.\n\nThis does not allow problems to be aware of what rockets they are associated with.\n\nSolution:\nAllow problems to be tagged with RocketIDs.\n\nThis also solves the problem of not being able to group problems by the applicable code repository, skill level, language, etc.',
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		bf6bb6520b64f5f8667c04b084be796b2268fce4032a80a5e7301203c823a497: {
			UID: 'bf6bb6520b64f5f8667c04b084be796b2268fce4032a80a5e7301203c823a497',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: "Problem: can't test the Merits state machine",
			Body: "I have implemented Merits. But I can't test this without impacting the mainnet state.\n\nSolution: create a new rocket for testing things",
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: 'dcae336bb17d655b4a78758fec3afc344ca0959f6cfd7ec9ea8f9814934bf3ce',
			Tags: {}
		},
		c4308e18d7b1e72571a0ea9d9aeafbaf311a12dad752819f7b057b35d543855e: {
			UID: 'c4308e18d7b1e72571a0ea9d9aeafbaf311a12dad752819f7b057b35d543855e',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: "Problem: can't re-open a closed problem",
			Body: '',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		c4580022af772dd7780d2a17786c3f7f616da17eee1586e6aaf93ec13015464f: {
			UID: 'c4580022af772dd7780d2a17786c3f7f616da17eee1586e6aaf93ec13015464f',
			Parent: 'b1da5a9f19c9ce489773f13060cc2b511add50a37fdd02bcfdba8755aba3567a',
			Title: 'Problem: unit bias makes people buy shitcoins',
			Body: 'One of the reasons people keep buying shitcoins is because they think Bitcoin is too expensive and that shitcoins are cheaper.\n\nThey see a shitcoin and think they can get a "whole" shitcoin but they can\'t afford a whole Bitcoin.\n\nNewcomers think they are getting something discounted or cheap when they are really just buying something that is massively diluted.\n\n### What is a wholecoin anyway?\n\nThe decimal place in Bitcoin was placed in the centre (of the maximum number of digits) in order to provide maximum flexibility - the same number of digits each side of the decimal. Visually, it looks like this: 00000000.00000000\n\nNothing in the Bitcoin implememtation uses decimal places when computing values, the decimal is purely thematic and added after-the-fact when displaying amounts to the user. It exists for psychological reasons, not technical reasons.\n\n### The solution to unit bias:\n\nThe place where most people go to see the prices of Bitcoin and shitcoins is coinmarketcap. We need to get people to put pressure on them to change the unit from wholecoins to sats.\n\nThe simplest place to start is probably by spreading this petition around: https://www.change.org/chancellor-on-brink\n\n\n\n\n',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		c623d0daeb8ffb3675a606c7912ccf450e6034b161dc5aab099c0d58e927f629: {
			UID: 'c623d0daeb8ffb3675a606c7912ccf450e6034b161dc5aab099c0d58e927f629',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: segfault in eventcatcher',
			Body: '```\npanic: runtime error: invalid memory address or nil pointer dereference\n[signal SIGSEGV: segmentation violation code=0x2 addr=0x0 pc=0x1044c9564]\n\ngoroutine 20 [running]:\nnostrocket/messaging/eventcatcher.SubscribeToTree(0x1400008c120, 0x1400006a300, 0x1400008c0c0)\n        /Users/g/nostrocket_repo/engine/messaging/eventcatcher/eventcatcher.go:63 +0x354\ncreated by nostrocket/messaging/eventconductor.handleEvents\n        /Users/g/nostrocket_repo/engine/messaging/eventconductor/eventconductor.go:64 +0x170\nexit status 2\nmake: *** [reset] Error 1\n```',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		d542e4e6ebdf31d9a22d8c87886051c79e153e86b9ebf77b056008d4502609d6: {
			UID: 'd542e4e6ebdf31d9a22d8c87886051c79e153e86b9ebf77b056008d4502609d6',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title:
				'Problem: there is no way to identify nostrocket participants outside of the identity tree',
			Body: 'A mechanism for identifying nostrocket participants outside of the identity tree could build awareness of nostrocket and draw other people to participate, as well as create cohesion within the group of participants.\n\n#### Solution: award a badge to all nostrocket participants so their participation can be seen in other clients.',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a',
			CreatedBy: 'e8ed3798c6ffebffa08501ac39e271662bfd160f688f94c45d692d8767dd345a',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		d6bcbbe1758e9f1537df3b2bd84d7d1155d850b3ee19231ef1578acfb2341fd2: {
			UID: 'd6bcbbe1758e9f1537df3b2bd84d7d1155d850b3ee19231ef1578acfb2341fd2',
			Parent: 'c623d0daeb8ffb3675a606c7912ccf450e6034b161dc5aab099c0d58e927f629',
			Title: "Problem: don't know when system is sleeping",
			Body: "The segfault described by c623d0daeb8ffb3675a606c7912ccf450e6034b161dc5aab099c0d58e927f629 happens when the system goes to sleep.\n\nThere's nothing we can really do about it unless we know when the system is going to sleep.\n\nSolution: use a C library to detect system sleep.",
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		d8bfee32da831a93d55860945cfc563c28e7014a96ab25eb323a5dda4e481996: {
			UID: 'd8bfee32da831a93d55860945cfc563c28e7014a96ab25eb323a5dda4e481996',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: "Problem: we sometimes create a new consensus tree when we shouldn't",
			Body: 'Sometimes when reproducing the current state of nostrocket, it publishes a new consensus tree when one exists already.\n\nIt seems to be missing an event or something.\n\nSolution:\nA quick and dirty solution would be to check the timestamp when attempting to process a state change event out of consensus mode (the only time when we need to produce a new consensus tree is when seeing a valid state change event that is not currently included in the consensus tree).\n\nIf the timestamp of the event is not recent, then we are probably missing a consensus event somewhere and should try a bit harder to find it before creating a new consensus tree.',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		de562a586f1fd4792a90a8dfc1abe34a15307067b96a05736a4519379c191e5f: {
			UID: 'de562a586f1fd4792a90a8dfc1abe34a15307067b96a05736a4519379c191e5f',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: "Problem: can't take action in relation to problems",
			Body: 'I changed the structure of the events to put opcodes in tags instead of in content, so now nothing works.\n\n',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		e239baf89d948964107181d04801f7b2f4894c6b41c7e6a9f33d24be000310bf: {
			UID: 'e239baf89d948964107181d04801f7b2f4894c6b41c7e6a9f33d24be000310bf',
			Parent: 'f70cfa4ddb76db592c2674b6bea4fc0a46622c8918a8b82f70ecc867342ab055',
			Title: "Problem: there's no header image on the flame bucket product",
			Body: "It's a bit boring and sad to not have an image on the product.",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			Rocket: '5ae2d0f32aa7f656a752cb1700c175fb8e37132effdcf1836c019322d4dd31af',
			Tags: {}
		},
		e33b0ca01858aa06aedd77484d5b6b53c0a234e08c2552d9fdccde794dde1772: {
			UID: 'e33b0ca01858aa06aedd77484d5b6b53c0a234e08c2552d9fdccde794dde1772',
			Parent: 'b1da5a9f19c9ce489773f13060cc2b511add50a37fdd02bcfdba8755aba3567a',
			Title:
				"Problem: we don't have a good way to focus the action of multiple humans while remaining sovereign",
			Body: "When Bitcoiners organise around shared goals, they tend to rely on the State to anchor their organisational structures and serve as the mediator of last resort between all stakeholders. Coinkite and OpenSats, for example.\n\nAll human organisational structures are fundamentally composed of human action (and **inter** action) because human action is the **only** primitive by which humanity can influence how the present reality is brought forth from the infinite potential of the future.\n\nFamilies, tribes, companies, governments, civilisations, etc are all examples of organisational structures composed of human action.\n\n#### Composing human action through boundary conditions\n\nThe usefulness of a bucket is created by the limitations or restrictions imposed by its base and sides. A bucket is useful because it holds water by creating **boundary conditions** on what the water **cannot** do while **remaining in the bucket**.\n\nHuman organisational structures are useful because what they do with humans is analogous to what a bucket does with water. These structures are defined by their boundary conditions on human action - what type of action humans can take while remaining within the organisational structure.\n\n**Centrally planned** organisations like companies or governments tend to create boundary conditions on human action through a combination of:\n\n* internal rules about what types of human action is permissible,\n* internal rulers with the power to decide when to change the rules, and when to break them, and\n* excluding people who don't submit to the rules and rulers (\"don't fit the culture\" or aren't a \"team player\").\n\nHuman action within organisations is also restricted by the underlying security model. Investors tend to rely on the State to enforce contracts, and so any organisation that wants to raise money tends to be nested under the State. All humans within such an organisation are therefor ultimately responsible to the State for their actions. For example, the CFO is responsible to the State for all financial activity performed within the organisation, and all humans within the organisation are responsible to the CFO when their action involves money. The same is true for all aspects of the organisation. It's therefor impossible for an organisation to be nested under the State without being centrally planned.\n\nCentrally planned organisations exist along a spectrum of just how centrally planned they are - from highly planned military organisations to the **Teal** organisations as described by Frederic Laloux (well worth skimming through his book).\n\nSo-called **Decentralised organisations** tend to restrict human action by:\n* deciding ahead of time on all the possible types of human action that shall be permissible within the organisation, and\n* encoding the rules about these actions into some form of state machine (usually a \"smart\" \"contract\").\n\nThese organisations are typically inflexible due to this architecture. Modifying the set of human action that is permissible within the organisation requires smart contracts to be republished, which is where the community generally falls back to trusting a central team.\n\n#### Mutexless organisations\n\nThe more you need upfront consensus or agreement on what to do, the [less speedup you get](https://en.wikipedia.org/wiki/Amdahl%27s_law) by adding additional \"workers\".\n\nThe more sequential operations or mutexes you have, the less speedup you get by adding additional threads or workers because all of those threads need to pause execution and wait for the sequential parts of the process. It's a non-linear relationship: a tiny increase in wait-states drastically reduces the speedup gained when adding more threads. At some point, adding more threads does not result in any speedup.\n\nIn human organizations, we have the same thing. Individuals within the organization are workers or threads. Human organizations have a ratio of sequential to parallel operations, just like computer programs. The more a team needs to stop and synchronize, the less work they get done and the smaller the maximum team size, after which adding more people does not result in any additional productivity.\n\nRequiring permission or agreement over what to do within an organisation is a sequential operation. Meetings are the mutexes of human organisations.\n\nThus, the most efficient organisational structure is one where participants can do productive work without requiring any permission or agreement with others over what work to do.\n\n#### Sovereign organisations\n\nSovereign human action is human action taken by a **sovereign individual**.\n\nSovereign human action does not **require** permission from others. It does not **require** upfront consensus or agreement. The sovereign individual MAY seek agreement or permission before taking some action, but this is not **required**, it's entirely their own decision.\n\nA sovereign organisation is one where individuals may participate while remaining sovereign. A better term for this is a sovereign unorganisation.\n\nThe organisational structure of a sovereign unorganisation MUST be composed of sovereign human action.\n\nA sovereign civilisation is probably some form of meta sovereign unorganisation composed not only of sovereign human action but also many sovereign unorganisations, and inhabited by sovereign individuals.\n\n#### How do we focus sovereign human action?\n\nIf an organisation is sovereign, it's also mutexless because participants can do productive work without requiring any permission or agreement with others over what work to do.\n\nThe implication is that participants within such an organisation can do work without anyone knowing what they are working on, because work can be done without any upfront agreement on what is being built.\n\nHow do we create an organisational structure which allows individuals to remain sovereign and work towards building something without requiring any agreement on what we are building?\n\nWhat are the boundary conditions on sovereign human action that create the conditions for such an organisational paradigm?\n\nThe metric we use to judge if Nostrocket has optimal boundary conditions on human action within it is the community size - are humans being attracted to it faster than any alternative?\n\n* Humans with something to contribute must be better off by acting **within** the structure of Nostrocket than they are by acting within any other structure.\n    * Nostrocket must result in more value for Participants than any other opportunity available to them.\n    * Nostrocket must become, and actively remain, the most efficient organisational paradigm possible with the current technology\n        * The mechanism by which work gets done within Nostrocket cannot require upfront agreement on what that work should involve or what the end result should look like\n        * Nostrocket cannot require any upfront funding and cannot retain any capital\n    * To remove any internal friction, Nostrocket must be radically fair to all Participants, more fair than any other organisational structure\n        * Nostrocket's rules and ideology must be as pristine and *credibly neutral* as possible\n        * It's not possible to be as pristine and neutral as Bitcoin because Nostrocket is an organisational structure while Bitcoin is property, but Bitcoin is the standard to judge against.\n    * The boundary conditions or limitations should be simple, explicit, clear, and graduated such that there's no overhead required to onboard new Participants, and Participants may advance at their own speed along their own zone of proximal development.\n\n---\n\n### Possible Solution: an unprotocol for a universally applicable hill-climbing algorithm, executed by sovereign human action.\n\nThe core of the solution is a hill-climbing algorithm which optimises for increasing the number of Participants.\n\nSoftware can be used to make things more efficient and to provide continuity of the current state of Nostrocket, but the algorithm itself is executed by self-interested sovereign human action and not machine.\n\nHuman action within Nostrocket must be executed for purely self-interested reasons in order for it to be optimally efficient, accurate, scalable, and to minimise any social attack surface. When people solve problems for their own reasons, the solutions are more accurate than when they are doing it because someone is coercing them with money. A case in point: organic contributions to wikipedia vs. paid contributions.\n\nThe life-force (or fuel) of an organisational structure is human action that yields **surplus** - that means production of surplus is in the critical path to more Participants, and so our algorithm must optimise for this.\n\nAmdahl's law can be restated as \"the more you need consensus about what to build, the less efficient you will be at building it\". For Nostrocket to be the most efficient problem solver and builder, it must require the least amount of consensus on what to build and how to build it.\n\nProjects like ZeroMQ have proven that it's possible for valuable products/services (i.e. powerful and effective solutions) to evolve from simple rules with **no upfront planning** or consensus. This is core to our approach to innovation and surplus without requiring any consensus on what to build or how to build it - no upfront planning and no leadership.\n\nThe set of boundary conditions for human action within Nostrocket is defined by the Nostrocket Unprotocol. It's rather long, so here's a summary:\n\n0. Anyone who's not already a **Participant** MAY become a Participant by being validated by an existing Participant. This results in a **tree of Participants** called the Identity Tree.\n\n1. Change follows the **Serbian method** - a continuous pattern of accurately identifying **Problems**, and applying the **simplest possible solution** to each Problem.\n    * This project is currently applicable only to a *very* tiny subset of humanity who are able to understand the concept and do something useful with it, but this subset should get *less tiny* with each problem solved.\n    * As these problems and minimal solutions pile on top of each other, novel and valuable products/services will evolve (read the protocol to get a more complete picture of how this works).\n    * There's nothing that inherently limits Nostrocket to producing software based solutions, it could also produce hardware, houses, food, etc.\n\n2. Any Participant MAY log a **Problem** (an observed matter or situation regarded as unsatisfactory).\n    * There are no bug reports or feature requests, these are just problems (or they aren't).\n    * There are no priority levels for problems, there are just problems that are worth solving (or not).\n    * Problems should be reasoned about and broken down into smaller problems until they are objective or replicable, and actionable.\n    * Problems should be broken down until they are small enough that they can be solved very quickly - anything longer than 6 hours of working time is probably too big.\n    * Problems MUST be relevant to Nostrocket itself. Nostrocket is not a freelancing market or a problem-solver for hire.\n    * Problems MUST be nested under another Problem, creating a Problem Tree.\n\n3. Any Participant MAY **Claim** (and solve, typically with a **Patch**) any unclaimed Problem. Any **Maintainer** can (and should) **Merge** any Patch that does **not** violate the Unprotocol.\n    * At this early stage most of the problems Nostrocket is likely to encounter will simply be with its own implementation, hence they will typically be solved with a Patch. However, if the experiment is a success this will start to involve the physical world, things like Nostrocket meetup or conference related problems might be some of the first examples.\n\n4. A Participant who solves a Problem MAY indicate the value of their work by creating a **Dispendium**\n    * A Dispendium MUST be denominated in Satoshi\n    * A Dispendium is **not** an entitlement or guarantee to be paid\n    * An Dispendium is how a Participant SHOULD communicate the sacrifice they have made in solving the problem\n    * An Dispendium allows Participants to peer review the value being claimed by comparing individual solutions and their associated Dispendiums\n\n5. Participants with **Votepower** MAY vote to **Ratify** (approve) or **Blackball** (reject) a Dispendium.\n    * The Dispendium SHOULD be rejected unless it's along the route (or **critical path**) to more Participants.\n    * Votepower is a measure of a Participant's **skin in the game**.\n    * `Votepower = Shares * Leadtime`\n        * Every Participant's `Leadtime` starts at `0`.\n        * A Participant's Shares **cannot** be spent/transferred if their `Leadtime > 0`.\n        * A Participant MAY increase or decrease their Leadtime by `1` every 2,016 blocks (but can't become negative)\n        * If more than 50% of Nostrocket's Votepower approves a Dispendium, and less than 5% reject it, its Approved.\n    * If Participants with Votepower reject Dispendiums that comply with the Unprotocol and are reasonable amounts, others will see this and stop working, and Nostrocket will die or be forked.\n    * If Participants with Votepower approve Dispendiums that should not be approved, they are diluting their own Shares for no good reason.\n\n6. If a Dispendium is **Approved**, new **Shares** are created for the Participant who logged the Dispendium (1:1 per Satoshi claimed in the Dispendium).\n    * Shares MUST NOT be created **any other way** (that would mean the experiment has **failed**).\n    * Nostrocket has been instantiated with a **single** share as this is technically the only way to bootstrap the process.\n\n7. Participants own **all** revenue produced by anything Nostrocket builds. Whenever anyone pays for a product/service created (or **discovered**) by Nostrocket, the Sats are streamed **directly** to Participants in proportion to the number of Shares they have and how long they've had them.\n    * Revenue distribution MUST be fair for everyone. Potential Participants who take more risk by making sacrifices before it's clear if the experiment will work or not need to agree that it's fair. Potential Participants who want to do work after the concept is well established and revenue is being generated must also agree that revenue distribution is fair.\n    * When there's a pot of money available, Mallory finds a way to corrupt whatever is guarding it.\n    * Nostrocket MUST NOT retain any capital or raise any funds (and doing so is an anti-pattern that fundamentally precludes decentralisation).",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		e904b794eb25a3416fc14ee889ac36a463540fecb39f374c9df89c9879c0ad76: {
			UID: 'e904b794eb25a3416fc14ee889ac36a463540fecb39f374c9df89c9879c0ad76',
			Parent: '1b5dac770c061a1cec7c14bf7892cf46e414feba3699e8a1a0454d6eb90f6904',
			Title: "Problem: can't create initial merit cap table",
			Body: 'Merit requests must be approved by existing merit holders, but when a rocket is first created there are no merit holders.\n\nSolution: allow the creator of a new rocket to instantiate a new merit cap table for their rocket with 1 merit and locked for a lead time of 1 such that their votepower is 1.\n\nThis will give the creator of the new rocket 100% of the initial votepower and they can begin approving or rejecting new merit requests.',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		efdb0962e72a02dc0ffd44e1d58b2427237120b5d4759f85d712ae64e976c211: {
			UID: 'efdb0962e72a02dc0ffd44e1d58b2427237120b5d4759f85d712ae64e976c211',
			Parent: 'a37a018bb0a1591467ee64c88228f28bc7a79390b02031bc21e9da6e4a3701f7',
			Title: "Problem: can't see which rocket owns which problem",
			Body: "When viewing the problem tracker, I can't see which rocket owns each problem.",
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		f40c8de76c5f0326eb3c165c5589fb268c631dc14bb89d489086278e957b78a6: {
			UID: 'f40c8de76c5f0326eb3c165c5589fb268c631dc14bb89d489086278e957b78a6',
			Parent: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Title: 'Problem: Comments are in newest-first order',
			Body: "Comments are currently in newest-first order, which may be good if you're familiar with the situation and want to just see what's new. I believe most viewers will be seeing for the first time and attempting to read the history in chronological order.\n\n#### Solution: A PR is forthcoming to make the order chronological.",
			Closed: false,
			ClaimedAt: 800000,
			ClaimedBy: 'deba262b2d87f7ed1252241e607bd1bbf42e67354992f89e7536d65d7a19e423',
			CreatedBy: 'deba262b2d87f7ed1252241e607bd1bbf42e67354992f89e7536d65d7a19e423',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		f5c181d06d815881ac441037afcfbf6c0f0aba1e67dd123435bc0c5811a04340: {
			UID: 'f5c181d06d815881ac441037afcfbf6c0f0aba1e67dd123435bc0c5811a04340',
			Parent: '6439b9ff8c19b537ba5cdb7a7809f2031eb34c033229117ecfe055f608ff8842',
			Title:
				"Problem: humanity's online social graph is vulnerable to MITM attacks by government and big tech",
			Body: "Governments and big tech have been attacking humanity's online social graph and intervening in our relationships to influence how we communicate and and how we think.\n\nSolution: technically, we have a solution to this: nostr. But not everyone is using it. \n\nThis problem is intended to be a catch-all for anything in the critical path towards every human using nostr as their primary social graph. ",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		f70cfa4ddb76db592c2674b6bea4fc0a46622c8918a8b82f70ecc867342ab055: {
			UID: 'f70cfa4ddb76db592c2674b6bea4fc0a46622c8918a8b82f70ecc867342ab055',
			Parent: 'f5c181d06d815881ac441037afcfbf6c0f0aba1e67dd123435bc0c5811a04340',
			Title: 'Problem: paid relays are difficult to run in a profitable way',
			Body: "Nostr is increasingly relying on paid relays, but they are expensive to run and difficult to scale.\n\nThe skill set required to manage paid relays is considerably diverse, covering many differing fields of expertise.\n\nThe work of relay operators is often duplicated by other operators, making the overall economics less efficient than it could be.\n\nThe risk of doing all of this needs to be taken by a single person, and the only real way to spread this risk out at the moment is to create some kind of centrally planned business structure.\n\n### Possible Solution:\nDeploy a Rocket to manage a set of paid relays.\n\nSeparate out the different skills involved in running a paid relay such that there are more people available because the required skill set is narrower.\n\nDevelopers can focus on incrementally solving problems to improve the relay software.\n\nDevops guys can focus on devops stuff.\n\nFrontend guys can focus on making it easy for users to subscribe.\n\nEveryone who's solving problems in the critical path becomes a merit holder, as is standard behaviour under the nostrocket protocol.\n\nPayment for subscribing to the paid relay set goes directly to merit holders in proportion to their merits, as is standard under the non-custodial nostrocket protocol.\n\n### How this might work\n\nThis would start with a single relay, deployed by this Rocket's first contributor.\n\nProblem: there is no relay deployed under this Rocket.\nSolution: first contributor deploys an instance of the Rocket's relay (probably just nostr-rs-relay with a grpc management layer).\n\nThe relay subscribes to the Nostrocket state to get a list of allowed pubkeys (people who have paid this \"relay\" Rocket).\n\nThe first contributor submits a merit requests for the cost of the VPS and his time (and approves it himself).\n\nWhen there's a problem that falls outside of his domain of expertise or outside his time constraints (e.g. perhaps something to do with the relay implementation), he logs a problem in the relay Rocket's branch of the problem tracker.\n\nIf he was fair and reasonable with his first merit request, then perhaps someone with the required skill set will send a patch to resolve the problem, and then submit a merit request for this. If the first contributor approves the solution, this second contributor now has merits to vote on subsequent merit requests. By definition, both parties completely agree that the number of merits each now holds are in direct proportion to the value of the work they did to contribute to this paid relay rocket.\n\nWhen users pay to join the relay, the payments round-robin between these two merit holders, weighted by the percentage of merits they hold. This makes payments to the set of merit holders non-custodial and eventually-consisitent with the \"cap table\" of this rocket. This is standard behaviour for all payments for products/services created through Nostrocket.\n\nNow when there's a problem that is in neither of these two contributors field of expertise, perhaps someone else will contribute. And the process continues.\n\nIf there's a problem with spam, this probably something that can be improved upon with a patch from a developer.\n\nIf users are having trouble subscribing because the web interface sux, a frontend guy can solve that with a patch.\n\n### Architecture of the relay set\nThe architecture of the relay set would probably be something like this:\nRelays forward all incoming events that they haven't seen before to all the other relays in the set, so that new events can then be seen on any relay in the set.\nPaid users only need to connect to a single relay in the set.\nThey should connect to whichever one is fastest for them. Would be pretty easy to make a simple PWA to find the fastest one.\n\nIf there are not enough relay deployments available to handle the number of paid users, that's simply a problem to solve. It could be solved by the first contributor if they have the time and inclination administer a second instance, or it could be solved by anyone else, by deploying a new instance of the same relay software.\n\nSince each relay instance can be run by different people, there's redundancy not only in terms of technical aspects but also social aspects.\n\nIf a relay operator doesn't comply with the protocol (perhaps they take payments directly instead of through the official channels), then the merit holders would probably vote to remove them from the set, and deny all further merit requests by them. This would also be the case if they are unable to continue solving the original problem (making a relay available). Shouldn't be too hard to write a script to solve the problem of validating uptime and speed standards.\n\nAnyway, just an idea.",
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '5ae2d0f32aa7f656a752cb1700c175fb8e37132effdcf1836c019322d4dd31af',
			Tags: {}
		},
		f8cff9173c92600e22607a8581df48b22f8fc994638a3d1250d80b8fa563d3de: {
			UID: 'f8cff9173c92600e22607a8581df48b22f8fc994638a3d1250d80b8fa563d3de',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: deadlock in consensus handler',
			Body: '```\nPrevious place where the lock was grabbed\ngoroutine 22 lock 0xc0005259f0\nengine/library/debug.go:9 library.ValidateSaneExecutionTime { mu.Lock() } <<<<<\n~/go/pkg/mod/github.com/sasha-s/go-deadlock@v0.3.1/deadlock.go:84 go-deadlock.(*Mutex).Lock { func (m *Mutex) Lock() { }\nmessaging/eventconductor/eventconductor.go:180 eventconductor.processStateChangeEventOutOfConsensus { sane := library.ValidateSaneExecutionTime() }\nengine/library/eventStack.go:40 library.(*Stack).Pop { func (q *Stack) Pop() (*nostr.Event, bool) { }\n\nHave been trying to lock it again for more than 1m0s\ngoroutine 109670 lock 0xc0005259f0\nengine/library/debug.go:11 library.ValidateSaneExecutionTime.func1 { mu.Lock() } <<<<<\n~/go/pkg/mod/github.com/sasha-s/go-deadlock@v0.3.1/deadlock.go:84 go-deadlock.(*Mutex).Lock { func (m *Mutex) Lock() { }\n\nHere is what goroutine 22 doing now\ngoroutine 22 [chan send (nil chan), 1 minutes]:\nnostrocket/state/consensustree.HandleConsensusEvent({{0xc000ab0dc0, 0x40}, {0xc000ab0180, 0x40}, 0x64e1b412, 0x9c401, {0xc0015ef6b0, 0x2, 0x2}, {0xc0010c4b80, ...}, ...}, ...)\n        /Users/g/git/nostrocket/fresh/engine/state/consensustree/newHandler.go:48 +0x328\nnostrocket/messaging/eventconductor.processStateChangeEventOutOfConsensus(0xc0015303f0)\n        /Users/g/git/nostrocket/fresh/engine/messaging/eventconductor/eventconductor.go:191 +0x285\nnostrocket/messaging/eventconductor.handleEvents()\n        /Users/g/git/nostrocket/fresh/engine/messaging/eventconductor/eventconductor.go:142 +0xd14\ncreated by nostrocket/messaging/eventconductor.Start in goroutine 1\n        /Users/g/git/nostrocket/fresh/engine/messaging/eventconductor/eventconductor.go:52 +0x471\n\nexit status 2\nmake: *** [reset] Error 1\n\n```\n',
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec: {
			UID: 'f96ae41386ffc4f87baa9f6759354d7c20460259c8aab50dbf3b7f3e044e90ec',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: 'Problem: the Nostrocket problem tracker is clunky and annoying to use',
			Body: 'Now that we are using the Nostrocket problem tracker to build nostrocket itself, the most pressing problem is that the problem tracker is annoying to use.\n\nSolution: Log problems with the problem tracker, nest them under this problem to keep them all in one place.',
			Closed: false,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		fb010a1d04bf8298fead81718cd31e9d4c3b5fad5add3b31a0b87284a7c9b437: {
			UID: 'fb010a1d04bf8298fead81718cd31e9d4c3b5fad5add3b31a0b87284a7c9b437',
			Parent: 'b1da5a9f19c9ce489773f13060cc2b511add50a37fdd02bcfdba8755aba3567a',
			Title: 'Problem: unit bias compels people to buy shitcoins',
			Body: 'One of the reason that people keep buying shitcoins is because they think Bitcoin is too expensive.\n\nThey see a shitcoin and think they can get a "whole" shitcoin but they can\'t afford a whole Bitcoin.\n\nThere are many reasons why this is flawed reasoning, but few which the average human can understand without dedicating time and effort.\n\nThe simplest way to address this, or the lowest hanging fruit, is to price Bitcoin in sats rather than wholecoins on the most popular sites that display the Bitcoin price (e.g. coinmarketcap).\n\nThis will change the mindset of Bitcoin costing $30,000 (currently) to it costing just $0.0003, allowing people to compare it to shitcoins with ridiculously high numbers of coins in circulation.\n\nSolution: not sure, but maybe we could start by telling the world about https://www.change.org/chancellor-on-brink',
			Closed: true,
			ClaimedAt: 0,
			ClaimedBy: '',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
		},
		fdcfa956d84a4bd7c01dfb3412646008908e7eaa8a0130afe8a8d669fcc449f7: {
			UID: 'fdcfa956d84a4bd7c01dfb3412646008908e7eaa8a0130afe8a8d669fcc449f7',
			Parent: '434b6f61db38f0735ad310ec633a1cda6f96c55729759213f595305075a2b025',
			Title: "Problem: can't vote on merit requests",
			Body: 'People can log merit requests in response to problems they have solved, but the existing merit holders cannot approve or reject these requests',
			Closed: true,
			ClaimedAt: 800000,
			ClaimedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			CreatedBy: 'd91191e30e00444b942c0e82cad470b32af171764c2275bee0bd99377efd4075',
			Rocket: '041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2',
			Tags: {}
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
const ndk = get(ndkStore);
type Database = Record<string, NDKEvent>;
export const db: Database = await beginListeningForReplies();
export const status = await beginListeningForEvents();
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
		const sortedAllEvents = Array.from(a).sort((a, b) => b.created_at - a.created_at);
		let status = sortedAllEvents[0];
		statusResult = JSON.parse(status.content);
		console.log('success123', Object.keys(statusResult), status.id);
	} catch (e) {
		statusResult = statusfake;
		console.log('fail123');
	}
	// console.log(statusResult)

	return statusResult;
}

async function beginListeningForReplies() {
	let db: Database = {};
	let statusResult;
	try {
		const statusKind = 1 as Kind;
		const filter: NDKFilter = {
			kinds: [statusKind],
			['#e']: [initalRootIds.get('IgnitionEvent') as string]
		};
		const a = await ndk.fetchEvents(filter);
		for (const ev of a) {
			db[ev.id] = ev;
		}
		console.log('success');
	} catch (e) {
		console.log('fail', e);
	}
	return db;
}
