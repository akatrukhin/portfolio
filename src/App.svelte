<script>
  import Loading from './lib/Loading.svelte';

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


<main class="h-screen w-screen flex flex-col overflow-x-hidden overflow-scroll" class:initBackground="{!didLoadingComponentMount}">
  <div class="flex flex-col w-full h-full bg-white dark:bg-zinc-800">
    Hello
  </div>
  {#if !isAnimationLoadingPlayed}
    <Loading startDelay={LOADING_MOUNT_DELAY} duration={LOADING_ANIMATION_DURATION} sequenceDelay={LOADING_ANIMATION_SEQUENCE_DELAY} />
  {/if}
</main>

<style>
  .initBackground {
    @apply bg-black dark:bg-white;
  }
</style>