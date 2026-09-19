<script>
  import Icon from './Icon.svelte';
  const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.5869 3.02075C14.6555 2.42952 16 3.18464 16 4.43V13.57C16 14.8171 14.6549 15.5701 13.5869 14.9793L5.33366 10.4091C4.2246 9.79402 4.22217 8.20585 5.33366 7.59088L13.5869 3.02075Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V15.25C3.5 15.6642 3.16421 16 2.75 16C2.33579 16 2 15.6642 2 15.25V2.75C2 2.33579 2.33579 2 2.75 2Z","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
