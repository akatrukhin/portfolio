<script>
	import { onMount } from 'svelte'
	export let startDelay
	export let duration
	export let sequenceDelay

	let canvasRef

	const LIGHT_LAYER_COLORS = ['#000', 'rgb(204, 204, 204)', 'rgb(255,255,255)']
	const AMOUNT_PATH_POINTS = 9
	const PATH_POINT_DELAY = 250

	// Pre-calculate static values
	const widthPerPoint = 1280 / (AMOUNT_PATH_POINTS - 1)
	const delayPointsArrays = LIGHT_LAYER_COLORS.map(() => createPathPoints())

	function easeCubicInOut(t) {
		return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
	}

	function createPathPoints() {
		return Array.from(
			{ length: AMOUNT_PATH_POINTS },
			() => Math.sin(Math.random() + 10000) * PATH_POINT_DELAY
		)
	}

	const updatePath = (time, height, delayPointsArray) => {
		const points = delayPointsArray.map(
			(delay) => easeCubicInOut(Math.min(Math.max(time - delay, 0) / duration, 1)) * height
		)
		let pathStr = `M 0 ${points[0]} `

		for (let i = 0; i < AMOUNT_PATH_POINTS - 1; i++) {
			const p = (i + 1) * widthPerPoint
			const cp = p - widthPerPoint / 2
			pathStr += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `
		}

		pathStr += `V ${height} H 0`
		return pathStr
	}

	onMount(() => {
		let frame

		const startAnimation = () => {
			frame = requestAnimationFrame(loop)
		}

		const loop = (t) => {
			if (!canvasRef) return

			const ctx = canvasRef.getContext('2d')
			ctx.clearRect(0, 0, canvasRef.width, canvasRef.height)

			LIGHT_LAYER_COLORS.forEach((color, i) => {
				ctx.beginPath()
				const path = new Path2D(
					updatePath(t - startDelay + sequenceDelay * i, canvasRef.height, delayPointsArrays[i])
				)
				ctx.fillStyle = ctx.strokeStyle = color
				ctx.stroke(path)
				ctx.fill(path)
			})

			frame = requestAnimationFrame(loop)
		}

		setTimeout(startAnimation, startDelay)
		return () => cancelAnimationFrame(frame) // Cleanup on component destroy
	})
</script>

<canvas bind:this={canvasRef} width={1280} height={800} class="w-screen fixed z-50 h-screen"
></canvas>
