<script lang="ts">
	// import type { PageData } from './$types';
	// // import PersonCard from '$lib/components/PersonCard.svelte';
	// import type { NDKEvent, NDKZapInvoice } from '@nostr-dev-kit/ndk';
	// import { zapInvoiceFromEvent } from '@nostr-dev-kit/ndk';
	// import ndk from '$lib/stores/ndk';
	// // import List from '$lib/classes/list';
	import { status } from '$lib/stores/status';

    import { currentUser } from '$lib/stores/currentUser';
    import ndk from '$lib/stores/ndk';
    import { goto } from '$app/navigation';
    // import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';
    import { NDKNip07Signer } from '@nostr-dev-kit/ndk';
    import { Avatar, Modal } from 'flowbite-svelte';
    import type { Observable } from 'dexie';
    import { dateTomorrow } from '$lib/utils/helpers';
    import User from '$lib/classes/user';
	import { get } from 'svelte/store';
    // import { RelayList } from '@nostr-dev-kit/ndk-svelte-components';
	let user: string;
    async function login() {
        try {
            const signer = new NDKNip07Signer();
            $ndk.signer = signer;
            ndk.set($ndk);
            signer.user().then(async (ndkUser) => {
                if (!!ndkUser.npub) {
                    ndkUser.ndk = $ndk;
                    user =ndkUser.hexpubkey()
                    currentUser.set(user);
                    // window.sessionStorage.setItem('currentUser', $user);
                    // document.cookie = `userNpub=${ndkUser.npub};
                    // expires=${dateTomorrow()}; SameSite=Lax; Secure`;
                }
            });
        } catch (error: any) {
            console.error(error.message);
            // signerModal = true;
        }
    }

	// export let data: PageData;
	// console.log(data,"》《");
	// Subscribe to fetch all zap invoices for lists.
	// At the moment this doesn't happen often enough to return much data.
	// I need to figure out a way to get the historical data.
</script>

<svelte:head>
	<title>Celestial</title>
	<meta name="description" content="A Nostrocket client" />
</svelte:head>
<a href="/rkts">Rockets</a>
<a href="/idtree">Identity Tree</a>
<a href="/problemtracker">Problem Tracker</a>
<a href="/merit">Merit Requests</a>
<a href="/products">Products</a>


{#if $currentUser}
	{get(currentUser)}

{:else}
    <button on:click={login} class="primaryButton whitespace-nowrap">Log in</button>
{/if}