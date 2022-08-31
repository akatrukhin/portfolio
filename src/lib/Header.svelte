<script>
  import { Link } from "svelte-routing";
  import { fly } from 'svelte/transition';
  import { onDestroy } from "svelte";
  export let scrollY;
  
  const SCROLL_GAP = 64;
  const EMPTY_STRING = ""
  
  $: scrolledLogoClasses = scrollY > SCROLL_GAP ? "-translate-x-[3vw] -translate-y-[3vh]" : EMPTY_STRING;
  $: scrolledNavClasses = scrollY > SCROLL_GAP ? "-translate-y-[3vh]" : EMPTY_STRING;
  $: scrolledContactsClasses = scrollY > SCROLL_GAP ? "translate-x-[3vw] -translate-y-[3vh]" : EMPTY_STRING;
  
  const nav = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Portfolio',
    path: '/portfolio'
  }, {
    name: 'Articles',
    path: '/articles'
  }]
  
  const positions = ['UX Engineer', 'Design Technologist', 'UI Developer']
  let positionIndex = 0;
  let position = positions[positionIndex];
  
  const positionInterval = setInterval(() => {
    if (positionIndex === positions.length - 1) {
      positionIndex = -1;
    }
    position = positions[++positionIndex]
  }, 5000)
  
  onDestroy(() => {
    clearInterval(positionInterval);
  })
</script>

<header class="backdrop-blur-lg top-0 sticky z-40 w-full">
  <div class="flex items-center justify-between max-w-[1800px] px-[7vw] pt-[7vh] mx-auto">
    <Link to="/" class="text-2xl transform transition-transform duration-200 {scrolledLogoClasses}">
      <span class="l">Alexander</span><span class="b">Katrukhin</span>
      <div class="text-xs leading-4 uppercase opacity-50 m tracking-widest">
        {#key position}
        <span style="display: inline-block" in:fly={{ y: -20 }}>
          {position}
        </span>
        {/key}
      </div>
    </Link>
    
    <nav class="grid gap-[7vw] grid-cols-3 grid-rows-1 sb transform transition-transform duration-200 {scrolledNavClasses}">
      {#each nav as link}
      <Link to={link.path} class="hover:bg-white rounded-2xl py-2 px-4 hover:shadow-lg transform transition-all ease-in-out duration-200 text-center inline hover:-translate-y-1">{link.name}</Link>
      {/each}
    </nav>
    
    <div class="transform transition-transform duration-200 {scrolledContactsClasses}">
      <a href="mailto:a.katrukhin@gmail.com" class="text-xs leading-4 uppercase opacity-50 m tracking-widest">a.katrukhin@gmail.com</a>
    </div>
  </div>
</header>
