<script>
  import { Link } from "svelte-routing";
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
</script>

<header class="backdrop-blur-lg top-0 sticky z-40 w-full">
  <div class="flex items-center justify-between max-w-[1800px] px-[7vw] pt-[7vh] mx-auto">
    <Link to="/" class="text-2xl transform transition-transform ease-in-out duration-200 {scrolledLogoClasses}">
      <span class="l">Alexander</span><span class="b">Katrukhin</span>
      <div class="text-xs leading-4 uppercase opacity-50 m tracking-widest">UX Engineer</div>
    </Link>
    
    <nav class="grid gap-[7vw] grid-cols-3 grid-rows-1 sb transform transition-transform ease-in-out duration-200 {scrolledNavClasses}">
      {#each nav as link}
      <Link to={link.path} class="hover:bg-white hover:dark:bg-zinc-700 rounded-2xl py-2 px-4 hover:shadow-lg transform transition-all ease-in-out duration-200 text-center inline hover:-translate-y-1">{link.name}</Link>
      {/each}
    </nav>
    
    <div class="transform transition-transform ease-in-out duration-200 {scrolledContactsClasses}">
      <a href="mailto:a.katrukhin@gmail.com" class="text-xs leading-4 uppercase opacity-50 m tracking-widest">a.katrukhin@gmail.com</a>
    </div>
  </div>
</header>
