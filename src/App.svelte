<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte' 
  let loadingAnimation = true

  setTimeout(() => {
    loadingAnimation = false
  }, 4000);
</script>


<main class="h-screen w-screen flex flex-col overflow-x-hidden overflow-scroll
" style="background-image: paint(loading-screen)">

  {loadingAnimation ? 'Yes' : 'No'}

</main>

