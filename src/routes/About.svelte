<script>
	import MainBanner from '../lib/MainBanner.svelte'
	import ProfessionalExperience from '../lib/ProfessionalExperience.svelte'

	export let scrollY
</script>

<MainBanner {scrollY} />
<ProfessionalExperience {scrollY} />
