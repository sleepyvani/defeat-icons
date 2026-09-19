<script>
  import Icon from '../Icon.svelte';
  const iconNode = [["circle",{"cx":"9","cy":"9","r":"8","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m12.25,12.5h-2.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m5.75,12.5c-.1919,0-.3838-.0732-.5303-.2197-.293-.293-.293-.7676,0-1.0605l1.9697-1.9697-1.9697-1.9697c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l2.5,2.5c.293.293.293.7676,0,1.0605l-2.5,2.5c-.1465.1465-.3384.2197-.5303.2197Z","stroke-width":"0","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
