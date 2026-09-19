<script>
  import Icon from '../Icon.svelte';
  const iconNode = [["path",{"d":"m15.25,8.25H2.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h12.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"9","cy":"4","r":"2.5","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"9","cy":"14","r":"2.5","stroke-width":"0","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
