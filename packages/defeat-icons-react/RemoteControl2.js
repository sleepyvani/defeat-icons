import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["rect",{"x":"4","y":"1","width":"10","height":"16","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","strokeWidth":"0","data-color":"color-2"}],["circle",{"cx":"9","cy":"5.5","r":"2","strokeWidth":"0","fill":"currentColor"}],["circle",{"cx":"7.5","cy":"10","r":"1","strokeWidth":"0","fill":"currentColor"}],["circle",{"cx":"10.5","cy":"10","r":"1","strokeWidth":"0","fill":"currentColor"}],["circle",{"cx":"7.5","cy":"13","r":"1","strokeWidth":"0","fill":"currentColor"}],["circle",{"cx":"10.5","cy":"13","r":"1","strokeWidth":"0","fill":"currentColor"}]];

export const RemoteControl2 = (props) => React.createElement(Icon, { iconNode, ...props });
export default RemoteControl2;
