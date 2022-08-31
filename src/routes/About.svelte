<script>
  import { onMount } from 'svelte';
  const cdn = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
  
  const options = {
    strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    typeSpeed: 40
  }

  // let lazyComponent;
	// function load() {
	// 	lazyComponent = import(cdn);
	// }

  // console.log()
  
  onMount(() => {
    // import(cdn) // .js can be skipped
    // .then(module => {
    //     // stop loading indicator
    //     const Typed = module.default;
    //     new Typed('#typed-string', options)
    // })
    // .then((x) => console.log(x))
    // .catch((err) => {
    //   console.log({err})
    // });

    // await lazyComponent;
    // console.log(lazyComponent)
  })
</script>

<h1> Hello
  <span id="typed-string"></span>
</h1>

<!-- Hi, I'm a UX expert 
  <img 
  loading="lazy" 
  src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png" data-src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png" 
  data-srcset="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png 2x" 
  alt="Man Technologist: Light Skin Tone" 
  title="Man Technologist: Light Skin Tone" 
  width="72" 
  height="72" 
  srcset="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/man-technologist-light-skin-tone_1f468-1f3fb-200d-1f4bb.png 2x"
  />
  with solid coding skills| -->
  
  