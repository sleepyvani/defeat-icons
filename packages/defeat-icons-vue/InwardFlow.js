import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["circle",{"cx":"9","cy":"9","r":"3","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m11.25,1c-.4141,0-.75.3359-.75.75,0,.8271-.6729,1.5-1.5,1.5s-1.5-.6729-1.5-1.5c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75c0,1.6543,1.3457,3,3,3s3-1.3457,3-3c0-.4141-.3359-.75-.75-.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m16.25,10.5c-.8271,0-1.5-.6729-1.5-1.5s.6729-1.5,1.5-1.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75c-1.6543,0-3,1.3457-3,3s1.3457,3,3,3c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m9,13.25c-1.6543,0-3,1.3457-3,3,0,.4141.3359.75.75.75s.75-.3359.75-.75c0-.8271.6729-1.5,1.5-1.5s1.5.6729,1.5,1.5c0,.4141.3359.75.75.75s.75-.3359.75-.75c0-1.6543-1.3457-3-3-3Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m1.75,6c-.4141,0-.75.3359-.75.75s.3359.75.75.75c.8271,0,1.5.6729,1.5,1.5s-.6729,1.5-1.5,1.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75c1.6543,0,3-1.3457,3-3s-1.3457-3-3-3Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];

export const InwardFlow = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
InwardFlow.props = ['size', 'width', 'height'];
export default InwardFlow;
