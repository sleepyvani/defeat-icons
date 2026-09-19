import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["rect",{"x":"1","y":"3","width":"16","height":"12","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];

export const ShapeRectangle = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
ShapeRectangle.props = ['size', 'width', 'height'];
export default ShapeRectangle;
