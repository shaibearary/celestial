<script lang="ts">
	import type { PageData } from './$types';
	import status from '$lib/stores/status';
	// import PersonCard from '$lib/components/PersonCard.svelte';
	import type { NDKEvent, NDKZapInvoice } from '@nostr-dev-kit/ndk';
	import { zapInvoiceFromEvent } from '@nostr-dev-kit/ndk';
	import ndk from '$lib/stores/ndk';
	import PersonCard from '$lib/components/PersonCard.svelte';
	import type { AccountInfo } from '$lib/classes/user';
	// import List from '$lib/classes/list';

	export let data: PageData;
	// $ndk.fetchEvents({kinds:[1]});

	// Interface created from the any type
	// Converting the any type to the interface
	let personData: Map<string, AccountInfo> = $status.identity as Map<string, AccountInfo>;

	const sortedAccounts: AccountInfo[] = Object.entries(personData)
		.sort(([, a], [, b]) => a.Order - b.Order)
		.map(([, account]) => account);
</script>



<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
	<!-- {#key personData} -->
	{#each sortedAccounts as rocketAccount}
		<PersonCard {rocketAccount} />
	{/each}
	<!-- {/key} -->
</div>
