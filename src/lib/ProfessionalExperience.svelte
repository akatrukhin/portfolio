<script>
	import { fade } from 'svelte/transition'

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

<section class="relative mb-[16vh] pt-[15vh] flex">
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

		<div class="opacity-70 mt-14 mb-[11vh] ml-9 leading-8">
			<p>
				Adept at overseeing the complete product development cycle—from initial design through
				front-end and back-end development to production deployment. My expertise lies in seamlessly
				integrating design principles with technical development, ensuring the delivery of cohesive,
				user-centric solutions that excel in functionality and user experience.
			</p>
		</div>
	</div>

	<div class="w-full max-w-xs pl-6">
		<div class="flex items-center text-lg">
			<!-- SOMETHING -->
		</div>
	</div>
</section>
