import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["rect",{"x":"1","y":"3","width":"16","height":"12","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];

export const ShapeRectangle = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default ShapeRectangle;
