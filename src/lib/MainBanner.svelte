<script>
	import { fade } from 'svelte/transition'

	const CAREER_START_YEAR = 109
	const YEARS_OF_EXPERIENCE = new Date().getYear() - CAREER_START_YEAR

	let underline = false
	let indicator = true

	setTimeout(() => {
		indicator = false
	}, 5000)

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

<section class="relative mb-[16vh] pt-[15vh] flex border-b-2">
	<div class="flex flex-col">
		<h1 class="cpd text-5xl">
			<span class="flex items-center">
				Hi, I'm an UX expert
				<img
					loading="lazy"
					src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png"
					data-src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png"
					data-srcset="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png 2x"
					alt="Technologist"
					title="Technologist"
					width="72"
					height="72"
					srcset="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png 2x"
				/>
			</span>
			<span
				class="{underline
					? 'before:scale-x-100'
					: 'before:scale-x-0'} before:origin-top-left before:block before:duration-300 before:ease-in-out before:delay-150 before:transition-transform before:absolute before:z-0 before:w-48 before:right-32 before:bottom-0 relative before:h-2 before:bg-teal-400"
			>
				<span
					class="relative z-10"
					class:highlight={underline}
					in:typewriter
					on:introend={() => {
						underline = true
					}}
				>
					with solid coding skills
				</span>
			</span>
			{#if indicator}
				<span out:fade class="animate-pulse">|</span>
			{/if}
		</h1>

		<div class="l opacity-70 mt-14 mb-[11vh] ml-9 leading-8">
			<p>
				My name is Alex and I'm working as User Experience Engineer. I have a passion for
				integrating Design, Development, and User Experience. I'm a creative technologist with a
				concentration in development. I possess a strong focus on user-centered design and an
				understanding of the way effective designs achieve business goals.
			</p>

			<p>
				My hobby to develop products for everyone, implement the best user experience in my
				projects, make everything is possible to make design ideas come true. I have a huge
				aspiration solve problems and set and achieve objectives.
			</p>
		</div>

		<div class="flex">Hello</div>
	</div>

	<div class="w-full max-w-xs pl-6">
		<div class="flex items-center" title="{YEARS_OF_EXPERIENCE} years experience">
			<div class="nb text-7xl opacity-20">{YEARS_OF_EXPERIENCE}</div>
			<div class="b text-lg uppercase leading-6 mb-3 ml-3">Years of<br />Experience</div>
		</div>
	</div>
</section>
