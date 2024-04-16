<script>
	import { fade } from 'svelte/transition'

	export let scrollY
	let indicator = true

	setTimeout(() => {
		indicator = false
	}, 2800)

	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`)
		}

		const text = node.textContent
		const duration = text.length / (speed * 0.01)

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t)
				node.textContent = text.slice(0, i)
			}
		}
	}
</script>

<section class="relative pt-[15vh] aspect-video flex pr-12 pl-24 gap-20">
	<div class="flex flex-col">
		<h1 class="text-4xl tracking-tight leading-10 relative">
			<span class="flex items-center font-black relative z-10">
				Hello, I'm a Front-End Developer
			</span>
			<span class="relative z-10" in:typewriter> with a knack for UX Design </span>
			{#if indicator}
				<span out:fade>▋</span>
			{/if}
		</h1>

		<p class="opacity-70 mt-14 max-w-3xl ml-9 leading-7">
			Adept at overseeing the complete product development cycle—from initial design through
			front-end and back-end development to production deployment. My expertise lies in seamlessly
			integrating design principles with technical development, ensuring the delivery of cohesive,
			user-centric solutions that excel in functionality and user experience.
		</p>
	</div>

	<!-- <div class="w-full max-w-xs min-w-80">
		<div class="flex items-center text-lg">
		</div>
	</div> -->

	<div
		class="absolute bottom-0 left-0 transition-all duration-200 ease-in-out transform {scrollY > 50
			? 'opacity-0 translate-y-4'
			: ''}"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
			><path
				fill-rule="evenodd"
				d="M8 0a8 8 0 0 0-2.5 15.6c.4 0 .5-.2.5-.4v-1.5c-2 .4-2.5-.5-2.7-1 0-.1-.5-.9-.8-1-.3-.2-.7-.6 0-.6.6 0 1 .6 1.2.8.7 1.2 1.9 1 2.4.7 0-.5.2-.9.5-1-1.8-.3-3.7-1-3.7-4 0-.9.3-1.6.8-2.2 0-.2-.3-1 .1-2 0 0 .7-.3 2.2.7a7.4 7.4 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.1.5.6.8 1.3.8 2.2 0 3-1.9 3.7-3.6 4 .3.2.5.7.5 1.4v2.2c0 .2.1.5.5.4A8 8 0 0 0 16 8a8 8 0 0 0-8-8z"
			/></svg
		>
	</div>
</section>
