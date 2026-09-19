import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"m1.75,12c-.0771,0-.1553-.0117-.2324-.0371-.3936-.1284-.6094-.5518-.4805-.9453,1.0752-3.3003,4.0752-5.5176,7.4629-5.5176,3.1709,0,6,2.0005,7.207,5.0962.1504.3862-.041.8208-.4268.9712-.3857.1523-.8203-.0396-.9717-.4263-.9951-2.5542-3.2207-4.1411-5.8086-4.1411-2.7373,0-5.1631,1.8013-6.0371,4.4824-.1035.3164-.3965.5176-.7129.5176Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m15.75,12h-4.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h3.75v-3.75c0-.4141.3359-.75.75-.75s.75.3359.75.75v4.5c0,.4141-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}]];

export const Redo = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Redo.props = ['size', 'width', 'height'];
export default Redo;
