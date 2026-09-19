<script>
  import Icon from './Icon.svelte';
  const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8.75 3.5C5.85049 3.5 3.5 5.85024 3.5 8.75V15.25C3.5 15.6642 3.16421 16 2.75 16C2.33579 16 2 15.6642 2 15.25V8.75C2 5.02176 5.02211 2 8.75 2H15.25C15.6642 2 16 2.33579 16 2.75C16 3.16421 15.6642 3.5 15.25 3.5H8.75Z","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
