<script>
  import Icon from '../Icon.svelte';
  const iconNode = [["rect",{"x":"1","y":"3","width":"16","height":"12","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
