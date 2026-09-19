import React from 'react';
import { Icon } from '../Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M14.2501 2H4.25012V16H14.2501C15.7667 16 17.0001 14.7666 17.0001 13.25V4.75C17.0001 3.2334 15.7667 2 14.2501 2Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M4.25011 2H3.75012C2.23134 2 1.00012 3.23122 1.00012 4.75V13.25C1.00012 14.7688 2.23134 16 3.75012 16H4.25011C5.76889 16 7.00011 14.7688 7.00011 13.25V4.75C7.00011 3.23122 5.76889 2 4.25011 2Z","fill":"currentColor"}]];

export const LayoutSidebar = (props) => React.createElement(Icon, { iconNode, ...props });
export default LayoutSidebar;
