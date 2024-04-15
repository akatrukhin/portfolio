<script>
	import { Link } from 'svelte-routing'
	import { fly } from 'svelte/transition'
	import { onDestroy } from 'svelte'
	import cv from '../assets/img/cv.png'

	export let scrollY

	const SCROLL_GAP = 64
	const UPDATE_INTERVAL_MS = 5000
	const EMPTY_STRING = ''

	$: collapsedLeftSideStyle =
		scrollY > SCROLL_GAP ? '-translate-x-8 -translate-y-4 scale-95' : EMPTY_STRING
	$: collapsedMiddleSideStyle = scrollY > SCROLL_GAP ? '-translate-y-4 scale-95' : EMPTY_STRING
	$: collapsedRightSideStyle =
		scrollY > SCROLL_GAP ? 'translate-x-8 -translate-y-4 scale-95' : EMPTY_STRING

	const positions = [
		'UX Engineer',
		'Design Technologist',
		'UI Developer',
		'Front-End Developer',
		'Full-Stack Developer',
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

<header class="top-0 sticky z-40 w-full text-sm backdrop-blur bg-zinc-100/80">
	<div class="flex items-center justify-between max-w-screen-xl px-0 mb-4 pt-8 mx-auto z-10">
		<Link
			to="/"
			class="text-2xl transform transition-transform duration-200 {collapsedLeftSideStyle}"
		>
			<span>Alexander</span><span class="font-bold">Katrukhin</span>
			<address class="text-[10px] leading-4 opacity-50 not-italic font-mono">
				{#key positions[positionIndex]}
					<span
						in:fly={{ y: -20, opacity: 0 }}
						out:fly={{ y: 20, opacity: 0 }}
						class="inline-block absolute">{positions[positionIndex]}</span
					>
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

		<div
			class="flex items-center z-10 transform transition-transform duration-200 {collapsedRightSideStyle}"
		>
			<button
				class="mr-20 uppercase font-mono flex items-center gap-2 tracking-wide text-[10px] text-white rounded-lg bg-black px-6 py-2"
			>
				Resume
			</button>
			<address class="flex flex-col not-italic">
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
	</div>
</header>

{#if false}
	<div
		class="z-50 fixed w-screen h-screen top-0 left-0 backdrop-blur-lg flex items-center justify-center bg-slate-600/30"
	>
		<div class="flex">
			<div class="flex bg-black/90 w-56 shadow-3xl rounded-lg px-4 py-2">
				<img src={cv} alt="" />
			</div>
		</div>
	</div>
{/if}
