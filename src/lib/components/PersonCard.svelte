<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import PersonCard from '$lib/classes/user';
	import type { AccountInfo } from '$lib/classes/user';
	import ndk from '$lib/stores/ndk';
	import type { NDKEvent, NDKUser, NDKUserProfile } from '@nostr-dev-kit/ndk';
	// import { loadConfigFromFile } from 'vite';

	export let rocketAccount: AccountInfo;

	const hexPubKey = rocketAccount.Account;

	const personCard = PersonCard.get(hexPubKey, rocketAccount);

	// const realCard = personCard
</script>

{#if true}
	{#await personCard then realCard}
		<div class="person" id="lnproxy">
			<a href="https://snort.social/p/"
				>{realCard.name} {'[' + realCard.npub.substring(0, 10) + ']'}</a
			>
			<div
				id="e25a8b2051022a08f97d267d4b99ddfc500a0bfe149a5f671e46f72e9ea36ec9_about"
				class="about"
			>
				<div><p>{realCard.about}</p></div>
			</div>
			<div class="added_by"><span>Added By: </span><span>{realCard.added_by}</span></div>
			<div class="order"><span>Account Number: </span><span>{realCard.order}</span></div>
			<button id="e25a8b2051022a08f97d267d4b99ddfc500a0bfe149a5f671e46f72e9ea36ec9_button"
				>Add to Maintainer Tree</button
			>
		</div>
	{:catch error}
		<div class="border border-red-600 p-2 rounded-md items-center no-underline">
			<div class="text-center">Error: {error.message}</div>
		</div>
	{/await}
{:else}
	<div
		class="border border-zinc-800/20 dark:border-zinc-100/20
    p-2 rounded-md items-center no-underline
    animate-pulse"
	>
		<div class="text-center">Loading...</div>
	</div>
{/if}
