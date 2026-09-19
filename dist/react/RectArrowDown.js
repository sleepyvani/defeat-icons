import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["rect",{"x":"1","y":"2.5","width":"16","height":"13","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","strokeWidth":"0","data-color":"color-2"}],["path",{"d":"m12.0303,8.7197c-.293-.293-.7676-.293-1.0605,0l-1.2197,1.2197v-3.9395c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v3.9395l-1.2197-1.2197c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l2.5,2.5c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l2.5-2.5c.293-.293.293-.7676,0-1.0605Z","strokeWidth":"0","fill":"currentColor"}]];

export const RectArrowDown = (props) => React.createElement(Icon, { iconNode, ...props });
export default RectArrowDown;
