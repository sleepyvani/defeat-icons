import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M9 16.5C6.0186 16.5 3 15.5552 3 13.75C3 10.1396 15 10.1396 15 13.75C15 15.5552 11.9814 16.5 9 16.5Z","fill":"currentColor","data-color":"color-2"}],["path",{"opacity":"0.2","d":"M14.25 3.5H3.75C3.3359 3.5 3 3.8359 3 4.25V13.75C3 10.1396 15 10.1396 15 13.75V4.25C15 3.8359 14.6641 3.5 14.25 3.5Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M9 7.00001C6.0186 7.00001 3 6.05521 3 4.25001C3 0.639606 15 0.639606 15 4.25001C15 6.05521 11.9814 7.00001 9 7.00001Z","fill":"currentColor"}]];

export const Cylinder = (props) => React.createElement(Icon, { iconNode, ...props });
export default Cylinder;
