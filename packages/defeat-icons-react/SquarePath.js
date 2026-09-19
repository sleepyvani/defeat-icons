import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["rect",{"x":"2","y":"2","width":"14","height":"14","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","strokeWidth":"0","data-color":"color-2"}],["path",{"d":"m6.75,12c-.1919,0-.3838-.0732-.5303-.2197-.293-.293-.293-.7676,0-1.0605l4.5-4.5c.293-.293.7676-.293,1.0605,0s.293.7676,0,1.0605l-4.5,4.5c-.1465.1465-.3384.2197-.5303.2197Z","strokeWidth":"0","fill":"currentColor"}]];

export const SquarePath = (props) => React.createElement(Icon, { iconNode, ...props });
export default SquarePath;
