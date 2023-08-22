<script lang="ts">
	import type { Product, RocketInfo } from '$lib/classes/rocket';
	import MeritsForRocket from './MeritsForRocket.svelte';
	import { status, db } from '$lib/stores/status';
	import type { MeritInfo } from '$lib/classes/merit';
	import { getIdentityByAccount } from '$lib/utils/helpers';
	// import { P } from 'flowbite-svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { Tooltip } from 'flowbite-svelte';
	import ProductCard from './ProductCard.svelte';
	export let rocketInfo: RocketInfo;

	const products = rocketInfo.Products;
	// function getProductDescription(productID: string){
	// 	const product = db[productID]
	// 	return product.content
	// }
</script>

{#if products}
	{#each products as p, index}
		<ProductCard {rocketInfo} {p} />
	{/each}
{/if}
