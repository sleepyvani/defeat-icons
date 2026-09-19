import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["rect",{"x":"1","y":"2.5","width":"16","height":"13","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m13.7803,8.4697l-2-2c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l.7197.7197h-4.8789l.7197-.7197c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0l-2,2c-.293.293-.293.7676,0,1.0605l2,2c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-.7197-.7197h4.8789l-.7197.7197c-.293.293-.293.7676,0,1.0605.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197l2-2c.293-.293.293-.7676,0-1.0605Z","stroke-width":"0","fill":"currentColor"}]];

export const WindowResizeX = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default WindowResizeX;
