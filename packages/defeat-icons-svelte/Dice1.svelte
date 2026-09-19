<script>
  import Icon from './Icon.svelte';
  const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 4.75C2 3.23128 3.23069 2 4.75 2H13.25C14.7693 2 16 3.23128 16 4.75V13.25C16 14.7687 14.7693 16 13.25 16H4.75C3.23069 16 2 14.7687 2 13.25V4.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M9 10C9.552 10 10 9.5523 10 9C10 8.4477 9.552 8 9 8C8.448 8 8 8.4477 8 9C8 9.5523 8.448 10 9 10Z","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
