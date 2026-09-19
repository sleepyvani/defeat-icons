import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M9 5C9.41421 5 9.75 5.33579 9.75 5.75V12.25C9.75 12.6642 9.41421 13 9 13C8.58579 13 8.25 12.6642 8.25 12.25V5.75C8.25 5.33579 8.58579 5 9 5Z","fill":"currentColor","fillOpacity":"0.4","data-color":"color-2"}],["path",{"d":"M9 6C10.3807 6 11.5 4.88071 11.5 3.5C11.5 2.11929 10.3807 1 9 1C7.61929 1 6.5 2.11929 6.5 3.5C6.5 4.88071 7.61929 6 9 6Z","fill":"currentColor"}],["path",{"d":"M9 17C10.3807 17 11.5 15.8807 11.5 14.5C11.5 13.1193 10.3807 12 9 12C7.61929 12 6.5 13.1193 6.5 14.5C6.5 15.8807 7.61929 17 9 17Z","fill":"currentColor"}]];

export const CodeAction = (props) => React.createElement(Icon, { iconNode, ...props });
export default CodeAction;
