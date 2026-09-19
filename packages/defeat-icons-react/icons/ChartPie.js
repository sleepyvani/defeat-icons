import React from 'react';
import { Icon } from '../Icon.js';

const iconNode = [["path",{"d":"M17 9H9.75C9.33579 9 9 8.66421 9 8.25V1C13.4183 1 17 4.58172 17 9Z","fill":"currentColor"}],["path",{"d":"M9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C13.4183 17 17 13.4183 17 9H9.75C9.33579 9 9 8.66421 9 8.25V1Z","fill":"currentColor","fillOpacity":"0.4","data-color":"color-2"}]];

export const ChartPie = (props) => React.createElement(Icon, { iconNode, ...props });
export default ChartPie;
