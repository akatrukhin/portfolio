<script>
	import { Link } from 'svelte-routing'
	import { fly } from 'svelte/transition'
	import { onDestroy } from 'svelte'

	export let scrollY

	const SCROLL_GAP = 64
	const UPDATE_INTERVAL_MS = 5000

	$: transformClass = scrollY > SCROLL_GAP ? 'apply-transform' : ''

	const positions = [
		'UX Engineer',
		'Design Technologist',
		'UI Developer',
		'Front-end Developer',
		'Fullstack Developer',
		'Enthusiast'
	]
	let positionIndex = getRandomIndex(positions.length)

	const positionInterval = setInterval(() => {
		positionIndex = getRandomIndex(positions.length)
	}, UPDATE_INTERVAL_MS)

	function getRandomIndex(length) {
		return Math.floor(Math.random() * length)
	}

	onDestroy(() => clearInterval(positionInterval))
</script>

<header class="backdrop-blur-lg top-0 sticky z-40 w-full text-sm">
	<div class="flex items-center justify-between max-w-[1800px] px-[7vw] pt-[7vh] mx-auto">
		<Link to="/" class="text-lg {transformClass}">
			<span>Alexander</span><span class="font-bold">Katrukhin</span>
			<address class="text-[10px] leading-4 uppercase opacity-50 not-italic font-mono">
				{#key positions[positionIndex]}
					<span in:fly={{ y: -20 }} class="inline-block">{positions[positionIndex]}</span>
				{/key}
			</address>
		</Link>

		<!-- 
		Navigation
		<nav class="grid gap-[7vw] grid-cols-3 grid-rows-1 {transformClass}">
			{#each nav as link}
				<Link to={link.path}>{link.name}</Link>
			{/each}
		</nav> 
		-->

		<address class="flex flex-col not-italic {transformClass}">
			<div class="flex justify-end">
				<span class="mr-1 font-bold">425</span><span class="">390 9768</span>
			</div>
			<a href="mailto:apply@you-need-a-dev-like.me" class="font-mono tracking-tight text-xxs">
				<span class="font-bold">apply</span>
				<span class="-mr-[3px] -ml-[3px] opacity-60">@</span>
				<span class="opacity-60">you-need-a-dev-like.me</span>
			</a>
		</address>
	</div>
</header>

<style>
	.apply-transform {
		transform: translate3d(-3vw, -3vh, 0);
	}
</style>
