<script>
  import { onMount } from "svelte";

  export let as = "div"; // Default element
  export let text = "";
  export let onClick = null; // Event handler for click events
  export let href = ""; // For anchor elements
  export let type = "button"; // For button elements, if needed
  export let className = "";
  export let styleRules = []; // Array of { from, to, className }
  const GLYPHS =
    "011010001■□▤▥▧▩010100100101▲△▶▷▼▽◀◁001001001001◇◈0010100010011◉◊○◌◍◎●◐◑◔01◗0010010011◘◙◚◛00010010101011◢◣◤◥0110010101◦0010101011◧◨◩◪◫00011◬◭◯◰◷◸01◻◼";
  let chars = [];

  function initializeOrRandomizeChars() {
    chars = text.split("").map((char, index) => {
      let charStyles = styleRules.reduce((acc, rule) => {
        if (index + 1 >= rule.from && index + 1 <= rule.to) {
          acc += " " + rule.className;
        }
        return acc;
      }, "");

      return {
        char,
        index,
        className: charStyles,
        char1: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        char2: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        char3: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      };
    });
  }

  onMount(initializeOrRandomizeChars);
</script>

<svelte:element
  this={as}
  on:click={onClick}
  on:mouseover={initializeOrRandomizeChars}
  on:focus={initializeOrRandomizeChars}
  href={as === "a" ? href : undefined}
  type={as === "button" ? type : undefined}
  tabindex="0"
  class={`glyph-animation grid content-stretch gap-0 items-stretch ${className}`}
  style={`grid-template-columns: repeat(${chars.length}, 1fr);`}
>
  {#each chars as { char, index, className, char1, char2, char3 }}
    <span
      data-char={char}
      class={className}
      style="--index: {index}; --char-1: '{char1}'; --char-2: '{char2}'; --char-3: '{char3}';"
    >
      {char}
    </span>
  {/each}
</svelte:element>

<style>
  .glyph-animation {
    color: canvasText;
    position: relative;
    transform-style: preserve-3d;
  }

  .glyph-animation::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: calc(var(--intent, 0) * 0.0875);
    transition: opacity 0.2s;
  }

  .glyph-animation span {
    position: relative;
    color: transparent;
    font-size: inherit;
  }

  .glyph-animation span::after {
    content: attr(data-char);
    position: absolute;
    display: inline-block;
    inset: 0;
    color: canvasText;
  }

  .glyph-animation:hover span::after,
  .glyph-animation:focus-visible span::after {
    animation: flash calc(0.25 * 1s) calc(var(--index, 0) * 0.04s) steps(1, end);
  }

  @keyframes flash {
    0%,
    20% {
      content: "_";
    }
    40% {
      content: var(--char-1);
    }
    60% {
      content: var(--char-2);
    }
    80% {
      content: var(--char-3);
    }
  }
</style>
