<script lang="ts">
	import type { PageData } from './$types';
	import Select from '$lib/components/Select.svelte';
	import status from '$lib/stores/status';
	// import PersonCard from '$lib/components/PersonCard.svelte';
	import type { NDKEvent, NDKZapInvoice } from '@nostr-dev-kit/ndk';
	import { zapInvoiceFromEvent } from '@nostr-dev-kit/ndk';
	import ndk from '$lib/stores/ndk';
	import type { RocketInfo } from '$lib/classes/rocket';
	import PersonCard from '$lib/components/PersonCard.svelte';
	import type { AccountInfo } from '$lib/classes/user';
	import { currentUser } from '$lib/stores/currentUser';
	import type { ProblemInfo } from '$lib/classes/problem';
	import { get } from 'svelte/store';
	// import List from '$lib/classes/list';

	export let data: PageData;
	let selected: string;
	let problemsSolvedByUser: ProblemInfo[] = [];
	let p = Object.entries($status.problems);

	p.forEach((m, k) => {
		if (m[1].ClaimedBy === '' && m[1].Closed === true) {
			// if (m.ClaimedBy === $currentUser && m.Closed === true) {
			problemsSolvedByUser.push(m[1]);
			console.log(m, 'sdsd');
		}
	});
	let rockets = $status.rockets as Map<string, RocketInfo>;
	console.log(Object.keys(rockets));

	const rocketIDs: string[] = Object.keys(rockets);
	let relatedRocketName = '';

	function handleProblemClick(event) {
		//automatically select the correct rocket
		let relatedRocketUID = $status.problems[event.target.id].Rocket;
		relatedRocketName = $status.rockets[relatedRocketUID].RocketName;
	}
</script>

<div class="new_mirv">
	<h3 class="is-3">Let's fkn go!</h3>
	<div><p>Request Merits</p></div>
	<div class="field">
		<label class="label">Problems you solved</label>
		{#each problemsSolvedByUser as problem, i}
			<div id={problem.UID} on:click={handleProblemClick}>{problem.Title}</div>
		{/each}

		<div id="choice1">{relatedRocketName}</div>

		<!-- {JSON.stringify(selected, null, 2)}
{(console.log(selected),'')} -->
	</div>
	<div class="field">
		<label class="label">Problem ID</label>
		<div class="control">
			<div>
				<input
					class="input"
					type="text"
					placeholder="ID of sovled Problem"
					id="problem input"
					maxlength="64"
				/>
			</div>
		</div>
	</div>
	<div class="field">
		<label class="label">Amount</label>
		<div class="control">
			<div>
				<input
					class="input"
					type="number"
					placeholder="Amount in Sats"
					id="amount input"
					maxlength="0"
				/>
				<p style="display: none;" />
			</div>
		</div>
	</div>
	<br /><button>Do it!</button>
</div>
