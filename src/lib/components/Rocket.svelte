<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import PersonCard from '$lib/classes/user';
	import type { AccountInfo } from '$lib/classes/user';
	import ndk from '$lib/stores/ndk';
	import type { NDKEvent, NDKUser, NDKUserProfile } from '@nostr-dev-kit/ndk';
	import MeritByAccount from './MeritByAccount.svelte';
	import type { RocketInfo } from '$lib/classes/rocket';
	import MeritsForRocket from './MeritsForRocket.svelte';
	// import { loadConfigFromFile } from 'vite';
	import status from '$lib/stores/status';
	import type { MeritInfo } from '$lib/classes/merit';
	import { getIdentityByAccount } from '$lib/utils/helpers';
	
	export let rocketInfo: RocketInfo;
	const rocketId = rocketInfo.RocketUID;
	const creator = rocketInfo.CreatedBy;
	const meritsStatus = $status.merits as Map<string, MeritInfo>;
	let merits: MeritInfo;
	const realMerits = new Map(Object.entries(meritsStatus));
	// $: merits = $status.merits?.get(rocketId) as MeritInfo
	$: merits = realMerits.get(rocketId) as MeritInfo;

</script>

<div class="new_mirv" id="041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2">
	<div class="rocketName"><h3 class="is-3">🚀{rocketInfo.RocketName}🚀</h3></div>
	<div class="datapoint"><span>Created By: </span><span>{getIdentityByAccount(creator)}</span></div>
	<!-- <MeritsForRocket rocketID = {rocketInfo}/> -->
	<div class="meritsdiv">
		<h3 class="is-3">Merits for {rocketInfo.RocketName}</h3>
		{#each Object.entries(merits) as [id, merit]}
			<div class="meritsbyaccount">
				<h4 class="is-4">{getIdentityByAccount(rocketInfo.CreatedBy)}</h4>
				<div><span>Last Lt Change: </span><span>{merit.LastLtChange}</span></div>
				<div><span>Lead Time: </span><span>{merit.LeadTime}</span></div>
				<div><span>Lead Time Locked Merits: </span><span>{merit.LeadTimeLockedMerits}</span></div>
				<div><span>Lead Time Unlocked Merits: </span><span>{merit.LeadTimeLockedMerits}</span></div>
				<div>
					<span>Votepower: </span><span>{merit.LeadTimeLockedMerits * merit.LeadTime}</span>
				</div>
				<div><span>OP Return Addresses: </span><span>{merit.OpReturnAddresses}</span></div>
			</div>
		{/each}
	</div>
</div>
