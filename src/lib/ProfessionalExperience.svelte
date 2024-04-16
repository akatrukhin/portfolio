<script>
	import ExperienceCard from './ExperienceCard.svelte'
	export let scrollY

	const EXPERIENCES = [
		{
			title: 'Senior User Experience Engineer',
			location: 'Microsoft, Bellevue, WA',
			date: {
				from: new Date('2021-06-01').getTime(),
				to: new Date().getTime()
			},
			desc: 'As a Senior User Experience Engineer at Microsoft, I have played a pivotal role in enhancing the user experience and interface of Microsoft Teams through diverse, high-impact projects. Leveraging a deep understanding of user-centered design principles and advanced technical skills, I have contributed to developing innovative features, optimizing user interactions, and ensuring accessibility standards. My work spans from prototype development to the delivery of production-level solutions, significantly influencing the efficiency and effectiveness of Microsoft Teams for users worldwide.'
		},
		{
			title: 'User Experience Engineer',
			location: 'Microsoft, Bellevue, WA',
			date: {
				from: new Date('2015-10-01').getTime(),
				to: new Date('2016-10-01').getTime()
			},
			desc: 'As a Senior User Experience Engineer at Microsoft, I have played a pivotal role in enhancing the user experience and interface of Microsoft Teams through diverse, high-impact projects. Leveraging a deep understanding of user-centered design principles and advanced technical skills, I have contributed to developing innovative features, optimizing user interactions, and ensuring accessibility standards. My work spans from prototype development to the delivery of production-level solutions, significantly influencing the efficiency and effectiveness of Microsoft Teams for users worldwide.'
		},
		{
			title: 'User Experience Engineer',
			location: 'Microsoft, Bellevue, WA',
			date: {
				from: new Date('2015-10-01').getTime(),
				to: new Date('2016-10-01').getTime()
			},
			desc: 'As a Senior User Experience Engineer at Microsoft, I have played a pivotal role in enhancing the user experience and interface of Microsoft Teams through diverse, high-impact projects. Leveraging a deep understanding of user-centered design principles and advanced technical skills, I have contributed to developing innovative features, optimizing user interactions, and ensuring accessibility standards. My work spans from prototype development to the delivery of production-level solutions, significantly influencing the efficiency and effectiveness of Microsoft Teams for users worldwide.'
		},
		{
			title: 'User Experience Engineer',
			location: 'Microsoft, Bellevue, WA',
			date: {
				from: new Date('2015-10-01').getTime(),
				to: new Date('2016-10-01').getTime()
			},
			desc: 'As a Senior User Experience Engineer at Microsoft, I have played a pivotal role in enhancing the user experience and interface of Microsoft Teams through diverse, high-impact projects. Leveraging a deep understanding of user-centered design principles and advanced technical skills, I have contributed to developing innovative features, optimizing user interactions, and ensuring accessibility standards. My work spans from prototype development to the delivery of production-level solutions, significantly influencing the efficiency and effectiveness of Microsoft Teams for users worldwide.'
		},
		{
			title: 'User Experience Engineer',
			location: 'Microsoft, Bellevue, WA',
			date: {
				from: new Date('2015-10-01').getTime(),
				to: new Date('2016-10-01').getTime()
			},
			desc: 'As a Senior User Experience Engineer at Microsoft, I have played a pivotal role in enhancing the user experience and interface of Microsoft Teams through diverse, high-impact projects. Leveraging a deep understanding of user-centered design principles and advanced technical skills, I have contributed to developing innovative features, optimizing user interactions, and ensuring accessibility standards. My work spans from prototype development to the delivery of production-level solutions, significantly influencing the efficiency and effectiveness of Microsoft Teams for users worldwide.'
		}
	]
</script>

<section class="relative flex flex-col pl-32 pr-20 mt-[12vh]" style="top: {-scrollY}px">
	<!-- <h2
		class="sticky top-8 text-2xl tracking-tight font-bold border-b pb-2 mb-8 -ml-4 leading-10 z-50"
		>
		Professional Experience
	</h2> -->
	<!-- <StickyHeaders> -->
	<!-- <h2
			bind:this={headers[0]}
			class="sticky top-8 text-2xl tracking-tight font-bold pb-2 mb-8 -ml-4 leading-10 z-50 {stickyStates
				? ''
				: 'border-b'}"
				>
				Professional Experience {stickyStates ? 1 : 2}
			</h2>
			{#each EXPERIENCES as experience}
			<ExperienceCard {experience} />
			{/each} -->

	<section class="mb-20">
		<h2 class="sticky top-6 flex justify-between text-2xl tracking-tight font-bold leading-10 z-50">
			Professional Experience
		</h2>
		<div class="content mt-12 pt-2">
			<!-- <hr class="mb-6 -ml-[168px] -mr-[120px]" /> -->
			{#each EXPERIENCES as experience}
				<ExperienceCard {experience} />
			{/each}
		</div>
	</section>

	<section class="bg-black rounded-2xl -mx-20 mb-28 px-20 py-12">
		<h2
			class="sticky top-6 text-2xl tracking-tight mix-blend-difference font-bold text-white leading-10 z-50"
			style="text-shadow: none"
		>
			Skills
		</h2>
		<article
			class="grid grid-cols-4 gap-20 text-xs mt-20 mb-12 text-white"
			style="text-shadow: none"
		>
			<section>
				<h2 class="font-mono text-xs opacity-70 mb-4 pb-1">Client-Side</h2>
				<ul>
					<li class="mb-2"><strong>Languages</strong><br /> JavaScript, TypeScript</li>
					<li class="mb-2">
						<strong>Frameworks/Libraries</strong><br /> React, Angular (CSR, SSR), Svelte, etc.
					</li>
					<li class="mb-2"><strong>Design Tools</strong><br /> Figma, Sketch, Adobe XD</li>
				</ul>
			</section>

			<section>
				<h2 class="font-mono text-xs opacity-70 mb-4 pb-1">Server-Side</h2>
				<ul>
					<li class="mb-2">
						<strong>Languages</strong><br /> JavaScript (Node.js, Bun.js),<br /> Python (Flask)
					</li>
					<li class="mb-2"><strong>Databases</strong><br /> PostgreSQL</li>
					<li class="mb-2"><strong>Version Control</strong><br /> Git, GitHub</li>
				</ul>
			</section>

			<section>
				<h2 class="font-mono text-xs opacity-70 mb-4 pb-1">AI and Machine Learning</h2>
				<ul>
					<li class="mb-2">Experience with Large Language Models (GPT, Mistral, Llama)</li>
					<li class="mb-2">Familiarity with LangChain for AI-powered application development</li>
				</ul>
			</section>

			<section>
				<h2 class="font-mono text-xs opacity-70 mb-4 pb-1">Additional Skills</h2>
				<ul>
					<li class="mb-2"><strong>Testing</strong><br /> Jest, Mocha, Selenium</li>
					<li class="mb-2"><strong>DevOps</strong><br /> Docker, CI/CD pipelines</li>
					<li class="mb-2">
						<strong>Soft Skills</strong><br /> Strong problem-solving,<br /> teamwork, and communication
						abilities
					</li>
				</ul>
			</section>
		</article>
	</section>

	<!-- <section>
		<h2 class="sticky top-6 text-2xl tracking-tight font-bold leading-10 z-50">Skills</h2>
		<hr class="mb-12 -ml-[168px] -mr-[120px]" />
		<article class="grid grid-cols-4 gap-20 text-xs mt-20 mb-24">
			<section>
				<h2 class="font-mono text-xxs opacity-60 mb-4 pb-1">Client-Side</h2>
				<ul>
					<li class="mb-2"><strong>Languages:</strong> JavaScript, TypeScript</li>
					<li class="mb-2">
						<strong>Frameworks/Libraries:</strong> React, Svelte, Angular (CSR, SSR)
					</li>
					<li class="mb-2"><strong>Design Tools:</strong> Figma, Sketch, Adobe XD</li>
				</ul>
			</section>

			<section>
				<h2 class="font-mono text-xxs opacity-60 mb-4 pb-1">Server-Side</h2>
				<ul>
					<li class="mb-2">
						<strong>Languages:</strong> JavaScript (Node.js, Bun.js), Python (Flask)
					</li>
					<li class="mb-2"><strong>Databases:</strong> PostgreSQL</li>
					<li class="mb-2"><strong>Version Control:</strong> Git, GitHub</li>
				</ul>
			</section>

			<section>
				<h2 class="font-mono text-xxs opacity-60 mb-4 pb-1">AI and Machine Learning</h2>
				<ul>
					<li class="mb-2">Experience with Large Language Models (GPT, Mistral, Llama)</li>
					<li class="mb-2">Familiarity with LangChain for AI-powered application development</li>
				</ul>
			</section>

			<section>
				<h2 class="font-mono text-xxs opacity-60 mb-4 pb-1">Additional Skills</h2>
				<ul>
					<li class="mb-2"><strong>Testing:</strong> Jest, Mocha, Selenium</li>
					<li class="mb-2"><strong>DevOps:</strong> Docker, CI/CD pipelines</li>
					<li class="mb-2">
						<strong>Soft Skills:</strong> Strong problem-solving,<br /> teamwork, and communication abilities
					</li>
				</ul>
			</section>
		</article>
		<hr class="mb-12 -ml-[168px] -mr-[120px]" />
	</section> -->

	<section>
		<h2 class="sticky top-6 text-2xl tracking-tight font-bold leading-10 z-50">Projects</h2>
		<div class="flex mt-4 gap-6 mb-12">
			<div class="bg-white w-72 shadow-lg h-80 rounded-xl"></div>
			<div class="bg-white w-72 shadow-lg h-80 rounded-xl"></div>
			<div class="bg-white w-72 shadow-lg h-80 rounded-xl"></div>
			<div class="bg-white w-72 shadow-lg h-80 rounded-xl"></div>
		</div>
	</section>
	<section>
		<h2 class="sticky top-6 text-2xl tracking-tight font-bold leading-10 z-50">Contact</h2>
		<div class="content">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi doloribus voluptatibus
			dolor minus fugiat ullam? Esse eos totam provident maiores eaque placeat nulla voluptatum,
			reprehenderit rem commodi, minima est? Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Maxime nisi doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima est? Lorem ipsum
			dolor sit amet consectetur adipisicing elit. Maxime nisi doloribus voluptatibus dolor minus
			fugiat ullam? Esse eos totam provident maiores eaque placeat nulla voluptatum, reprehenderit
			rem commodi, minima est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident maiores eaque
			placeat nulla voluptatum, reprehenderit rem commodi, minima est? Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Maxime nisi doloribus voluptatibus dolor minus fugiat ullam?
			Esse eos totam provident maiores eaque placeat nulla voluptatum, reprehenderit rem commodi,
			minima est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi doloribus
			voluptatibus dolor minus fugiat ullam? Esse eos totam provident maiores eaque placeat nulla
			voluptatum, reprehenderit rem commodi, minima est? Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Maxime nisi doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam
			provident maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima est? Lorem
			ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi doloribus voluptatibus dolor
			minus fugiat ullam? Esse eos totam provident maiores eaque placeat nulla voluptatum,
			reprehenderit rem commodi, minima est? Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Maxime nisi doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima est? Lorem ipsum
			dolor sit amet consectetur adipisicing elit. Maxime nisi doloribus voluptatibus dolor minus
			fugiat ullam? Esse eos totam provident maiores eaque placeat nulla voluptatum, reprehenderit
			rem commodi, minima est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident maiores eaque
			placeat nulla voluptatum, reprehenderit rem commodi, minima est?Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Maxime nisi doloribus voluptatibus dolor minus fugiat ullam?
			Esse eos totam provident maiores eaque placeat nulla voluptatum, reprehenderit rem commodi,
			minima est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi doloribus
			voluptatibus dolor minus fugiat ullam? Esse eos totam provident maiores eaque placeat nulla
			voluptatum, reprehenderit rem commodi, minima est?Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Maxime nisi doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam
			provident maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima est?
			Maxime nisi doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident maiores
			eaque placeat nulla voluptatum, reprehenderit rem commodi, minima est? Lorem ipsum dolor sit
			amet consectetur adipisicing elit. Maxime nisi doloribus voluptatibus dolor minus fugiat
			ullam? Esse eos totam provident maiores eaque placeat nulla voluptatum, reprehenderit rem
			commodi, minima est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident maiores eaque
			placeat nulla voluptatum, reprehenderit rem commodi, minima est? Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Maxime nisi doloribus voluptatibus dolor minus fugiat ullam?
			Esse eos totam provident maiores eaque placeat nulla voluptatum, reprehenderit rem commodi,
			minima est?LoMaxime nisi doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam
			provident maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima est? Lorem
			ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi doloribus voluptatibus dolor
			minus fugiat ullam? Esse eos totam provident maiores eaque placeat nulla voluptatum,
			reprehenderit rem commodi, minima est? Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Maxime nisi doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima est? Lorem ipsum
			dolor sit amet consectetur adipisicing elit. Maxime nisi doloribus voluptatibus dolor minus
			fugiat ullam? Esse eos totam provident maiores eaque placeat nulla voluptatum, reprehenderit
			rem commodi, minima est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident maiores eaque
			placeat nulla voluptatum, reprehenderit rem commodi, minima est?Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Maxime nisi doloribus voluptatibus dolor minus fugiat ullam?
			Esse eos totam provident maiores eaque placeat nulla voluptatum, reprehenderit rem commodi,
			minima est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi doloribus
			voluptatibus dolor minus fugiat ullam? Esse eos totam provident maiores eaque placeat nulla
			voluptatum, reprehenderit rem commodi, minima est?Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Maxime nisi doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam
			provident maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima est?rem
			ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi doloribus voluptatibus dolor
			minus fugiat ullam? Esse eos totam provident maiores eaque placeat nulla voluptatum,
			reprehenderit rem commodi, minima est?Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Maxime nisi doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident maiores
			eaque placeat nulla voluptatum, reprehenderit rem commodi, minima est?Lorem ipsum dolor sit
			amet consectetur adipisicing elit. Maxime nisi doloribus voluptatibus dolor minus fugiat
			ullam? Esse eos totam provident maiores eaque placeat nulla voluptatum, reprehenderit rem
			commodi, minima est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident maiores eaque
			placeat nulla voluptatum, reprehenderit rem commodi, minima est?
		</div>
	</section>
	<!-- </StickyHeaders> -->
</section>
