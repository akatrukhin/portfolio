<script>
	import ExperienceCard from "./ExperienceCard.svelte"
	import VimeoPlayer from "./VimeoPlayer.svelte"
	import Card from "./Card.svelte"
	import Modal from "./Modal.svelte"

	import MagicBoxIcon from "../assets/img/covers/magicbox/icon.png"
	import MagicBoxBg from "../assets/img/covers/magicbox/bg.jpeg"

	import CrewGuruBg from "../assets/img/covers/articleui.jpg"
	import CrewGuruIcon from "../assets/img/covers/icons/articleui.png"

	import MonopolistBg from "../assets/img/covers/monopolist.jpg"
	import MonopolistIcon from "../assets/img/covers/icons/mn.min.png"

	export let scrollY
	let modals = {
		modalMagicBox: false,
		modalCrewGuru: false,
		modalMonopolist: false,
	}

	const EXPERIENCES = [
		{
			title: "Senior User Experience Engineer",
			location: "Microsoft, Bellevue, WA",
			date: {
				from: new Date("2021-06-01").getTime(),
				to: new Date().getTime(),
			},
			desc: "As a Senior User Experience Engineer at Microsoft, I have played a pivotal role in enhancing the user experience and interface of Microsoft Teams through diverse, high-impact projects. Leveraging a deep understanding of user-centered design principles and advanced technical skills, I have contributed to developing innovative features, optimizing user interactions, and ensuring accessibility standards. My work spans from prototype development to the delivery of production-level solutions, significantly influencing the efficiency and effectiveness of Microsoft Teams for users worldwide.",
		},
		{
			title: "User Experience Engineer",
			location: "Microsoft, Bellevue, WA",
			date: {
				from: new Date("2015-10-01").getTime(),
				to: new Date("2016-10-01").getTime(),
			},
			desc: "As a Senior User Experience Engineer at Microsoft, I have played a pivotal role in enhancing the user experience and interface of Microsoft Teams through diverse, high-impact projects. Leveraging a deep understanding of user-centered design principles and advanced technical skills, I have contributed to developing innovative features, optimizing user interactions, and ensuring accessibility standards. My work spans from prototype development to the delivery of production-level solutions, significantly influencing the efficiency and effectiveness of Microsoft Teams for users worldwide.",
		},
		{
			title: "User Experience Engineer",
			location: "Microsoft, Bellevue, WA",
			date: {
				from: new Date("2015-10-01").getTime(),
				to: new Date("2016-10-01").getTime(),
			},
			desc: "As a Senior User Experience Engineer at Microsoft, I have played a pivotal role in enhancing the user experience and interface of Microsoft Teams through diverse, high-impact projects. Leveraging a deep understanding of user-centered design principles and advanced technical skills, I have contributed to developing innovative features, optimizing user interactions, and ensuring accessibility standards. My work spans from prototype development to the delivery of production-level solutions, significantly influencing the efficiency and effectiveness of Microsoft Teams for users worldwide.",
		},
		{
			title: "User Experience Engineer",
			location: "Microsoft, Bellevue, WA",
			date: {
				from: new Date("2015-10-01").getTime(),
				to: new Date("2016-10-01").getTime(),
			},
			desc: "As a Senior User Experience Engineer at Microsoft, I have played a pivotal role in enhancing the user experience and interface of Microsoft Teams through diverse, high-impact projects. Leveraging a deep understanding of user-centered design principles and advanced technical skills, I have contributed to developing innovative features, optimizing user interactions, and ensuring accessibility standards. My work spans from prototype development to the delivery of production-level solutions, significantly influencing the efficiency and effectiveness of Microsoft Teams for users worldwide.",
		},
		{
			title: "User Experience Engineer",
			location: "Microsoft, Bellevue, WA",
			date: {
				from: new Date("2015-10-01").getTime(),
				to: new Date("2016-10-01").getTime(),
			},
			desc: "As a Senior User Experience Engineer at Microsoft, I have played a pivotal role in enhancing the user experience and interface of Microsoft Teams through diverse, high-impact projects. Leveraging a deep understanding of user-centered design principles and advanced technical skills, I have contributed to developing innovative features, optimizing user interactions, and ensuring accessibility standards. My work spans from prototype development to the delivery of production-level solutions, significantly influencing the efficiency and effectiveness of Microsoft Teams for users worldwide.",
		},
	]
</script>

<section class="relative flex flex-col pl-32 pr-20 mt-[12vh]">
	<!-- <section>
		<h2 class="sticky top-6 text-2xl tracking-tight font-bold leading-10 z-50">
			Skills
		</h2>
		<hr class="mb-12 -ml-[168px] -mr-[120px]" />
		<article class="grid grid-cols-4 gap-20 text-xs mt-20 mb-24">
			<section>
				<h2 class="font-mono text-xxs opacity-60 mb-4 pb-1">Client-Side</h2>
				<ul>
					<li class="mb-2">
						<strong>Languages:</strong> JavaScript, TypeScript
					</li>
					<li class="mb-2">
						<strong>Frameworks/Libraries:</strong> React, Svelte, Angular (CSR, SSR)
					</li>
					<li class="mb-2">
						<strong>Design Tools:</strong> Figma, Sketch, Adobe XD
					</li>
				</ul>
			</section>

			<section>
				<h2 class="font-mono text-xxs opacity-60 mb-4 pb-1">Server-Side</h2>
				<ul>
					<li class="mb-2">
						<strong>Languages:</strong> JavaScript (Node.js, Bun.js), Python (Flask)
					</li>
					<li class="mb-2"><strong>Databases:</strong> PostgreSQL</li>
					<li class="mb-2">
						<strong>Version Control:</strong> Git, GitHub
					</li>
				</ul>
			</section>

			<section>
				<h2 class="font-mono text-xxs opacity-60 mb-4 pb-1">
					AI and Machine Learning
				</h2>
				<ul>
					<li class="mb-2">
						Experience with Large Language Models (GPT, Mistral, Llama)
					</li>
					<li class="mb-2">
						Familiarity with LangChain for AI-powered application development
					</li>
				</ul>
			</section>

			<section>
				<h2 class="font-mono text-xxs opacity-60 mb-4 pb-1">
					Additional Skills
				</h2>
				<ul>
					<li class="mb-2">
						<strong>Testing:</strong> Jest, Mocha, Selenium
					</li>
					<li class="mb-2">
						<strong>DevOps:</strong> Docker, CI/CD pipelines
					</li>
					<li class="mb-2">
						<strong>Soft Skills:</strong> Strong problem-solving,<br /> teamwork,
						and communication abilities
					</li>
				</ul>
			</section>
		</article>
		<hr class="mb-12 -ml-[168px] -mr-[120px]" />
	</section> -->

	<section class="bg-black rounded-2xl -mx-20 mb-28 px-20 py-12">
		<h2
			class="sticky top-6 text-2xl tracking-tight mix-blend-difference font-bold text-white leading-10 z-50"
			style="text-shadow: none"
		>
			Skills
		</h2>
		<article
			class="grid grid-cols-4 gap-20 text-xs mt-20 mb-12 text-white text-shadow-none"
		>
			<section>
				<h2 class="font-mono text-xs opacity-70 mb-4 pb-1">Client-Side</h2>
				<ul>
					<li class="mb-2">
						<strong>Languages</strong><br /> JavaScript, TypeScript
					</li>
					<li class="mb-2">
						<strong>Frameworks/Libraries</strong><br /> React, Angular (CSR, SSR),
						Svelte, etc.
					</li>
					<li class="mb-2">
						<strong>Design Tools</strong><br /> Figma, Sketch, Adobe XD
					</li>
				</ul>
			</section>

			<section>
				<h2 class="font-mono text-xs opacity-70 mb-4 pb-1">Server-Side</h2>
				<ul>
					<li class="mb-2">
						<strong>Languages</strong><br /> JavaScript (Node.js, Bun.js),<br />
						Python (Flask)
					</li>
					<li class="mb-2">
						<strong>Databases</strong><br /> PostgreSQL
					</li>
					<li class="mb-2">
						<strong>Version Control</strong><br /> Git, GitHub
					</li>
				</ul>
			</section>

			<section>
				<h2 class="font-mono text-xs opacity-70 mb-4 pb-1">
					AI and Machine Learning
				</h2>
				<ul>
					<li class="mb-2">
						Experience with Large Language Models (GPT, Mistral, Llama)
					</li>
					<li class="mb-2">
						Familiarity with LangChain for AI-powered application development
					</li>
				</ul>
			</section>

			<section>
				<h2 class="font-mono text-xs opacity-70 mb-4 pb-1">
					Additional Skills
				</h2>
				<ul>
					<li class="mb-2">
						<strong>Testing</strong><br /> Jest, Mocha, Selenium
					</li>
					<li class="mb-2">
						<strong>DevOps</strong><br /> Docker, CI/CD pipelines
					</li>
					<li class="mb-2">
						<strong>Soft Skills</strong><br /> Strong problem-solving,<br /> teamwork,
						and communication abilities
					</li>
				</ul>
			</section>
		</article>
	</section>

	<section class="select-none">
		<h2 class="sticky top-6 text-2xl tracking-tight font-bold leading-10 z-50">
			Projects
		</h2>
		<div class="flex mt-4 gap-6 mb-32">
			<Card
				on:click={() => (modals.modalMagicBox = true)}
				cover={{
					background: `url(${MagicBoxBg})`,
					icon: {
						url: MagicBoxIcon,
						size: "164px",
						position: "6px 124px",
						rotation: 0,
					},
				}}
			>
				<div class="flex flex-col justify-between h-full pt-6 pb-4 px-7">
					<div class="font-bold text-[9px] opacity-50">2019</div>
					<div class="font-bold mb-2 text-xl">MagicBox App</div>
					<div class="font-semibold text-xxs mb-1 opacity-50 leading-3">
						Organize and optimize design resources for production
					</div>
					<div class="flex-1 grow"></div>
					<div class="text-[9px] mb-1 opacity-70 font-mono">
						#Desktop #Comprassion #OpenSource
					</div>
				</div>
			</Card>
			<Card
				on:click={() => (modals.modalCrewGuru = true)}
				cover={{
					background: `url(${CrewGuruBg})`,
					icon: {
						url: CrewGuruIcon,
						size: "251px",
						position: "5px 33px",
					},
				}}
			>
				<div
					class="flex flex-col justify-between text-white text-shadow-none h-full pt-6 pb-4 px-7"
				>
					<div class="font-bold text-[9px] opacity-50">2017</div>
					<div class="font-bold mb-2 text-xl">CrewGuru</div>
					<div class="font-semibold text-xxs mb-1 opacity-50 leading-3">
						Connects film and arts <br /> industries for jobs and
						<br /> services
					</div>
					<div class="flex-1 grow"></div>
					<div class="text-[9px] mb-1 opacity-70 font-mono">
						#Web_App #Production
					</div>
				</div>
			</Card>
			<Card
				on:click={() => (modals.modalMonopolist = true)}
				cover={{
					background: `url(${MonopolistBg})`,
					icon: {
						url: MonopolistIcon,
						size: "164px",
						position: "-3px 133px",
					},
				}}
			>
				<div
					class="flex flex-col justify-between text-white text-shadow-none h-full pt-6 pb-4 px-7"
				>
					<div class="font-bold text-[9px] opacity-50">2014</div>
					<div class="font-bold mb-2 text-xl">Monopolist</div>
					<div
						class="font-semibold text-xxs mb-1 opacity-80 text-stone-900 leading-3"
					>
						A quick, 15-minute, simplified <br /> Monopoly-style game
					</div>
					<div class="flex-1 grow"></div>
					<div class="text-[9px] mb-1 opacity-70 font-mono">
						#Game #Desktop #MacOS
					</div>
				</div>
			</Card>
		</div>
	</section>

	<section class="mb-20">
		<h2
			class="sticky top-6 inline-flex justify-between text-2xl tracking-tight font-bold leading-10 z-50"
		>
			Professional Experience
		</h2>
		<div class="content mt-12 pt-2">
			{#each EXPERIENCES as experience}
				<ExperienceCard {experience} />
			{/each}
		</div>
	</section>

	<section>
		<h2 class="sticky top-6 text-2xl tracking-tight font-bold leading-10 z-50">
			Contact
		</h2>
		<div class="content">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est? Maxime nisi doloribus voluptatibus dolor minus fugiat ullam? Esse eos
			totam provident maiores eaque placeat nulla voluptatum, reprehenderit rem
			commodi, minima est? Lorem ipsum dolor sit amet consectetur adipisicing
			elit. Maxime nisi doloribus voluptatibus dolor minus fugiat ullam? Esse
			eos totam provident maiores eaque placeat nulla voluptatum, reprehenderit
			rem commodi, minima est? Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Maxime nisi doloribus voluptatibus dolor minus fugiat
			ullam? Esse eos totam provident maiores eaque placeat nulla voluptatum,
			reprehenderit rem commodi, minima est? Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Maxime nisi doloribus voluptatibus dolor
			minus fugiat ullam? Esse eos totam provident maiores eaque placeat nulla
			voluptatum, reprehenderit rem commodi, minima est?LoMaxime nisi doloribus
			voluptatibus dolor minus fugiat ullam? Esse eos totam provident maiores
			eaque placeat nulla voluptatum, reprehenderit rem commodi, minima est?
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est?rem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
			doloribus voluptatibus dolor minus fugiat ullam? Esse eos totam provident
			maiores eaque placeat nulla voluptatum, reprehenderit rem commodi, minima
			est?
		</div>
	</section>
</section>

<Modal id="modalMagicBox" bind:modals>
	<h2 slot="header" class="text-lg font-black">MagicBox App</h2>
	<h4 slot="description" class="text-sm opacity-60 font-mono">
		Organize and optimize design resources for production
	</h4>
	<VimeoPlayer
		videoId="940583258"
		autoplay={1}
		ratio={73.55}
		clipboardWrite={1}
	/>
	<div slot="links" class="mb-4 flex gap-4">
		<a
			tabindex="0"
			href="https://github.com/akatrukhin/MagicBox"
			target="_blank"
			class="focus:outline-none focus:ring rounded-lg flex items-center bg-white/10 px-4 py-2 text-xs font-bold ring-emerald-500"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-white mr-2">
				<path
					fill-rule="evenodd"
					d="M8 0a8 8 0 0 0-2.5 15.6c.4 0 .5-.2.5-.4v-1.5c-2 .4-2.5-.5-2.7-1 0-.1-.5-.9-.8-1-.3-.2-.7-.6 0-.6.6 0 1 .6 1.2.8.7 1.2 1.9 1 2.4.7 0-.5.2-.9.5-1-1.8-.3-3.7-1-3.7-4 0-.9.3-1.6.8-2.2 0-.2-.3-1 .1-2 0 0 .7-.3 2.2.7a7.4 7.4 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.1.5.6.8 1.3.8 2.2 0 3-1.9 3.7-3.6 4 .3.2.5.7.5 1.4v2.2c0 .2.1.5.5.4A8 8 0 0 0 16 8a8 8 0 0 0-8-8z"
				/>
			</svg>
			Source code
		</a>
		<a
			href="https://github.com/akatrukhin/MagicBox/releases/tag/v0.1.6"
			target="_blank"
			class="focus:outline-none focus:ring rounded-lg flex items-center bg-white/80 px-4 py-2 text-black text-xs font-bold ring-emerald-500"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-4 h-4 fill-black/80 mr-2"
			>
				<path
					d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"
				/>
				<path
					fill-rule="evenodd"
					d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z"
					clip-rule="evenodd"
				/>
			</svg>

			Download
		</a>
	</div>
	<div
		slot="tags"
		class="text-[9px] opacity-70 font-mono flex items-center justify-between"
	>
		<div>
			#Desktop_App #Electon #Angular #UX/UI #Development #Image_Optimization
			#Assets_Organization
		</div>
		<div>2019</div>
	</div>
</Modal>

<Modal id="modalCrewGuru" bind:modals>
	<h2 slot="header" class="text-lg font-black">CrewGuru</h2>
	<h4 slot="description" class="text-sm opacity-60 font-mono">
		Connects film and arts industries for jobs and services
	</h4>
	<VimeoPlayer videoId="192718452" autoplay={1} clipboardWrite={1} />
	<div
		slot="tags"
		class="text-[9px] opacity-70 font-mono flex items-center justify-between"
	>
		<div>#Web_App #Production #UX/UI #Angular #Front-end</div>
		<div>2017</div>
	</div>
</Modal>

<Modal id="modalMonopolist" bind:modals>
	<h2 slot="header" class="text-lg font-black">CrewGuru</h2>
	<h4 slot="description" class="text-sm opacity-60 font-mono">
		Connects film and arts industries for jobs and services
	</h4>
	<VimeoPlayer videoId="940605682" autoplay={1} clipboardWrite={1} />
	<div
		slot="tags"
		class="text-[9px] opacity-70 font-mono flex items-center justify-between"
	>
		<div>#Web_App #Production #UX/UI #Angular #Front-end</div>
		<div>2017</div>
	</div>
</Modal>
