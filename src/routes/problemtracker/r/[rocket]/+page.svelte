<script lang="ts">
	import status from '$lib/stores/status';
	// import PersonCard from '$lib/components/PersonCard.svelte';
	import type { NDKEvent, NDKZapInvoice } from '@nostr-dev-kit/ndk';
	import { zapInvoiceFromEvent } from '@nostr-dev-kit/ndk';
	import ndk from '$lib/stores/ndk';
	import PersonCard from '$lib/components/PersonCard.svelte';
	import type { AccountInfo } from '$lib/classes/user';
	import Rocket from '$lib/components/Rocket.svelte';
	import type { RocketInfo } from '$lib/classes/rocket';
	import type { ProblemInfo } from '$lib/classes/problem';
	import { getNestedProblems } from '$lib/utils/helpers';
	import NestedProblem from '$lib/components/NestedProblem.svelte';
	import { P } from 'flowbite-svelte';
	export let data 
	
	
	let problems = $status.problems as Map<string, ProblemInfo>;
	let allproblems = Array.from(Object.values(problems));
	// let allNestedProblems = getNestedProblems(allproblems, []);

	const a = data.problemsInRocket
	const b = JSON.parse(JSON.stringify(a))
	console.log(b.length)
	let anested = getNestedProblems(a, [])
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
	<!-- {#key personData} -->
	{#each anested as problemTree}
	<NestedProblem nestedProblem={problemTree}  selectedProblem={b}/>
	{/each}
	<!-- {/key} -->
</div>
