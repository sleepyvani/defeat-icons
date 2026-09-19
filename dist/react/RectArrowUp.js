import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["rect",{"x":"1","y":"2.5","width":"16","height":"13","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","strokeWidth":"0","data-color":"color-2"}],["path",{"d":"m9.5303,5.7197c-.293-.293-.7676-.293-1.0605,0l-2.5,2.5c-.293.293-.293.7676,0,1.0605s.7676.293,1.0605,0l1.2197-1.2197v3.9395c0,.4141.3359.75.75.75s.75-.3359.75-.75v-3.9395l1.2197,1.2197c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-2.5-2.5Z","strokeWidth":"0","fill":"currentColor"}]];

export const RectArrowUp = (props) => React.createElement(Icon, { iconNode, ...props });
export default RectArrowUp;
