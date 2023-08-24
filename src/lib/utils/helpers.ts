import { status } from '$lib/stores/status';
import { NDKEvent, NDKNip07Signer } from '@nostr-dev-kit/ndk';
import { nip19 } from 'nostr-tools';
// import { fetchJson } from 'fetch-json';
import ndkStore from '$lib/stores/ndk';
import { get } from 'svelte/store';

export function unixTimeNow() {
	return Math.floor(new Date().getTime() / 1000);
}

export function dateTomorrow() {
	return new Date(Date.now() + 3600 * 1000 * 24);
}

export function truncatedBech(bech32: string, length?: number): string {
	return `${bech32.substring(0, length || 9)}...`;
}

export async function copyToClipboard(textToCopy: string) {
	try {
		await navigator.clipboard.writeText(textToCopy);
	} catch (err) {
		console.error('Failed to copy: ', err);
	}
}

export function pointerForList(list: App.List) {
	switch (list.kind) {
		case 10000:
		case 10001:
			return nip19.noteEncode(list.listId as string);
		case 30000:
		case 30001:
			return nip19.naddrEncode({
				identifier: list.name,
				kind: list.kind,
				pubkey: list.authorHexPubkey
			});
		default:
			break;
	}
}

export function getIdentityByAccount(account: string) {
	if (status.identity) {
		const identities = new Map(Object.entries(status.identity));
		return identities.get(account)?.Name;
	} else return null;
}

export async function PayForProduct(lud06, pubkey, amount, callback, productID) {
	return new Promise((resolve) => {
		//get the LUD06 from the payments object
		const ndk = get(ndkStore);
		let zapRequest = new NDKEvent(ndk);
		zapRequest.kind = 9734;
		zapRequest.content = "I'm paying for a Nostrocket product";
		zapRequest.tags = [
			['relays', 'wss://nostr.mutinywallet.com'],
			['amount', (amount * 1000).toString()],
			['lnurl', lud06],
			['p', pubkey],
			['e', productID]
		];
		const signer = new NDKNip07Signer();
		ndk.signer = signer;
		zapRequest.sign(ndk.signer).then(() => {
			fetchJson
				.get(`${callback}?amount=${amount * 1000}&nostr=${JSON.stringify(zapRequest.rawEvent())}`)
				.then((x) => {
					resolve(x);
				});
		});
	});
}
