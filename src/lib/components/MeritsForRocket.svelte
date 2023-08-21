<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import PersonCard from '$lib/classes/user';
	import type { AccountInfo } from '$lib/classes/user';
	import ndk from '$lib/stores/ndk';
	import type { NDKEvent, NDKUser, NDKUserProfile } from '@nostr-dev-kit/ndk';
	import MeritByAccount from './MeritByAccount.svelte';
	// import { loadConfigFromFile } from 'vite';
	import status from '$lib/stores/status';

	export let rocketID: string;
	if ($status.merits) {
		const merits = $status.merits.get(rocketID);
	}

	// const hexPubKey = rocketAccount.Account;

	// const personCard = PersonCard.get(hexPubKey, rocketAccount);

	// const realCard = personCard
</script>

<div class="meritsdiv">
	<h3 class="is-3">Merits for nostrocket</h3>
	<div class="meritsbyaccount">
		<h4 class="is-4">wuwei</h4>
		<div><span>Last Lt Change: </span><span>0</span></div>
		<div><span>Lead Time: </span><span>1</span></div>
		<div><span>Lead Time Locked Merits: </span><span>1</span></div>
		<div><span>Lead Time Unlocked Merits: </span><span>0</span></div>
		<div><span>Votepower: </span><span>1</span></div>
		<div><span>OP Return Addresses: </span><span>undefined</span></div>
	</div>
	<div class="meritsbyaccount">
		<h4 class="is-4">wuwei</h4>
		<div><span>Last Lt Change: </span><span>800000</span></div>
		<div><span>Lead Time: </span><span>0</span></div>
		<div><span>Lead Time Locked Merits: </span><span>0</span></div>
		<div><span>Lead Time Unlocked Merits: </span><span>10000</span></div>
		<div><span>Votepower: </span><span>0</span></div>
		<div><span>OP Return Addresses: </span><span>undefined</span></div>
	</div>
</div>
