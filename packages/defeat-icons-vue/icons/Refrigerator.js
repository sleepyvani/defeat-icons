import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["rect",{"x":"2.5","y":"1","width":"13","height":"16","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m5.75,5.5c-.4141,0-.75-.3359-.75-.75v-.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v.5c0,.4141-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m5.75,13.5c-.4141,0-.75-.3359-.75-.75v-1c0-.4141.3359-.75.75-.75s.75.3359.75.75v1c0,.4141-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}],["rect",{"x":"2.5","y":"7.5","width":"13","height":"1.5","stroke-width":"0","fill":"currentColor"}]];

export const Refrigerator = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Refrigerator.props = ['size', 'width', 'height'];
export default Refrigerator;
