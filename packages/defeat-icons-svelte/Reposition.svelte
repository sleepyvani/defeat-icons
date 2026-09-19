<script>
  import Icon from './Icon.svelte';
  const iconNode = [["circle",{"cx":"5","cy":"5","r":"3","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"5","cy":"13","r":"3","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m11.0303,6.7803l1.9697-1.9697,1.9697,1.9697c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-2.5-2.5c-.293-.293-.7676-.293-1.0605,0l-2.5,2.5c-.293.293-.293.7676,0,1.0605s.7676.293,1.0605,0Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m14.9697,11.2197l-1.9697,1.9697-1.9697-1.9697c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l2.5,2.5c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197l2.5-2.5c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0Z","stroke-width":"0","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
