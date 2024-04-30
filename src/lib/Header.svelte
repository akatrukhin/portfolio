<script>
	import { onDestroy, onMount } from "svelte"
	import { Link } from "svelte-routing"
	import { fly } from "svelte/transition"
	import GlyphAnimation from "./Glyph.svelte"
	import Modal from "./Modal.svelte"
	import cv from "../assets/img/cv.png"

	export let scrollY
	let modals = {
		cvModal: false,
	}

	const SCROLL_GAP = 64
	const UPDATE_INTERVAL_MS = 5000

	$: scrolled = scrollY > SCROLL_GAP
	$: totalContentHeight = 0
	$: headerHeight = 0

	const positions = [
		"UX Engineer",
		"Design Technologist",
		"UI Developer",
		"Front-End Developer",
		"Full-Stack Developer",
		"Enthusiast",
	]

	let positionIndex = getRandomIndex(positions.length)

	const positionInterval = setInterval(() => {
		positionIndex = getRandomIndex(positions.length)
	}, UPDATE_INTERVAL_MS)

	function getRandomIndex(length) {
		return Math.floor(Math.random() * length)
	}

	onMount(() => {
		headerHeight = document.getElementById("header").offsetHeight
		totalContentHeight =
			Number(document.getElementById("content").offsetHeight) -
			Number(window.innerHeight) +
			Number(headerHeight)
	})

	onDestroy(() => clearInterval(positionInterval))
</script>

<header
	id="header"
	class="top-0 sticky z-40 w-full text-sm max-w-screen-2xl mx-auto px-12 backdrop-blur bg-zinc-100/95"
>
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
						class="transform lg:flex hidden transition-transform duration-200 origin-top-left {scrolled &&
							'scale-x-0'}"
					>
						ander
					</span>
				</div>
				<span
					class="font-bold transform transition-transform duration-200 {scrolled &&
						'-translate-x-[54px]'}"
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
			<GlyphAnimation
				as="button"
				className="focus:outline-none focus:ring focus:ring-[#2dd4bf] lg:mr-20 md:mr-10 mr-4 uppercase font-mono hidden md:grid items-center gap-2 tracking-wide text-[10px] border-b rounded-2xl bg-white px-6 py-2"
				text="Download Resume"
				styleRules={[{ from: 9, to: 15, className: "font-bold" }]}
				onClick={() => {
					modals.cvModal = true
				}}
			>
				Download Resume
			</GlyphAnimation>

			<GlyphAnimation
				as="button"
				className="md:hidden flex mr-4 uppercase font-mono font-bold items-center gap-2 tracking-wide text-[10px] border-b rounded-2xl bg-white px-6 py-2"
				text="Resume"
				styleRules={[{ from: 9, to: 15, className: "font-bold" }]}
				onClick={() => {
					modals.cvModal = true
				}}
			>
				Resume
			</GlyphAnimation>

			<address class="flex flex-col not-italic">
				<div class="flex justify-end">
					<span class="mr-1 font-bold">425</span><span class="">390 9768</span>
				</div>
				<!-- <a
          href="mailto:apply@you-need-a-dev-like.me"
          class="font-mono tracking-tight text-xxs"
        >
          <span class="font-bold">apply</span>
          <span class="-mr-[3px] -ml-[3px] opacity-60">@</span>
          <span class="opacity-60">you-need-a-dev-like.me</span>
        </a> -->

				<GlyphAnimation
					as="a"
					href="mailto:apply@you-need-a-dev-like.me?subject=✋%20Hey%20Alex!%20I%20need%20a%20dev!%20🚀"
					className="font-mono tracking-tight text-xxs"
					text="apply@you-need-a-dev-like.me"
					styleRules={[
						{ from: 1, to: 5, className: "font-bold" },
						{ from: 6, to: 6, className: "opacity-60" },
						{ from: 6, to: 30, className: "opacity-60" },
					]}
					>> apply@you-need-a-dev-like.me
				</GlyphAnimation>
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

<Modal id="cvModal" bind:modals>
	<h2 slot="header" class="text-lg font-black">CrewGuru</h2>
	<h4 slot="description" class="text-sm opacity-60 font-mono">
		Connects film and arts industries for jobs and services
	</h4>
</Modal>
