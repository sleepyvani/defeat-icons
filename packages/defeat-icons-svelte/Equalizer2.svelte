<script>
  import Icon from './Icon.svelte';
  const iconNode = [["path",{"d":"m7.5,10H2.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75h5.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m7.5,13.5H2.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75h5.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m15.75,10h-5.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75h5.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m15.75,13.5h-5.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75h5.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m15.75,6.5h-5.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75h5.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m15.75,3h-5.25c-.4141,0-.75.3359-.75.75s.3359.75.75.75h5.25c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","stroke-width":"0","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
