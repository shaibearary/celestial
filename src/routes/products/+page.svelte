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
	import ProductsForRocket from '$lib/components/ProductsForRocket.svelte';
	// import List from '$lib/classes/list';
	let rockets = $status.rockets as Map<string, RocketInfo>;

	console.log(rockets);
</script>
<div></div>>=
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
	<!-- {#key personData} -->
	{#each Object.values(rockets) as rocket}
		<ProductsForRocket rocketInfo={rocket} />
	{/each}
	<!-- {/key} -->
</div>

