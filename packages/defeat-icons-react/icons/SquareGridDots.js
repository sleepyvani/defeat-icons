import React from 'react';
import { Icon } from '../Icon.js';

const iconNode = [["rect",{"x":"2","y":"2","width":"14","height":"14","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","strokeWidth":"0","data-color":"color-2"}],["circle",{"cx":"5.5","cy":"9","r":"1","strokeWidth":"0","fill":"currentColor"}],["circle",{"cx":"9","cy":"12.5","r":"1","strokeWidth":"0","fill":"currentColor"}],["circle",{"cx":"9","cy":"9","r":"1","strokeWidth":"0","fill":"currentColor"}],["circle",{"cx":"9","cy":"5.5","r":"1","strokeWidth":"0","fill":"currentColor"}],["circle",{"cx":"12.5","cy":"9","r":"1","strokeWidth":"0","fill":"currentColor"}]];

export const SquareGridDots = (props) => React.createElement(Icon, { iconNode, ...props });
export default SquareGridDots;
