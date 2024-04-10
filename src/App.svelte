<script lang="ts">
	import { Router, Route } from 'svelte-routing'
	import { fade } from 'svelte/transition'
	import Loading from './lib/Loading.svelte'
	import Header from './lib/Header.svelte'
	import LazyComponent from './lib/LazyComponent.svelte'
	import { routes } from './routes/utils'

	let main
	let scrollY = 0

	const LOADING_MOUNT_DELAY = 1000
	const LOADING_ANIMATION_DURATION = 2000
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

<div class="h-screen w-screen flex flex-col text-base selection:bg-teal-400">
	{#if didLoadingComponentMount}
		<div
			class="flex flex-col h-screen w-screen overflow-x-hidden overflow-scroll bg-zinc-100"
			class:opacity-0={!didLoadingComponentMount}
			bind:this={main}
			on:scroll={() => {
				scrollY = main.scrollTop
			}}
			transition:fade
		>
			<Router>
				<Header {scrollY} />
				<main class="max-w-[1560px] mx-auto w-full px-[9vw]">
					{#each routes as page}
						<Route path={page.route}>
							<LazyComponent
								when={page.route === window.location.pathname}
								component={() => import(`./routes/${page.name}.svelte`)}
							/>
						</Route>
					{/each}
				</main>
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
