<script>
  import Icon from '../Icon.svelte';
  const iconNode = [["path",{"opacity":"0.4","d":"M9 1C11.2056 1 13 4.5889 13 9C13 13.4111 11.2056 17 9 17C13.4111 17 17 13.4111 17 9C17 4.5889 13.4111 1 9 1Z","fill":"currentColor","data-color":"color-2"}],["path",{"opacity":"0.2","d":"M13 9C13 4.5889 11.2056 1 9 1C4.5889 1 1 4.5889 1 9C1 13.4111 4.5889 17 9 17C11.2056 17 13 13.4111 13 9Z","fill":"currentColor","data-color":"color-2"}],["path",{"opacity":"0.4","d":"M17 9C17 11.2056 13.4111 13 9 13C4.5889 13 1 11.2056 1 9C1 13.4111 4.5889 17 9 17C13.4111 17 17 13.4111 17 9Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M12.5735 12.5735C11.9158 15.1936 10.5629 17 9 17C13.4111 17 17 13.4111 17 9C17 10.563 15.1935 11.9158 12.5735 12.5735Z","fill":"currentColor"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
