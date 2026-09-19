<script>
  import Icon from './Icon.svelte';
  const iconNode = [["rect",{"x":"2","y":"2","width":"14","height":"14","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"5.5","cy":"9","r":"1","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"9","cy":"12.5","r":"1","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"9","cy":"9","r":"1","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"9","cy":"5.5","r":"1","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"12.5","cy":"9","r":"1","stroke-width":"0","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
