<script lang="ts">
	import type { NDKUserProfile } from '@nostr-dev-kit/ndk';
	import ndk from '$lib/stores/ndk';

	import type { NestedProblem, ProblemInfo } from '$lib/classes/problem';
	import SvelteMarkdown from 'svelte-markdown';
	// import { LOGNAME } from '$env/static/private';

	export let nestedProblem: NestedProblem;
    export let selectedProblem: ProblemInfo[]
    
    let selectedProblemUID = selectedProblem.map((problem) => {
        return problem.UID
    })
    console.log(selectedProblem.length,'difj')

</script>
<style>
    .problembox {
    display: var(--display, block);
    border-color: #fa7a0bcc;
    border-width: thin;
    border-left-style: solid;
    border-top-style: solid;
    padding: 1%;
    max-width: 800px;
}
    </style>
{#if selectedProblemUID.includes(nestedProblem.problem.UID)}
{console.log('xxx')}
<div class="problembox">
	<div class="flex flex-row gap-4 items-center">
 
		<SvelteMarkdown source={nestedProblem.problem.Title} />
 
		<!-- <SvelteMarkdown source={nestedProblem.problem.Body}/> -->
	</div>
	{#each nestedProblem.subProblems as subProblem}
		<svelte:self nestedProblem={subProblem} selectedProblem={selectedProblem}/>
	{/each}
</div>
{:else}
<div >
    {console.log(nestedProblem.problem.Title)}
	<div class="flex flex-row gap-4 items-center">
 
		<!-- <SvelteMarkdown source={nestedProblem.problem.Title} /> -->
 
		<!-- <SvelteMarkdown source={nestedProblem.problem.Body}/> -->
	</div>
<div>

	{#each nestedProblem.subProblems as subProblem}
		<svelte:self nestedProblem={subProblem} selectedProblem={selectedProblem}/>
	{/each}
</div>
</div>
{/if}
