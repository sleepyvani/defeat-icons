<script>
  import Icon from './Icon.svelte';
  const iconNode = [["path",{"opacity":"0.4","d":"M4.25 2C2.7334 2 1.5 3.23 1.5 4.75V13.25C1.5 14.77 2.7334 16 4.25 16H6.5V2H4.25Z","fill":"currentColor","data-color":"color-2"}],["path",{"opacity":"0.4","d":"M13.75 2H11.5V16H13.75C15.2666 16 16.5 14.77 16.5 13.25V4.75C16.5 3.23 15.2666 2 13.75 2Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M11.5 2H6.5V16H11.5V2Z","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
