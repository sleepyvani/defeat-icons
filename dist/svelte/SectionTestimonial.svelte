<script>
  import Icon from './Icon.svelte';
  const iconNode = [["path",{"d":"m9,7.5c-1.6543,0-3-1.3457-3-3s1.3457-3,3-3,3,1.3457,3,3-1.3457,3-3,3Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m16.25,10.5H1.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h14.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m12.25,16.5h-6.5c-.9648,0-1.75-.7852-1.75-1.75v-1c0-.9648.7852-1.75,1.75-1.75h6.5c.9648,0,1.75.7852,1.75,1.75v1c0,.9648-.7852,1.75-1.75,1.75Z","stroke-width":"0","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
