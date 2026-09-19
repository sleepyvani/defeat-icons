<script>
  export let size = 18;
  export let width = undefined;
  export let height = undefined;
  export let iconNode = [];
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={width || size}
  height={height || size}
  viewBox="0 0 18 18"
  {...$$restProps}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs} />
  {/each}
  <slot />
</svg>
