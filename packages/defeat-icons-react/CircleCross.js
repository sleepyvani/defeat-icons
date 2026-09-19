import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["circle",{"cx":"9","cy":"9","r":"8","fill":"currentColor","opacity":".4","strokeWidth":"0","data-color":"color-2"}],["path",{"d":"m15.4447,8.1948c-2.9401-.3657-5.2737-2.6995-5.6394-5.6396-.2645-.0327-.532-.0552-.8053-.0552s-.5408.0225-.8053.0552c-.3657,2.9402-2.6993,5.2739-5.6394,5.6396-.0329.2644-.0553.532-.0553.8052s.0224.5408.0553.8052c2.9401.3657,5.2737,2.6995,5.6394,5.6396.2645.0327.532.0552.8053.0552s.5408-.0225.8053-.0552c.3657-2.9402,2.6993-5.2739,5.6394-5.6396.0329-.2644.0553-.532.0553-.8052s-.0224-.5408-.0553-.8052Z","strokeWidth":"0","fill":"currentColor"}]];

export const CircleCross = (props) => React.createElement(Icon, { iconNode, ...props });
export default CircleCross;
