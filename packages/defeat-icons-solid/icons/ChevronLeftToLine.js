import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"m14.25,16c-.1919,0-.3838-.0732-.5303-.2197l-6.25-6.25c-.293-.293-.293-.7676,0-1.0605l6.25-6.25c.293-.293.7676-.293,1.0605,0s.293.7676,0,1.0605l-5.7197,5.7197,5.7197,5.7197c.293.293.293.7676,0,1.0605-.1465.1465-.3384.2197-.5303.2197Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m3.75,16c-.4141,0-.75-.3359-.75-.75V2.75c0-.4141.3359-.75.75-.75s.75.3359.75.75v12.5c0,.4141-.3359.75-.75.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];

export const ChevronLeftToLine = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default ChevronLeftToLine;
