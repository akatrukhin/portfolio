<script>
  import { onMount } from 'svelte';
  
  let canvasRef;
  
  const ANIMATION_DURATION = 1400;
  const ANIMATION_LAYER_DELAY = 150;
  const AMOUNT_PATH_POINTS = 18;
  const PATH_POINT_DELAY = 250;
  
  function createPathPoints() {
    return 	Array.from(
    { length: AMOUNT_PATH_POINTS },
    () => ((Math.sin(Math.random() + 10000) / 1) * PATH_POINT_DELAY).toFixed(2)
    );
  }
  
  const layers = [{
    color: 'rgb(230, 229, 234)',
    shape: createPathPoints() 
  },{ 
    color: 'rgb(204, 204, 204)', 
    shape: createPathPoints() 
  }, {
    color: 'rgb(0,0,0)',
    shape: createPathPoints()  
  }];
  
  console.log({layers})
  
  const ease = {
    cubicInOut: (t) => {
      return t * t * t;
    }
  };
  
  const updatePath = (time, width, height, delayPointsArray) => {
    const points = [];
    for (let i = 0; i < AMOUNT_PATH_POINTS + 1; i++) {
      points[i] =
      ease.cubicInOut(
      Math.min(Math.max(time - delayPointsArray[i], 0) / ANIMATION_DURATION, 1)
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
    let frame = requestAnimationFrame(loop);
    let p;
    
    function loop(t) {
      frame = requestAnimationFrame(loop)
      const ctx = canvasRef.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
      
      for (let i = 0; i < layers.length; i++) {
        ctx.strokeStyle = layers[i].color;
        ctx.fillStyle = layers[i].color;
        
        p = new Path2D(
        updatePath(t + ANIMATION_LAYER_DELAY * i, canvasRef.width, canvasRef.height, layers[i].shape)
        );
        
        ctx.stroke(p);
        ctx.fill(p);
      }
      
    }
    
    setTimeout(() => {
      cancelAnimationFrame(frame)
    }, ANIMATION_DURATION + ANIMATION_LAYER_DELAY * layers.length);
  });
</script>


<canvas 
bind:this={canvasRef} 
width={1280}
height={800}
class="w-screen h-screen">
</canvas>


