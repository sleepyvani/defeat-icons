import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"m10,7.25c0-.4141-.3359-.75-.75-.75H3.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h5.5c.4141,0,.75-.3359.75-.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m8.0488,10.75c0-.4141-.3359-.75-.75-.75H2.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h4.5488c.4141,0,.75-.3359.75-.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m7.9512,13.5H3.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h4.2012c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m2.75,4.5h5.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75H2.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"13","cy":"11.5","r":"3.5","stroke-width":"0","fill":"currentColor"}]];

export const CoinStack = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
CoinStack.props = ['size', 'width', 'height'];
export default CoinStack;
