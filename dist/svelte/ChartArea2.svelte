<script>
  import Icon from './Icon.svelte';
  const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M14.9942 3.26184C15.8176 2.63617 17 3.22451 17 4.257V12.25C17 13.7692 15.7692 15 14.25 15H3.75C2.23079 15 1 13.7692 1 12.25V9.457C1 9.12405 1.13264 8.80819 1.36284 8.57551L4.17467 5.76367C4.60013 5.33821 5.26976 5.27599 5.7669 5.61797L8.97761 7.82533L14.9942 3.26184Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
