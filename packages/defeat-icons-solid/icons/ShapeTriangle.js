import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"M11.0115 3.11997C10.1179 1.57198 7.88218 1.572 6.98851 3.11997L1.5635 12.516C0.670059 14.0636 1.78628 16 3.57502 16H14.425C16.2138 16 17.3298 14.0648 16.4367 12.5163L11.0115 3.11997Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];

export const ShapeTriangle = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default ShapeTriangle;
