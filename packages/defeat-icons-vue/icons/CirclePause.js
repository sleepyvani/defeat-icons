import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["circle",{"cx":"9","cy":"9","r":"8","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m6.75,12.5c-.4141,0-.75-.3359-.75-.75v-5.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v5.5c0,.4141-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m11.25,12.5c-.4141,0-.75-.3359-.75-.75v-5.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v5.5c0,.4141-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}]];

export const CirclePause = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
CirclePause.props = ['size', 'width', 'height'];
export default CirclePause;
