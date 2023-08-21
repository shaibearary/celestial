
<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import PersonCard from '$lib/classes/user';
	import type { AccountInfo } from '$lib/classes/user';
	import ndk from '$lib/stores/ndk';
	import type { NDKEvent, NDKUser, NDKUserProfile } from '@nostr-dev-kit/ndk';
	import MeritByAccount from './MeritByAccount.svelte';
	// import { loadConfigFromFile } from 'vite';

interface RocketInfo{
	RocketUID: string;
RocketName: string;
CreatedBy: string;
ProblemID: string;
MissionID: string;
Products: any[];
Maintainers: any;
	
}
	export let rocketInfo: RocketInfo;

	// const hexPubKey = rocketAccount.Account;

	// const personCard = PersonCard.get(hexPubKey, rocketAccount);

	// const realCard = personCard
</script>
<div class="new_mirv" id="041b8698b3b7206feca17c89f3f861c31d82dc2fdf3f1d0f25c3bddfa68c64e2">
	<div class="rocketName"><h3 class="is-3">🚀{rocketInfo.RocketName}🚀</h3></div>
	<div class="datapoint"><span>Created By: </span><span>{rocketInfo.CreatedBy}</span></div>
	<MeritByAccount rocketID = {rocketInfo.RocketUID}/>
</div>
