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
	// import List from '$lib/classes/list';
	// console.log($status.merits,"?rockets")
	let rockets = $status.rockets as Map<string, RocketInfo>;
	console.log(typeof rockets);
	//

	// const jsonObject: Record<string, RocketInfo> = JSON.parse(rockets);

	// const mapData: Map<string, RocketInfo> = new Map(Object.entries(jsonObject));

	// console.log(mapData);
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
	<!-- {#key personData} -->
	{#each Object.values(rockets) as rocket}
		<Rocket rocketInfo={rocket} />
	{/each}
	<!-- {/key} -->
</div>

<!-- 
{#await rocket}
<div class="proseContainer">
	<p class="animate-pulse">Loading...</p>
</div>
{:then r}
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
	
		{#each Array.from(r.values()) as rocket}
			<Rocket rocketInfo = {rocket} />
		{/each}
		
	</div>
{:catch error}
Broken! 🙈
{/await} -->
