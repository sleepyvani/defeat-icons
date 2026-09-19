<script>
  import Icon from './Icon.svelte';
  const iconNode = [["path",{"d":"m15.75,9.75H2.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h13.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m15.75,5.5H2.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h13.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m15.75,14H2.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h13.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
