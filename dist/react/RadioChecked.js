import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M9.00009 17C13.4184 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4184 1 9.00009 1C4.58181 1 1.00009 4.58172 1.00009 9C1.00009 13.4183 4.58181 17 9.00009 17Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M9.00009 13C11.2092 13 13.0001 11.2091 13.0001 9C13.0001 6.79086 11.2092 5 9.00009 5C6.79095 5 5.00009 6.79086 5.00009 9C5.00009 11.2091 6.79095 13 9.00009 13Z","fill":"currentColor"}]];

export const RadioChecked = (props) => React.createElement(Icon, { iconNode, ...props });
export default RadioChecked;
