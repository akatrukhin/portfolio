<script>
  import { Router, Route } from "svelte-routing";
  import Loading from './lib/Loading.svelte';
  import Header from './lib/Header.svelte';
  import About from './routes/About.svelte';
  import Portfolio from "./routes/Portfolio.svelte";

  export let url = "";
  let main;
  let scrollY = 0;

  const LOADING_MOUNT_DELAY = 1000;
  const LOADING_ANIMATION_DURATION = 1400;
  const LOADING_ANIMATION_SEQUENCE_DELAY = 150;

  let didLoadingComponentMount = false;
  let isAnimationLoadingPlayed = false;

  setTimeout(() => {
    didLoadingComponentMount = true
  }, LOADING_MOUNT_DELAY);

  setTimeout(() => {
    isAnimationLoadingPlayed = true
  }, LOADING_MOUNT_DELAY + LOADING_ANIMATION_DURATION + LOADING_ANIMATION_SEQUENCE_DELAY * 3);

</script>

<main class="h-screen w-screen flex flex-col text-base">
  <div 
    class="flex flex-col w-full h-full overflow-x-hidden overflow-scroll transition-opacity duration-100 ease-out bg-zinc-100 dark:bg-zinc-800" class:opacity-0={!didLoadingComponentMount} 
    bind:this={main} 
    on:scroll={
      () => {
        scrollY = main.scrollTop
      }} 
  >
    <Router url="{url}">
      <Header scrollY={scrollY} />
      <Route path="/"><About /></Route>
      <Route path="/portfolio"><Portfolio /></Route>
    </Router>
  </div>
  {#if !isAnimationLoadingPlayed}
    <Loading startDelay={LOADING_MOUNT_DELAY} duration={LOADING_ANIMATION_DURATION} sequenceDelay={LOADING_ANIMATION_SEQUENCE_DELAY} />
  {/if}
</main>

<svelte:window bind:scrollY={scrollY} />
