<script>
  import Icon from './Icon.svelte';
  const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2.5 2C2.08579 2 1.75 2.33579 1.75 2.75C1.75 3.16421 2.08579 3.5 2.5 3.5H6.99995L7 15.25C7 15.6642 7.33579 16 7.75 16C8.16421 16 8.5 15.6642 8.5 15.25L8.49995 3.5H13C13.4142 3.5 13.75 3.16421 13.75 2.75C13.75 2.33579 13.4142 2 13 2H2.5Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M10.5 9.75C10.5 9.33579 10.8358 9 11.25 9H16.25C16.6642 9 17 9.33579 17 9.75C17 10.1642 16.6642 10.5 16.25 10.5H11.25C10.8358 10.5 10.5 10.1642 10.5 9.75Z","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
