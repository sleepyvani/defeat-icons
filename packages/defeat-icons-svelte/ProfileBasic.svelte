<script>
  import Icon from './Icon.svelte';
  const iconNode = [["path",{"d":"m14.25,15H3.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h10.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"9","cy":"7.5","r":"6","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
