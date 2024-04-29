<script>
  export let videoId;
  export let autoplay = 0;
  export let fullscreen = 1;
  export let pictureInPicture = 1;
  export let clipboardWrite = 0;
  export let appId = 58479;
  export let ratio = 62.5

  const src = `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=${appId}&autoplay=${autoplay}&fullscreen=${fullscreen}&picture-in-picture=${pictureInPicture}&clipboard-write=${clipboardWrite}`;

  // Function to dynamically load the Vimeo API script
  function loadVimeoAPI() {
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      document.head.appendChild(script);
  }

  // Load the script when the component is first mounted
  import.meta.env.SSR || loadVimeoAPI();
</script>

<div style={`padding:${ratio}% 0 0 0;`} class="relative rounded overflow-hidden">
  <iframe src={src}
          frameborder="0"
          allow="autoplay; loop; fullscreen; picture-in-picture; clipboard-write;"
          style="position:absolute; top:0; left:0; width:100%; height:100%;"
          title="Vimeo Video Player">
  </iframe>
</div>
