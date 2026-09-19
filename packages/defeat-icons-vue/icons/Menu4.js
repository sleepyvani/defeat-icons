import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"m15.75,9.75H2.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h13.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m15.75,5.5H2.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h13.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m15.75,14H2.25c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h13.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];

export const Menu4 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Menu4.props = ['size', 'width', 'height'];
export default Menu4;
