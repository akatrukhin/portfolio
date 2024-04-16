<script>
	import { Link } from 'svelte-routing'
	import { fly } from 'svelte/transition'
	import { onDestroy, onMount } from 'svelte'
	import cv from '../assets/img/cv.png'

	export let scrollY

	const SCROLL_GAP = 64
	const UPDATE_INTERVAL_MS = 5000

	$: scrolled = scrollY > SCROLL_GAP
	$: totalContentHeight = 0
	$: headerHeight = 0

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

	onMount(() => {
		headerHeight = document.getElementById('header').offsetHeight
		totalContentHeight =
			Number(document.getElementById('content').offsetHeight) -
			Number(window.innerHeight) +
			Number(headerHeight)
	})

	onDestroy(() => clearInterval(positionInterval))
</script>

<header id="header" class="top-0 sticky z-40 w-full text-sm px-12 backdrop-blur bg-zinc-100/95">
	<div class="flex items-center justify-between px-0 mb-4 pt-8 mx-auto z-10">
		<Link
			to="/"
			class="text-2xl transform transition-transform duration-200 {scrolled &&
				'-translate-x-2 -translate-y-4 scale-90'}"
		>
			<div class="flex">
				<div class="flex">
					<span>Alex</span>
					<span
						class="transform transition-transform duration-200 origin-top-left {scrolled &&
							'scale-x-0'}"
					>
						ander
					</span>
				</div>
				<span
					class="font-bold transform transition-transform duration-200 {scrolled &&
						'-translate-x-[60px]'}"
				>
					Katrukhin
				</span>
			</div>

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
			class="flex items-center z-10 transform transition-transform duration-200 {scrolled &&
				'translate-x-2 -translate-y-2 scale-95'}"
		>
			<button
				class="mr-20 uppercase font-mono flex items-center gap-2 tracking-wide text-[10px] border-b rounded-2xl bg-white px-6 py-2"
			>
				Download
				<b>Resume</b>
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
	<div class="relative -mb-px flex gap-4">
		<!-- <div
			class="absolute border-b-2 border-zinc-100 w-4 h-px font-mono transform transition-all ease-in-out duration-100 {scrolled
				? 'opacity-100'
				: 'opacity-0'}"
			style="translate: {(scrollY / totalContentHeight).toFixed(2) *
				100 *
				(totalContentHeight / 26)}%"
		></div> -->
		<div
			class="-mt-px bg-black h-[3px] transotion-all duration-200 ease-in-out w-36 {scrolled
				? 'opacity-100'
				: 'opacity-0'}"
		></div>
		<div
			class="flex-1 bg-black h-px mix-blend-difference transotion-all duration-200 ease-in-out border-black/40 w-36 {scrolled
				? 'opacity-100'
				: 'opacity-0'}"
		></div>
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
