import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M14.2501 2H3.75012C2.23352 2 1.00012 3.2334 1.00012 4.75V13C1.00012 13.4141 1.33602 13.75 1.75012 13.75H16.2501C16.6642 13.75 17.0001 13.4141 17.0001 13V4.75C17.0001 3.2334 15.7667 2 14.2501 2Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M14.2501 10H3.75012C2.23134 10 1.00012 11.2312 1.00012 12.75V13.25C1.00012 14.7688 2.23134 16 3.75012 16H14.2501C15.7689 16 17.0001 14.7688 17.0001 13.25V12.75C17.0001 11.2312 15.7689 10 14.2501 10Z","fill":"currentColor"}]];

export const LayoutFooter = (props) => React.createElement(Icon, { iconNode, ...props });
export default LayoutFooter;
