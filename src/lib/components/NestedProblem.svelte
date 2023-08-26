<script lang="ts">
	import type { NDKUserProfile } from '@nostr-dev-kit/ndk';
	import ndk from '$lib/stores/ndk';

	import type { NestedProblem } from '$lib/classes/problem';
	import SvelteMarkdown from 'svelte-markdown';

	export let nestedProblem: NestedProblem;
</script>

<div class="problembox">
	<div class="flex flex-row gap-4 items-center">
		<SvelteMarkdown source={nestedProblem.problem.Title} />
		<!-- <SvelteMarkdown source={nestedProblem.problem.Body}/> -->
	</div>

	<!-- <span class="text-lg font-normal">{threadedEvent.event.content}</span> -->

	{#each nestedProblem.subProblems as subProblem}
		<svelte:self nestedProblem={subProblem} />
	{/each}
</div>

<style>
	.problembox {
		display: table;
		border-color: #fa7a0bcc;
		border-width: thin;
		border-left-style: solid;
		border-top-style: solid;
		padding: 1%;
		max-width: 800px;
	}
</style>
