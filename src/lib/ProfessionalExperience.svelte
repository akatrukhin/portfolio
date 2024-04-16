<script>
	import ExperienceCard from './ExperienceCard.svelte'

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
			desc: 'As a Senior User Experience Engineer at Microsoft, I have played a pivotal role in enhancing the user experience and interface of Microsoft Teams...'
		}
	]
</script>

<section class="relative flex flex-col pl-32 pr-20">
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

	<section>
		<h2 class="sticky top-6 text-2xl tracking-tight font-bold leading-10 z-50">
			Professional Experience
		</h2>
		<div class="content pt-2">
			<hr class="mb-6 -ml-20" />
			{#each EXPERIENCES as experience}
				<ExperienceCard {experience} />
			{/each}
		</div>
	</section>
	<section>
		<h2 class="sticky top-6 text-2xl tracking-tight font-bold leading-10 z-50">Projects</h2>
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
	<section>
		<h2 class="sticky top-6 text-2xl tracking-tight font-bold leading-10 z-50">Connect</h2>
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
