<script>
  let underline;
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

<section class="relative mt-[12vh] mb-[16vh]">
  <h1 class="cpd text-5xl pt-[15vh]">
    <span class="flex items-center">
      Hi, I'm an UX expert <img 
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
    <span in:typewriter on:introend="{() => underline = true}">with solid coding skills</span><span class="animate-pulse">|</span>
  </h1>
</section>

<style>
  /* .underline {
    @apply relative;
    &:after {
      content:
    }
  } */
</style>
