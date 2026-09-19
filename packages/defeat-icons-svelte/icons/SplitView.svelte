<script>
  import Icon from '../Icon.svelte';
  const iconNode = [["path",{"d":"m9,2.5h-4.75c-1.5166,0-2.75,1.2334-2.75,2.75v7.5c0,1.5166,1.2334,2.75,2.75,2.75h4.75V2.5Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m9,2.5h4.75c1.5166,0,2.75,1.2334,2.75,2.75v7.5c0,1.5166-1.2334,2.75-2.75,2.75h-4.75V2.5Z","stroke-width":"0","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
