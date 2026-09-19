import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["rect",{"x":"1","y":"3","width":"16","height":"12","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","strokeWidth":"0","data-color":"color-2"}]];

export const ShapeRectangle = (props) => React.createElement(Icon, { iconNode, ...props });
export default ShapeRectangle;
