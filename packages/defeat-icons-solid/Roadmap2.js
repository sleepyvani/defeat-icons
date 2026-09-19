import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["rect",{"x":"2","y":"2","width":"14","height":"14","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m11.25,9.75h-4.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h4.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m15.25,12.5h-4.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h4.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m7.25,7H2.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h4.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}]];

export const Roadmap2 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default Roadmap2;
