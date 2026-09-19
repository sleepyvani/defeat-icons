<script>
  import Icon from '../Icon.svelte';
  const iconNode = [["path",{"opacity":"0.4","d":"M10.25 1.5H4.25C2.73122 1.5 1.5 2.73122 1.5 4.25V10.25C1.5 11.7688 2.73122 13 4.25 13H10.25C11.7688 13 13 11.7688 13 10.25V4.25C13 2.73122 11.7688 1.5 10.25 1.5Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M13.75 5H13V10.25C13 11.7666 11.7666 13 10.25 13H5V13.75C5 15.2666 6.2334 16.5 7.75 16.5H13.75C15.2666 16.5 16.5 15.2666 16.5 13.75V7.75C16.5 6.2334 15.2666 5 13.75 5Z","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
