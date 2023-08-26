import type { PageServerLoad } from './$types';
import ndkStore from '$lib/stores/ndk';
import { get } from 'svelte/store';
import statusStore from '$lib/stores/status';
import type { ProblemInfo } from '$lib/classes/problem';
// csr always cannot find right event so i put it here temporarily
export const csr = false
export const load: PageServerLoad = async ({ params }) => {
    const status = get(statusStore);
    console.log(params,"status")
    const allProblems =Array.from(Object.values(status.problems) ) as ProblemInfo[]
    // console.log(allProblems)
    const problemsInRocketsp = allProblems.filter((problem) => problem.Rocket === params.rocket)
    // console.log(problemsInRocketsp,"ffilterresult")


    return {
        problemsInRocket: problemsInRocketsp
    };
};