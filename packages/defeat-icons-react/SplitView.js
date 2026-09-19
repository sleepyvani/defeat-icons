import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["path",{"d":"m9,2.5h-4.75c-1.5166,0-2.75,1.2334-2.75,2.75v7.5c0,1.5166,1.2334,2.75,2.75,2.75h4.75V2.5Z","fill":"currentColor","opacity":".4","strokeWidth":"0","data-color":"color-2"}],["path",{"d":"m9,2.5h4.75c1.5166,0,2.75,1.2334,2.75,2.75v7.5c0,1.5166-1.2334,2.75-2.75,2.75h-4.75V2.5Z","strokeWidth":"0","fill":"currentColor"}]];

export const SplitView = (props) => React.createElement(Icon, { iconNode, ...props });
export default SplitView;
