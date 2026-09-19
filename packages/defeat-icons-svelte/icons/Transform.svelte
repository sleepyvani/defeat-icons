<script>
  import Icon from '../Icon.svelte';
  const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5.37313 1.11915C4.23105 0.683467 3 1.52029 3 2.74977V15.2498C3 16.4788 4.23039 17.3163 5.37265 16.8809L13.8763 13.6494C14.5523 13.3882 15 12.741 15 12.0099V5.98988C15 5.26442 14.5482 4.62004 13.8763 4.36046L5.37313 1.11915Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];
</script>

<Icon {...$$props} {iconNode}>
  <slot />
</Icon>
