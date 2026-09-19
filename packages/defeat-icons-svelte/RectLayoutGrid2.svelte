<script>
  import Icon from './Icon.svelte';
  const iconNode = [["path",{"d":"M4.25 16L13.75 16C15.2688 16 16.5 14.7688 16.5 13.25L16.5 4.75C16.5 3.2312 15.2688 2 13.75 2L4.25 2C2.7312 2 1.5 3.2312 1.5 4.75L1.5 13.25C1.5 14.7688 2.7312 16 4.25 16Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M11.9999 16L10.4999 16L10.4999 12.5L1.49999 12.5L1.49999 11L10.4999 11L10.4999 7L1.49999 7L1.49999 5.5L10.4999 5.5L10.4999 2L11.9999 2L11.9999 16Z","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
