import { h } from 'vue';

export const Icon = (props, { slots, attrs }) => {
  const size = props.size || attrs.size || 18;
  const width = props.width || attrs.width || size;
  const height = props.height || attrs.height || size;
  const { size: _s, width: _w, height: _h, ...restAttrs } = attrs;
  const children = [
    ...(props.iconNode || []).map(([tag, nodeAttrs]) => h(tag, nodeAttrs)),
    ...(slots.default ? slots.default() : [])
  ];
  return h(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width,
      height,
      viewBox: '0 0 18 18',
      ...restAttrs
    },
    children
  );
};
Icon.props = ['size', 'width', 'height', 'iconNode'];
export default Icon;
