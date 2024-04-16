<script>
	import { onMount, onDestroy } from 'svelte'
	import { stickyStates } from '../stores/StickyStore'

	export let spaceAbove = '0px' // You can set this for spacing above sticky headers

	let headers = []

	function setupObserver(header, index) {
		// Adding a sentinel element for each header to track its position
		const sentinel = document.createElement('div')
		sentinel.style.cssText = `position: absolute; top: ${spaceAbove}; left: 0; width: 100%; height: 1px;`
		header.parentNode.insertBefore(sentinel, header)

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const isSticky = !entry.isIntersecting && entry.boundingClientRect.top <= 0
					header.classList.toggle('is-sticky', isSticky)
					stickyStates.update((states) => ({ ...states, [index]: isSticky }))
				})
			},
			{
				root: null,
				rootMargin: `-${header.offsetTop}px 0px 0px 0px`,
				threshold: [0]
			}
		)

		observer.observe(sentinel)
		return observer
	}

	let observers = []

	onMount(() => {
		observers = headers.map((header, index) => setupObserver(header, index))
		return () => {
			observers.forEach((observer) => observer.disconnect())
		}
	})

	onDestroy(() => {
		observers.forEach((observer) => observer.disconnect())
	})
</script>

<slot />

<style>
	.sticky {
		position: -webkit-sticky;
		position: sticky;
		top: 0;
		z-index: 10; /* Ensure the sticky header is above other content */
	}

	.is-sticky {
		background-color: yellow; /* Just for demonstration */
	}
</style>
