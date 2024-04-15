<script>
	import ExperienceCard from './ExperienceCard.svelte'

	const EXPERIENCES = [
		{
			title: 'Senior User Experience Engineer',
			location: 'Microsoft, Bellevue, WA',
			date: 'Oct 2015 - Present',
			desc: 'As a Senior User Experience Engineer at Microsoft, I have played a pivotal role in enhancing the user experience and interface of Microsoft Teams...'
		},
		{
			title: 'Senior User Experience Engineer',
			location: 'Microsoft, Bellevue, WA',
			date: 'Oct 2015 - Present',
			desc: 'As a Senior User Experience Engineer at Microsoft, I have played a pivotal role in enhancing the user experience and interface of Microsoft Teams...'
		}
	]
</script>

<section class="relative mb-[16vh] pt-[15vh] flex flex-col">
	{#each EXPERIENCES as experience}
		<ExperienceCard {experience} />
	{/each}
</section>
