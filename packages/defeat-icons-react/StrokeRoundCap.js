import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 3.75C1 3.33579 1.33579 3 1.75 3H11C14.3131 3 17 5.68569 17 9C17 12.3143 14.3131 15 11 15H1.75C1.33579 15 1 14.6642 1 14.25V3.75Z","fill":"currentColor","fillOpacity":"0.4","data-color":"color-2"}],["path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M8.09473 9.75H1V8.25H8.09473C8.42794 6.95788 9.60166 6 11 6C12.6579 6 14 7.34644 14 9C14 10.6536 12.6579 12 11 12C9.60166 12 8.42794 11.0421 8.09473 9.75Z","fill":"currentColor"}]];

export const StrokeRoundCap = (props) => React.createElement(Icon, { iconNode, ...props });
export default StrokeRoundCap;
