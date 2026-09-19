import { spread, mergeProps, insert, createComponent, Dynamic, template } from 'solid-js/web';
import { splitProps, For } from 'solid-js';

const _tmpl$ = template('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">');

export const Icon = (props) => {
  const [local, rest] = splitProps(props, ['size', 'width', 'height', 'iconNode', 'children']);
  return (() => {
    const el = _tmpl$();
    spread(el, mergeProps({
      width: () => local.width || local.size || 18,
      height: () => local.height || local.size || 18
    }, rest), true, true);
    insert(el, createComponent(For, {
      get each() { return local.iconNode || []; },
      children: ([tag, attrs]) => createComponent(Dynamic, mergeProps({ component: tag }, attrs))
    }));
    if (local.children) {
      insert(el, () => local.children, null);
    }
    return el;
  })();
};
export default Icon;
