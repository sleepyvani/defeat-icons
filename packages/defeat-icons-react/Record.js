import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M1 9C1 4.58179 4.58179 1 9 1C13.4182 1 17 4.58179 17 9C17 13.4182 13.4182 17 9 17C4.58179 17 1 13.4182 1 9Z","fill":"currentColor","fillOpacity":"0.4","data-color":"color-2"}],["path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M4 9C4 6.23879 6.23879 4 9 4C11.7612 4 14 6.23879 14 9C14 11.7612 11.7612 14 9 14C6.23879 14 4 11.7612 4 9Z","fill":"currentColor"}]];

export const Record = (props) => React.createElement(Icon, { iconNode, ...props });
export default Record;
