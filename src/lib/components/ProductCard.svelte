<script lang="ts">
	import type { Product, RocketInfo } from '$lib/classes/rocket';
	import MeritsForRocket from './MeritsForRocket.svelte';
	import { status, db } from '$lib/stores/status';
	import { PayForProduct } from '$lib/utils/helpers';
	import type { MeritInfo } from '$lib/classes/merit';
	import { getIdentityByAccount } from '$lib/utils/helpers';
	// import { P } from 'flowbite-svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import { Tooltip } from 'flowbite-svelte';
	export let rocketInfo: RocketInfo;
	export let p: Product;

	const productID = p.ProductInformation;
	const productContentEvent = db[productID];
	const content = productContentEvent.content;

	function buyProduct() {
		let amount = p.Amount;
		PayForProduct(
			p.NextPayment.LUD06,
			p.NextPayment.Pubkey,
			amount,
			p.NextPayment.Callback,
			p.UID
		).then((x) => {
			console.log(x);
			if (typeof window.webln !== 'undefined') {
				console.log('WebLN is available!');
				window.webln.enable().then(() => {
					console.log('enabled');
					webln
						.sendPayment(x['pr'])
						.then((response) => {
							console.log(response);
						})
						.catch((reason) => {
							console.log(reason);
						});
				});
			}
		});
	}
	function modifyProduct() {
		if (!rocketInfo.Maintainers.includes(window.nostr.getPublicKey())) {
			alert('you must be a maintainer of this rocket to modify the product');
			return;
		}
	}
</script>

<div class="new_mirv">
	<div class="rocketName"><h3 class="is-3">🚀{rocketInfo.RocketName}🚀</h3></div>
</div>
<SvelteMarkdown source={content} />
<button
	on:click={() => buyProduct()}
	class="hover:text-zinc-700 hover:dark:text-zinc-400 border-0 w-4 h-4 md:h-6 md:w-6"
	>{'Buy Now for ' + p.Amount + ' sats'}
</button>
<button
	on:click={() => modifyProduct()}
	class="hover:text-zinc-700 hover:dark:text-zinc-400 border-0 w-4 h-4 md:h-6 md:w-6"
	>Modify this product
</button>
