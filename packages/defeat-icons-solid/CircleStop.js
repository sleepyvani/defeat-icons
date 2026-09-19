import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["circle",{"cx":"9","cy":"9","r":"8","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["rect",{"x":"5.5","y":"5.5","width":"7","height":"7","rx":"1.75","ry":"1.75","stroke-width":"0","fill":"currentColor"}]];

export const CircleStop = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default CircleStop;
