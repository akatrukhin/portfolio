<script>
	import { createEventDispatcher } from "svelte"

	export let cover
	let card, container, back, front, shine, icon
	let mouseOver = false
	let background =
		cover?.background ||
		"radial-gradient(farthest-side at 50% 50%, rgba(0,0,0,0) 48%, rgba(0,0,0,.1) 150%)"

	function processMovement(e) {
		const offsets = card.getBoundingClientRect(),
			bd = document.body,
			htm = document.documentElement,
			bdst = bd.scrollTop || htm.scrollTop,
			bdsl = bd.scrollLeft,
			pageX = e.pageX,
			pageY = e.pageY,
			w = card.clientWidth,
			h = card.clientHeight,
			wMultiple = 320 / w,
			offsetX = 0.52 - (pageX - offsets.left - bdsl) / w,
			offsetY = 0.52 - (pageY - offsets.top - bdst) / h,
			dy = pageY - offsets.top - bdst - h / 2,
			dx = pageX - offsets.left - bdsl - w / 2,
			yRotate = (offsetX - dx) * (0.035 * wMultiple),
			xRotate = (dy - offsetY) * (0.05 * wMultiple),
			angle = (Math.atan2(dy, dx) * 180) / Math.PI - 90

		container.style.transform = `rotateX(${xRotate}deg) rotateY(${yRotate}deg)${mouseOver ? " scale3d(1.04,1.04,1.04)" : ""}`
		icon.style.transform = container.style.transform

		shine.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${((pageY - offsets.top - bdst) / h) * 0.4}) 0%, rgba(255,255,255,0) 80%)`
		shine.style.transform = `translateX(${offsetX * 2 - 0.1}px) translateY(${offsetY * 2 - 0.1}px)`
	}

	function processEnter() {
		mouseOver = true
	}

	function processExit() {
		mouseOver = false
		container.style.transform = ""
		shine.style.cssText = ""
	}

	const dispatch = createEventDispatcher()

	function handleClick() {
		dispatch("click")
	}
</script>

<div
	bind:this={card}
	class="card"
	style="transform: perspective(960px);"
	on:click={handleClick}
	on:mousemove={processMovement}
	on:mouseenter={processEnter}
	on:mouseleave={processExit}
>
	<div bind:this={container} class="container" class:over={mouseOver}>
		<div class="shadow"></div>
		<div class="layers">
			<div
				bind:this={back}
				class="back"
				style="background-image: {background};"
			></div>
			<div bind:this={front} class="front f">
				<slot></slot>
			</div>
		</div>
		<div bind:this={shine} class="shine"></div>
		<div bind:this={icon} class="icon relative">
			{#if cover && cover.icon}
				<div
					class="icon-image relative z-10"
					style="
    background-image: url({cover.icon.url});
    background-size: {cover.icon.size};
    background-position: {cover.icon.position};
    transform: rotate({cover.icon.rotation}deg);
    transform-origin: top left;
    "
				></div>
				<!-- <div
      class="icon-image absolute z-0 blur-lg top-2 opacity-50"
      style="background-image: url({cover.icon.url});
      background-size: {cover.icon.size};
      background-position: {cover.icon.position};"
      ></div> -->
			{/if}
		</div>
	</div>
</div>

<style>
	.card {
		max-width: 256px;
		width: 100%;
		min-width: 244px;
		height: 326px;
		border-radius: 10px;
		transform-style: preserve-3d;
		cursor: pointer;
		-webkit-tap-highlight-color: rgba(#000, 0);
	}

	.container {
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		box-shadow: 0 1px 5px 0 rgba(14, 21, 47, 0.14);
		z-index: 1;
		transition: all 0.2s ease-out;
	}

	.container.over {
		z-index: 2;
	}

	.container.over .shadow {
		box-shadow:
			0 45px 100px rgba(14, 21, 47, 0.2),
			0 16px 40px rgba(14, 21, 47, 0.2);
	}

	.layers {
		position: relative;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		overflow: hidden;
		transform-style: preserve-3d;
	}

	.back,
	.front {
		position: absolute;
		width: 104%;
		height: 104%;
		top: -2%;
		left: -2%;
		background-repeat: no-repeat;
		background-position: center;
		background-color: transparent;
		background-size: cover;
		transition: all 0.1s ease-out;
	}

	.shadow {
		position: absolute;
		top: 10%;
		left: 7.5%;
		width: 85%;
		height: 85%;
		transition: all 0.2s ease-out;
		box-shadow: 0 16px 30px rgba(14, 21, 47, 0.3);
	}

	.shine {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 10px;
		background: linear-gradient(
			135deg,
			rgba(255, 255, 255, 0.25) 0%,
			rgba(255, 255, 255, 0) 60%
		);
	}

	.back {
		background-position: 50% 50%;
		background-color: #f9f9f9;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.icon {
		position: absolute;
		top: 0;
		left: -20px;
		right: 0;
		bottom: 0;
		z-index: 3;
	}

	.icon .icon-image {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-repeat: no-repeat;
	}
</style>
