<script lang="ts">
    import type { NDKUserProfile } from '@nostr-dev-kit/ndk';
    import ndk from '$lib/stores/ndk';

	import type { NestedProblem } from '$lib/classes/problem';
    import SvelteMarkdown from 'svelte-markdown';

    export let nestedProblem: NestedProblem;

   

    // if (nestedProblem.subProblems.length > 0) {
    //     // @ts-ignore
    //     replies = threadedEvent.replies.sort((a, b) => a.event.created_at - b.event.created_at);
    //     console.log(replies)
    // }


</script>

<div
    class="eventCard flex flex-col gap-6 items-start
    border border-purple-800 p-6 rounded-md shadow-lg
    break-words overflow-hidden w-full"
>
<SvelteMarkdown source={nestedProblem.problem.Title}/>
<SvelteMarkdown source={nestedProblem.problem.Body}/>
    <!-- <span class="text-lg font-normal">{threadedEvent.event.content}</span> -->

    {#each nestedProblem.subProblems as subProblem}
        <svelte:self nestedProblem={subProblem} />
    {/each}
</div>