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
	let problems = $status.problems as Map<string, ProblemInfo>;
	let allproblems = Array.from(Object.values(problems));
	let allNestedProblems = getNestedProblems(allproblems,null,0);
	// console.log(allproblems)

</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
	<!-- {#key personData} -->
	{#each allNestedProblems as problemTree}
		{console.log(problemTree.problem.Title)}
		<NestedProblem nestedProblem={problemTree} />
	{/each}
	<!-- {/key} -->
</div>

