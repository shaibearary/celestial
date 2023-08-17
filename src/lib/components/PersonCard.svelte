<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import User, { type AccountInfo } from '$lib/classes/user';
    import ndk from '$lib/stores/ndk';
	import type { NDKEvent, NDKUser, NDKUserProfile } from '@nostr-dev-kit/ndk';
    
	export let userParam: AccountInfo;

    const user = function(hexPubKey:string):    NDKUser {
        return $ndk.getUser({
            hexpubkey:hexPubKey
        });
    }
    const hexPubKey = userParam.Account;
    
    export const pablo = $ndk.getUser({
        hexpubkey:hexPubKey
    });
    let profilePromise = pablo.fetchProfile()




	// console.log(p, 'sji');
</script>

{#if true}

{#await profilePromise}
Loading planet...
{:then p }
<div class="person" id="lnproxy">
    <a href="https://snort.social/p/"
        >{pablo.profile?.displayName} [{pablo.profile?.key?.substring(0, 10) + "]"}]</a
    >
    <div id="e25a8b2051022a08f97d267d4b99ddfc500a0bfe149a5f671e46f72e9ea36ec9_about" class="about">
        <div><p>{pablo.profile?.about}</p></div>
    </div>
    <div class="added_by"><span>Added By: </span><span>gsoverei</span></div>
    <div class="order"><span>Account Number: </span><span>{userParam.Order}</span></div>
    <button id="e25a8b2051022a08f97d267d4b99ddfc500a0bfe149a5f671e46f72e9ea36ec9_button"
        >Add to Maintainer Tree</button
    >
</div>
{:catch someError}
System error: {someError.message}.
{/await}
	
	<a
		href={`/${userParam.Account}`}
		class="border border-zinc-800/20 dark:border-zinc-100/20 p-2 rounded-md
flex flex-row gap-4 items-center no-underline"
	>
		<div class="hidden md:block">
			{userParam.Name}
			<!-- <Avatar src={userParam.image} size="lg" class="!m-0 object-cover" /> -->
		</div>
		<div class="block md:hidden">
			<!-- <Avatar src={userParam.image} size="md" class="!m-0 object-cover" /> -->
		</div>
		<!-- <span class="text-lg md:text-xl font-medium no-underline">{userParam.displayableName()}</span
        > -->
	</a>
{:else}
	<div
		class="border border-zinc-800/20 dark:border-zinc-100/20
    p-2 rounded-md items-center no-underline
    animate-pulse"
	>
		<div class="text-center">Loading...</div>
	</div>
{/if}
