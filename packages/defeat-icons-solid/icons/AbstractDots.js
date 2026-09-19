import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["circle",{"cx":"4.5","cy":"4.5","r":"2","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"9","cy":"9","r":"2","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"13.5","cy":"4.5","r":"2","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"13.5","cy":"13.5","r":"2","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"4.5","cy":"13.5","r":"2","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"9","cy":"2","r":"1","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"2","cy":"9","r":"1","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"9","cy":"16","r":"1","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"16","cy":"9","r":"1","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];

export const AbstractDots = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default AbstractDots;
