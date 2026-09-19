import React from 'react';
import { Icon } from '../Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M9 12.5C13.4183 12.5 17 10.933 17 9C17 7.067 13.4183 5.5 9 5.5C4.58172 5.5 1 7.067 1 9C1 10.933 4.58172 12.5 9 12.5Z","fill":"currentColor","data-color":"color-2"}],["path",{"opacity":"0.2","d":"M9 5.5C13.4183 5.5 17 7.0669 17 9C17 4.5889 13.4111 1 9 1C4.5889 1 1 4.5889 1 9C1 7.0669 4.5817 5.5 9 5.5Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M9 12C3.2084 12 1 9 1 9C1 13.4111 4.5889 17 9 17C13.4111 17 17 13.4111 17 9C17 9 14.7917 12 9 12Z","fill":"currentColor"}]];

export const Sphere = (props) => React.createElement(Icon, { iconNode, ...props });
export default Sphere;
