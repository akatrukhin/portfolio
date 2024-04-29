<script>
  import { fade } from "svelte/transition";

  export let scrollY;
  let indicator = true;

  setTimeout(() => {
    indicator = false;
  }, 2800);

  function typewriter(node, { speed = 1 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`,
      );
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
      duration,
      tick: (t) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }
</script>

<section
  class="relative pt-[15vh] aspect-video borders flex lg:pr-20 md:pr-20 lg:pl-24 md:pl-16 gap-20"
>
  <div class="flex flex-col">
    <h1 class="lg:text-4xl md:text-3xl tracking-tight leading-10 relative">
      <span class="flex items-center font-black relative z-10">
        Hello, I'm a Front-End Developer
      </span>
      <span class="relative z-10" in:typewriter>
        with a knack for UX Design
      </span>
      {#if indicator}
        <span out:fade>▋</span>
      {/if}
    </h1>

    <p
      class="opacity-70 mt-14 max-w-3xl md:text-sm lg:text-base ml-9 lg:leading-7 md:leading-[28px]"
    >
      Adept at overseeing the complete product development cycle—from initial
      design through front-end and back-end development to production
      deployment. My expertise lies in seamlessly integrating design principles
      with technical development, ensuring the delivery of cohesive,
      user-centric solutions that excel in functionality and user experience.
    </p>
  </div>

  <!-- <div class="w-full max-w-xs min-w-80">
		<div class="flex items-center text-lg">
		</div>
	</div> -->

  <div
    class="absolute flex items-center bottom-0 left-0 transition-all gap-12 duration-400 transform {scrollY >
    50
      ? 'opacity-0 -translate-y-12'
      : ''}"
  >
    <a
      href="https://github.com/akatrukhin"
      class="rounded p-2 hover:bg-white hover:shadow-lg transition-all duration-200 ease-in-out opacity-40 hover:opacity-100"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
        <path
          fill-rule="evenodd"
          d="M8 0a8 8 0 0 0-2.5 15.6c.4 0 .5-.2.5-.4v-1.5c-2 .4-2.5-.5-2.7-1 0-.1-.5-.9-.8-1-.3-.2-.7-.6 0-.6.6 0 1 .6 1.2.8.7 1.2 1.9 1 2.4.7 0-.5.2-.9.5-1-1.8-.3-3.7-1-3.7-4 0-.9.3-1.6.8-2.2 0-.2-.3-1 .1-2 0 0 .7-.3 2.2.7a7.4 7.4 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.1.5.6.8 1.3.8 2.2 0 3-1.9 3.7-3.6 4 .3.2.5.7.5 1.4v2.2c0 .2.1.5.5.4A8 8 0 0 0 16 8a8 8 0 0 0-8-8z"
        />
      </svg>
    </a>

    <a
      href="https://github.com/akatrukhin"
      class="rounded p-2 hover:bg-white hover:shadow-lg transition-all duration-200 ease-in-out opacity-40 hover:opacity-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        class="w-5 h-5"
      >
        <path fill="none" d="M0 0h256v256H0z" />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
          d="M232 96v64M24 96v64M128 40v64M128 152v64M24 160l104-56 104 56-104 56-104-56z"
        />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
          d="m24 96 104-56 104 56-104 56L24 96z"
        />
      </svg>
    </a>

    <a
      href="https://github.com/akatrukhin"
      class="rounded p-2 hover:bg-white hover:shadow-lg transition-all duration-200 ease-in-out opacity-40 hover:opacity-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xml:space="preserve"
        class="w-5 h-5"
        viewBox="0 0 512 512"
      >
        <path
          d="M51.3 185.8h90v271h-90v-271zM97 55.3C66.1 55.3 46 75.5 46 102c0 26 19.5 46.9 49.8 46.9h.5c31.4 0 51-20.9 51-46.9-.6-26.5-19.6-46.7-50.4-46.7zm265.4 124.2c-47.7 0-69.1 26.3-81 44.7v-38.3h-90.1c1.2 25.4 0 270.8 0 270.8h90V305.4a62 62 0 0 1 3-22c6.5-16.1 21.3-32.9 46.2-32.9 32.6 0 45.6 24.9 45.6 61.3v145h90V301.3c0-83.2-44.4-122-103.7-122z"
        />
      </svg>
    </a>
  </div>
</section>
