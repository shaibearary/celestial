import { writable } from 'svelte/store';
import NDK from '@nostr-dev-kit/ndk';

export const ndk = new NDK({
    explicitRelayUrls: [
        // 'ws://localhost:8080'
        'wss://nostr.688.org',
        // 'wss://purplepag.es',
        // 'wss://relay.nostr.band',
        // 'wss://nos.lol',
        // 'wss://relay.snort.social',
        // 'wss://relay.damus.io'
    ]
});

ndk.connect().then(() => console.log('NDK Connected'));

//Create a singleton instance that is the default export
// const ndkStore = writable(ndk);

// export default ndkStore;
