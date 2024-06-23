<script lang="ts">
	import { Router, Route } from "svelte-routing"
	import { fade } from "svelte/transition"
	import Loading from "./lib/Loading.svelte"
	import Header from "./lib/Header.svelte"
	import LazyComponent from "./lib/LazyComponent.svelte"
	import { routes } from "./routes/utils"

	let main
	let scrollY = 0

	const LOADING_MOUNT_DELAY = 300
	const LOADING_ANIMATION_DURATION = 1500
	const LOADING_ANIMATION_SEQUENCE_DELAY = 300

	let didLoadingComponentMount = false
	let isAnimationLoadingPlayed = false

	setTimeout(() => {
		didLoadingComponentMount = true
	}, LOADING_MOUNT_DELAY)

	setTimeout(() => {
		isAnimationLoadingPlayed = true
	}, LOADING_MOUNT_DELAY + LOADING_ANIMATION_DURATION)
</script>

<div class="h-screen w-screen flex flex-col text-base">
	{#if didLoadingComponentMount}
		<div
			class="flex flex-col h-screen w-screen items-center overflow-x-hidden overflow-scroll bg-zinc-100"
			class:opacity-0={!didLoadingComponentMount}
			bind:this={main}
			on:scroll={() => {
				scrollY = main.scrollTop
			}}
			transition:fade
		>
			<Router>
				<Header {scrollY} />
				<main id="content" class="max-w-screen-xl md:mx-10 lg:mx-20 w-full">
					{#each routes as page}
						<Route path={page.route}>
							<LazyComponent
								{scrollY}
								when={page.route === window.location.pathname}
								component={() => import(`./routes/${page.name}.svelte`)}
							/>
						</Route>
					{/each}
				</main>
				<div class="sm:hidden z-50 fixed bottom-20 right-20">
					<button class="bg-black absolute right-2 rounded-[24px] p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-8 h-8 fill-white"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
							/>
						</svg>
					</button>
					<button class="bg-black absolute rounded-[24px] bottom-2 p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-8 h-8 fill-white"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
							/>
						</svg>
					</button>
				</div>
			</Router>
		</div>
	{/if}
	{#if !isAnimationLoadingPlayed}
		<Loading
			startDelay={LOADING_MOUNT_DELAY}
			duration={LOADING_ANIMATION_DURATION}
			sequenceDelay={LOADING_ANIMATION_SEQUENCE_DELAY}
		/>
	{/if}
</div>

<svelte:window bind:scrollY />
