<script>
	export let when = false
	export let component
	export let scrollY
	let loading
	$: if (when) {
		load()
	}
	function load() {
		loading = component()
	}
</script>

{#if when}
	{#await loading then { default: Component }}
		<Component {scrollY} />
	{/await}
{/if}
