
<script lang="ts">
	import type {RocketInfo} from '$lib/classes/rocket';
	import MeritsForRocket from './MeritsForRocket.svelte';
    import status from '$lib/stores/status';
	import type{MeritInfo} from '$lib/classes/merit';
	import { getIdentityByAccount } from '$lib/utils/helpers';
	export let rocketInfo: RocketInfo;

	const creator = rocketInfo.CreatedBy;
	const meritsStatus = $status.merits as Map<string, MeritInfo>
	const products = rocketInfo.Products
	
</script>

{#each products as p}
<div class="new_mirv"><div class="rocketName"><h3 class="is-3">🚀{rocketInfo.RocketName}🚀</h3></div>
<div class="new_mirv"><div><h3 class="title is-3" id="flamebucketrelay">{p.name}</h3>
	<p>This is a new type of paid relay system, which will hopefully demonstrate a new type of  financially sustainable economic model for operating relays.</p>
	<p>See the Nostrocket problem tracker for more details on how this works.</p>
	<p>I will make an announcement when this relay set is operational and accepting membership.</p></div><button>Buy Now for 6000 sats</button><span> </span><button>Modify this product</button></div></div>

{/each}

