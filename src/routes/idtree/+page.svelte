<script lang="ts">
	import type { PageData } from './$types';
	import status from '$lib/stores/status';
	// import PersonCard from '$lib/components/PersonCard.svelte';
	import type { NDKEvent, NDKZapInvoice } from '@nostr-dev-kit/ndk';
	import { zapInvoiceFromEvent } from '@nostr-dev-kit/ndk';
	import ndk from '$lib/stores/ndk';
	import PersonCard from '$lib/components/PersonCard.svelte';
	// import List from '$lib/classes/list';

	export let data: PageData;
	// $ndk.fetchEvents({kinds:[1]});

	// Interface created from the any type
	interface AccountInfo {
		Account: string;
		Name: string;
		UniqueSovereignBy: string;
		CharacterVouchedForBy: string | null;
		MaintainerBy: string;
		Pubkeys: any; // You can replace `any` with a specific type if you know the structure
		OpReturnAddr: any; // You can replace `any` with a specific type if you know the structure
		Order: number;
		PermanymEventID: string;
	}

	// Converting the any type to the interface
	let personData:Record<string, AccountInfo> = data.a.identity;
	console.log(personData, '》《');
	// Subscribe to fetch all zap invoices for lists.
	// At the moment this doesn't happen often enough to return much data.
	// I need to figure out a way to get the historical data.
</script>

<svelte:head>
	<title>Listr</title>
	<meta
		name="description"
		content="A Nostr based app to help you view and manage your own
        Nostr lists and find great content in other people's lists."
	/>
</svelte:head>


	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<!-- {#key personData} -->
		{#each Object.entries(personData) as [id, userParam]}
			<PersonCard {userParam} />
		{/each}
		<!-- {/key} -->
	</div>

