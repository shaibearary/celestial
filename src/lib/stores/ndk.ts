import { writable } from 'svelte/store';
import NDK from '@nostr-dev-kit/ndk';

export const ndk = new NDK({
	explicitRelayUrls: ['wss://nostr.688.org', 'wss://nos.lol']
});

ndk.connect().then(() => console.log('NDK Connected'));

//Create a singleton instance that is the default export
const ndkStore = writable(ndk);

export default ndkStore;
