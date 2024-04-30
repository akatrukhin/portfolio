<script>
	export let id
	export let modals

	let dialog

	$: if (dialog && modals[id]) {
		dialog.showModal()
	}
</script>

<dialog
	bind:this={dialog}
	on:close={() => (modals[id] = false)}
	on:click|self={() => dialog.close()}
	class="w-full max-w-5xl max-w rounded-2xl max-w px-6 py-4 shadow-3xl-dark bg-stone-900 text-white text-shadow-none"
>
	<div on:click|stopPropagation>
		<div class="flex items-center justify-between mb-6">
			<div class="flex items-center">
				<slot name="header" />
				<span class="mx-4 opacity-20">|</span>
				<slot name="description" />
			</div>

			<!-- svelte-ignore a11y-autofocus -->
			<button
				class="focus:outline-none focus:ring rounded ring-emerald-500"
				on:click={() => dialog.close()}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 18 18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
		<div class="mb-6">
			<slot />
		</div>
		<slot name="links" />
		<slot name="tags" />
	</div>
</dialog>

<style>
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(2px);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
