<script>
  import Icon from '../Icon.svelte';
  const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 9C1 4.58179 4.58168 1 9 1C13.4183 1 17 4.58179 17 9C17 13.4182 13.4183 17 9 17C4.58168 17 1 13.4182 1 9Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M9 4V14C11.761 14 14 11.761 14 9C14 6.239 11.761 4 9 4Z","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
