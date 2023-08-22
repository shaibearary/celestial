<script lang="ts">
	import type { PageData } from './$types';
	import Select from "$lib/components/Select.svelte";
	import status from '$lib/stores/status';
	// import PersonCard from '$lib/components/PersonCard.svelte';
	import type { NDKEvent, NDKZapInvoice } from '@nostr-dev-kit/ndk';
	import { zapInvoiceFromEvent } from '@nostr-dev-kit/ndk';
	import ndk from '$lib/stores/ndk';
	import type{RocketInfo} from '$lib/classes/rocket';
	import PersonCard from '$lib/components/PersonCard.svelte';
	import type { AccountInfo } from '$lib/classes/user';
	// import List from '$lib/classes/list';

	export let data: PageData;
	let selected: string;
	let problems
	Object.values($status.problems).forEach(m => {
        if (m.ClaimedBy === window.spaceman.pubkey && m.Closed === true) {
            found++
            problems.appendChild(makeLinkWithOnclick(m.Title, ()=>{
                document.getElementById("problem input").value = m.UID
            }))
            problems.appendChild(document.createElement("br"))
        }
    })
	let rockets = $status.rockets as Map<string, RocketInfo>;
	console.log(Object.keys(rockets));

	const rocketIDs: string[] = Object.keys(rockets)

</script>



<div class="new_mirv">
	<h3 class="is-3">Let's fkn go!</h3>
	<div><p>Request Merits</p></div>
	<div class="field">
		<label class="label">Rocket ID</label>
		<Select options={rocketIDs}
		display_func={o => rockets[o].RocketName}
		bind:value={selected}/>
<!-- {JSON.stringify(selected, null, 2)}
{(console.log(selected),'')} -->
	</div>
	<div class="field">
		<label class="label">Problem ID</label>
		<div class="control">
			<div>
				<input
					class="input"
					type="text"
					placeholder="ID of sovled Problem"
					id="problem input"
					maxlength="64"
				/>
			</div>
		</div>
	</div>
	<div class="field">
		<label class="label">Amount</label>
		<div class="control">
			<div>
				<input
					class="input"
					type="number"
					placeholder="Amount in Sats"
					id="amount input"
					maxlength="0"
				/>
				<p style="display: none;" />
			</div>
		</div>
	</div>
	<br /><button>Do it!</button>
</div>
