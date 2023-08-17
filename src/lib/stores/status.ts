// import type { PageLoad } from './$types';
import type { Kind } from 'nostr-tools';
import { writable } from 'svelte/store';
import { ndk } from '$lib/stores/ndk';
import type { NDKFilter } from '@nostr-dev-kit/ndk';

// import {AccountInfo} from "$lib/classes/user";
interface Status {
	// Define the expected properties and their types here
	// For example:
	identity:  Map<string, string> | null;
	shares: number | null;
	problems: Map<string, string>|	null;
	merits: Map<string, string>	|	null;
	// ...
  }
const initalRootIds = new Map<string, string>([
	['IgnitionEvent', '1bf16cac62588cfd7e3c336b8548fa49a09627f03dbf06c7a4fee27bc01972c8'],
	['IdentityRoot', 'ae14dd661475351993f626f66df8052ed73166796e5cd893c09e4d333e170bb5'],
	['Merits', '9f7211ac022b500a7adeeacbe44bb84225d1bb1ee94169f8c5d8d1640a154cbc'],
	['MirvsRoot', '0f56599b6530f1ed1c11745b76a0d0fc29934e9a90accce1521f4dfac7a78532'],
	['ReplayRoot', '9ab11d92bdeffd28762374d5dfc5286e0f494d7cff5bc00b4fce177bf1115b94'],
	['ProblemRoot', '6439b9ff8c19b537ba5cdb7a7809f2031eb34c033229117ecfe055f608ff8842'],
	['ignition_account', '546b4d7f86fe2c1fcc7eb10bf96c2eaef1daa26c67dad348ff0e9c853ffe8882']
]);
export const status = await beginListeningForEvents();
// data: JSON.stringify(decodedAddr.data)
// console.log(status, '??????');

const statusStore = writable(status);

export default statusStore;

async function beginListeningForEvents() {
	const statusKind = 10311 as Kind;
	const filter: NDKFilter = {
		kinds: [statusKind],
		['#e']: [initalRootIds.get('IgnitionEvent') as string]
	};
	const a = await ndk.fetchEvents(filter);
	const status = a.values().next().value.content;

	return JSON.parse(status) as Status;
	// console.log(),"??????");
	// return event
}
