<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Loading from './lib/Loading.svelte';
  import Header from './lib/Header.svelte';
  import LazyComponent from "./lib/Loading copy.svelte";
  import { routes } from "./routes/utils"

  let main;
  let scrollY = 0;

  const LOADING_MOUNT_DELAY = 1000;
  const LOADING_ANIMATION_DURATION = 2000;
  const LOADING_ANIMATION_SEQUENCE_DELAY = 300;

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
    <Router>
      <Header scrollY={scrollY} />

      {#each routes as page}      
        <Route path={page.route}>
          <LazyComponent 
	          when={page.route === window.location.pathname}
	          component={() => import(`./routes/${page.name}.svelte`)} 
          />
        </Route>
      {/each}

    </Router>
  </div>
  {#if !isAnimationLoadingPlayed}
    <Loading startDelay={LOADING_MOUNT_DELAY} duration={LOADING_ANIMATION_DURATION} sequenceDelay={LOADING_ANIMATION_SEQUENCE_DELAY} />
  {/if}
</main>

<svelte:window bind:scrollY={scrollY} />
