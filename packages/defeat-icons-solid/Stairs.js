import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"m15.25,2h-4.5c-.4141,0-.75.3359-.75.75v3.25h-3.25c-.4141,0-.75.3359-.75.75v3.25h-3.25c-.4141,0-.75.3359-.75.75v4.5c0,.4141.3359.75.75.75h12.5c.4141,0,.75-.3359.75-.75V2.75c0-.4141-.3359-.75-.75-.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];

export const Stairs = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default Stairs;
