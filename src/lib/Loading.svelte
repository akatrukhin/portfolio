<script>
  import { onMount } from 'svelte';
  export let startDelay;
  export let duration;
  export let sequenceDelay;
  
  let canvasRef;
  
  const AMOUNT_PATH_POINTS = 9;
  const PATH_POINT_DELAY = 250;
  
  const layers = [{ 
    color: 'rgb(204, 204, 204)', 
    shape: createPathPoints() 
  }, {
    color: 'rgb(230, 229, 234)',
    shape: createPathPoints() 
  }, {
    color: 'rgb(0,0,0)',
    shape: createPathPoints()  
  }];
  
  function easeCubicInOut(t) {
    return t * t * t;
  }

  function createPathPoints() {
    return 	Array.from(
    { length: AMOUNT_PATH_POINTS },
    () => ((Math.sin(Math.random() + 10000) / 1) * PATH_POINT_DELAY).toFixed(2)
    );
  }
  
  const updatePath = (time, width, height, delayPointsArray) => {
    const points = [];
    for (let i = 0; i < AMOUNT_PATH_POINTS + 1; i++) {
      points[i] =
      easeCubicInOut(
      Math.min(Math.max(time - delayPointsArray[i], 0) / duration, 1)
      ) * height;
    }
    
    let str = '';
    str += `M 0 ${points[0]} `;
    for (let i = 0; i < AMOUNT_PATH_POINTS - 1; i++) {
      const p = ((i + 1) / (AMOUNT_PATH_POINTS - 1)) * width;
      const cp = p - ((1 / (AMOUNT_PATH_POINTS - 1)) * width) / 2;
      str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
    }
    str += `V ${width} H 0`;
    return str;
  }
  
  onMount(() => {
    let frame;

    setTimeout(() => {
      frame = requestAnimationFrame(loop)
    }, startDelay);
    
    function loop(t) {
      frame = requestAnimationFrame(loop)
      const ctx = canvasRef.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
      
      for (let i = 0; i < layers.length; i++) {
        ctx.strokeStyle = layers[i].color;
        ctx.fillStyle = layers[i].color;
        
        const p = new Path2D(
        updatePath(t - startDelay + sequenceDelay * i, canvasRef.width, canvasRef.height, layers[i].shape)
        );
        
        ctx.stroke(p);
        ctx.fill(p);
      }
      
    }
    
    setTimeout(() => {
      cancelAnimationFrame(frame)
    }, startDelay + duration + sequenceDelay * layers.length);
  });
</script>


<canvas 
  bind:this={canvasRef} 
  width={1280}
  height={800}
  class="w-screen fixed z-50 h-screen dark:invert">
</canvas>
