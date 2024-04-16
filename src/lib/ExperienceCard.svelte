<script>
	import { onMount } from 'svelte'

	export let experience

	let duration = ''

	let tags = [
		'Angular',
		'Data_Visualizations',
		'React',
		'Electron.js',
		'Open_Source',
		'Fluent_UI',
		'Figma',
		'Machine_Learning',
		'Digital_Asset_Management',
		'Image_Recognition',
		'UI_Animations',
		'Accessibility_Standards',
		'Prototype_Development'
	]

	onMount(() => {
		duration = calculateDuration(experience.date.from, experience.date.to)
	})

	function calculateDuration(from, to) {
		const fromDate = new Date(from)
		const toDate = new Date(to)
		const diffTime = Math.abs(toDate - fromDate)
		const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
		const diffMonths = Math.floor(
			(diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
		)

		return `${diffYears} yrs ${diffMonths} mos`
	}
</script>

<article class="mb-20">
	<div class="flex gap-20 mb-4">
		<div>
			<div class="flex justify-between">
				<div>
					<h3 class="font-semibold mb-2">{experience.title}</h3>
					<h4 class="font-mono text-xs mb-4 flex items-center">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" viewBox="0 0 32 32"
							><path d="M0 17h15v15H0z" style="fill:#51aed9" /><path
								d="M17 17h15v15H17z"
								style="fill:#fec327"
							/><path d="M17 0h15v15H17z" style="fill:#34b67a" /><path
								d="M0 0h15v15H0z"
								style="fill:#f15723"
							/></svg
						>
						{experience.location}
					</h4>
				</div>
				<p class="text-xxs flex-col items-end flex font-mono">
					<span>
						{duration}
					</span>
					<span class="opacity-60">
						{new Date(experience.date.from).toLocaleDateString()} - {new Date(
							experience.date.to
						).toLocaleDateString() === new Date(new Date().getTime()).toLocaleDateString()
							? 'Present'
							: new Date(experience.date.to).toLocaleDateString()}
					</span>
				</p>
			</div>
			<p class="text-sm leading-7 mb-8">{experience.desc}</p>
		</div>
		<div class="w-full max-w-xs pt-16 opacity-60 min-w-80">
			<nav aria-label="Technologies" class="font-mono text-xxs mb-8 pt-0.5 w-72">
				<ul class="flex gap-x-3 flex-wrap gap-y-[3px] leading-5">
					{#each tags as tag}
						<li><a href={`/tags/${tag}`} rel="tag" class="lowercase">#{tag}</a></li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>

	<!-- PROJECTS -->
	<div class="flex gap-6 mb-12 overflow-x-scroll w-full">
		<div class="font-semibold flex items-center gap-4 text-xs">
			<div class="w-24 h-12 rounded bg-zinc-400"></div>
			<div>
				Open Source Contributions
				<div class="text-xxs mt-1 font-normal italic">
					Developing Teams App Templates and Fluent UI components, alongside a specialized chart
					library.
				</div>
			</div>
		</div>

		<div class="font-semibold flex items-center gap-4 text-xs">
			<div class="w-24 h-12 rounded bg-zinc-400"></div>
			<div>
				High-Fidelity Prototyping
				<div class="text-xxs mt-1 font-normal italic">
					Employing React and Electron.js to rapidly build and test features, enhancing user
					feedback and iteration cycles
				</div>
			</div>
		</div>

		<div class="font-semibold flex items-center gap-4 text-xs">
			<div class="w-24 h-12 rounded bg-zinc-400"></div>
			<div>
				UI Animations
				<div class="text-xxs mt-1 font-normal italic">
					Complex animation solutions to optimize performance and enhance user engagement
				</div>
			</div>
		</div>
	</div>
</article>
