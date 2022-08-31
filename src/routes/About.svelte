<script>
  import { fade } from 'svelte/transition';
  
  const CAREER_START_YEAR = 109;
  const YEARS_OF_EXPERIENCE = new Date().getYear() - CAREER_START_YEAR;
  
  let underline = false;
  let indicator = true;
  
  setTimeout(() => {
    indicator = false;
  }, 5000)
  
  function typewriter(node, { speed = 1 }) {
    const valid = (
    node.childNodes.length === 1 &&
    node.childNodes[0].nodeType === Node.TEXT_NODE
    );
    
    if (!valid) {
      throw new Error(`This transition only works on elements with a single text node child`);
    }
    
    const text = node.textContent;
    const duration = text.length / (speed * 0.01);
    
    return {
      duration,
      tick: t => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      }
    };
  }
</script>

<section class="relative mb-[16vh] pt-[15vh] flex border-b-2">
  <div class="flex flex-col">
    <h1 class="cpd text-5xl">
      <span class="flex items-center">
        Hi, I'm an UX expert 
        <img 
        loading="lazy" 
        src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png" data-src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png" 
        data-srcset="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png 2x" 
        alt="Technologist" 
        title="Technologist" 
        width="72" 
        height="72" 
        srcset="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png 2x"
        />
      </span>
      <span 
      class="{underline ? 'before:scale-x-100' : 'before:scale-x-0'} before:origin-top-left before:block before:duration-300 before:ease-in-out before:delay-150 before:transition-transform before:absolute before:z-0 before:w-48 before:right-32 before:bottom-0 relative before:h-2 before:bg-teal-400" 
      >
      <span
      class="relative z-10"
      class:highlight={underline}
      in:typewriter 
      on:introend="{() => {
        underline = true
      }}"
      >
      with solid coding skills
    </span>
  </span>
  {#if indicator}
  <span out:fade class="animate-pulse">|</span>
  {/if}
</h1>

<div class="l opacity-70 mt-14 mb-[11vh] ml-9 leading-8">
  <p>
    My name is Alex and I'm working as User Experience Engineer. I have a passion for
    integrating Design, Development, and User Experience. I'm a creative
    technologist with a concentration in development. I possess a strong
    focus on user-centered design and an understanding of the way effective
    designs achieve business goals.
  </p>
  
  <p>
    My hobby to develop products for everyone, implement the best user
    experience in my projects, make everything is possible to make design
    ideas come true. I have a huge aspiration solve problems and set and
    achieve objectives.
  </p>
</div>

<div class="flex"> Hello</div>
</div>

<div class="w-full max-w-xs pl-6">
  <div class="flex items-center" title="{YEARS_OF_EXPERIENCE} years experience">
    <div class="nb text-7xl opacity-20">{YEARS_OF_EXPERIENCE}</div>
    <div class="b text-lg uppercase leading-6 mb-3 ml-3">Years of<br />Experience</div>
  </div>
</div>

</section>

<style>
  .bhnc {
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxMyI+CiAgPHBhdGggZmlsbD0iIzAwODlGRiIgZD0iTTguMSA1LjhTMTAgNS43IDEwIDMuNCA4LjQgMCA2LjUgMEgwdjEyLjdoNi41czMuOS4yIDMuOS0zLjdjMCAwIC4yLTMuMi0yLjMtMy4yWk0yLjggMi4zaDMuN3MuOCAwIC44IDEuMy0uNSAxLjUtMS4xIDEuNUgyLjhWMi4zWm0zLjUgOC4ySDIuOFY3LjFoMy43UzcuOCA3IDcuOCA4LjhjMCAxLjUtMSAxLjctMS41IDEuN1ptOS40LTcuM2MtNC44IDAtNC44IDQuOS00LjggNC45cy0uMyA0LjkgNC44IDQuOWMwIDAgNC4yLjIgNC4yLTMuNGgtMi4ycy4xIDEuNC0yIDEuNGMwIDAtMi4yLjEtMi4yLTIuMkgyMHMuNy01LjYtNC4zLTUuNlptMS45IDMuOWgtNC4xcy4zLTIgMi4yLTJjMS45IDAgMS45IDIgMS45IDJabS41LTYuNEgxM3YxLjZoNS4xVi43WiIvPgo8L3N2Zz4=")
    no-repeat center center;
    background-size: 19px 13px;
  }
  
  .drbl {
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+CiAgPHBhdGggZmlsbD0iI0U5NEM4OSIgZD0iTTkgMThjLTUgMC05LTQtOS05czQtOSA5LTkgOSA0IDkgOS00IDktOSA5Wm03LjYtNy44Yy0uMy0uMS0yLjQtLjctNC44LS4zIDEgMi44IDEuNCA1IDEuNSA1LjVhOCA4IDAgMCAwIDMuMy01LjJaTTEyIDE2LjFjLS4xLS43LS42LTMtMS42LTUuOGgtLjFhMTAuMyAxMC4zIDAgMCAwLTYgNC44IDcuNiA3LjYgMCAwIDAgNy43IDFabS04LjctMS45Yy4yLS4zIDIuMy0zLjggNi4yLTUuMWwuMy0uMS0uNi0xLjNDNS40IDguOCAxLjcgOC44IDEuMyA4LjhWOWE4IDggMCAwIDAgMiA1LjJaTTEuNSA3LjRjLjMgMCAzLjUuMSA3LjEtLjlhMzQuNyAzNC43IDAgMCAwLTIuOS00LjRjLTIuMSAxLTMuNyAzLTQuMiA1LjNabTUuNy01LjljLjIuMyAxLjYgMi4yIDIuOSA0LjUgMi43LTEgMy45LTIuNSA0LTIuN2E3LjcgNy43IDAgMCAwLTYuOS0xLjhaTTE1IDQuMmMtLjIuMi0xLjUgMS44LTQuMyAzbC41IDEuMS4xLjRjMi42LS4zIDUuMS4yIDUuNC4yIDAtMS44LS43LTMuNC0xLjctNC43WiIvPgo8L3N2Zz4=")
    no-repeat center center;
    background-size: 16px 16px;
  }
  
  .lnkdn {
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+CiAgPHBhdGggZmlsbD0iIzVEODhDMCIgZD0iTTQgMmMwIDEuMS0uNyAyLTIgMmEyIDIgMCAwIDEtMi0xLjlDMCAxIC44IDAgMiAwYTIgMiAwIDAgMSAyIDJaTTAgMThoNFY1SDB2MTNaTTEzLjYgNS4yYTQuNCA0LjQgMCAwIDAtMy44IDJoLS4xbC0uMi0xLjdINS45TDYgOS40VjE4aDR2LTcuMWwuMS0xYy4zLS43LjgtMS42IDEuOS0xLjYgMS40IDAgMiAxLjIgMiAyLjhWMThoNHYtNy40YzAtMy43LTEuOS01LjQtNC40LTUuNFoiLz4KPC9zdmc+")
    no-repeat center center;
    background-size: 16px 16px;
  }
  
  .gthb {
    background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOSAxOSI+CiAgPHBhdGggZmlsbD0iI0E4OTE4MiIgZD0iTTkuNSAwQTkuNiA5LjYgMCAwIDAgMCA5LjVjMCA0LjIgMi43IDcuOCA2LjUgOSAuNS4xLjYtLjIuNi0uNHYtMS43Yy0yLjYuNi0zLjItMS4yLTMuMi0xLjItLjQtMS4xLTEtMS40LTEtMS40LS45LS42IDAtLjYgMC0uNiAxIC4xIDEuNSAxIDEuNSAxIC44IDEuNCAyLjIgMSAyLjguOC4xLS42LjMtMS4xLjYtMS4zLTIuMS0uMi00LjQtMS4xLTQuNC00LjcgMC0xIC40LTEuOSAxLTIuNS0uMS0uMy0uNC0xLjMuMS0yLjYgMCAwIC44LS4yIDIuNiAxYTkuOSA5LjkgMCAwIDEgNC44IDBjMS44LTEuMiAyLjYtMSAyLjYtMSAuNSAxLjMuMiAyLjMuMSAyLjYuNi42IDEgMS41IDEgMi41IDAgMy43LTIuMyA0LjUtNC40IDQuNy40LjMuNy45LjcgMS43djIuN2MwIC4yLjEuNS42LjRhOS40IDkuNCAwIDAgMCA2LjUtOUMxOSA0LjMgMTQuNyAwIDkuNSAwWiIvPgo8L3N2Zz4=")
    no-repeat center center contain;
    background-size: 18px 18px;
  }
</style>