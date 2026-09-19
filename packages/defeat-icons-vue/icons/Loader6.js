import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"m9,17c-4.4111,0-8-3.5889-8-8S4.5889,1,9,1s8,3.5889,8,8-3.5889,8-8,8Zm0-14.5c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m16.25,9.75c-.4141,0-.75-.3359-.75-.75,0-3.584-2.916-6.5-6.5-6.5-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75c4.4111,0,8,3.5889,8,8,0,.4141-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}]];

export const Loader6 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Loader6.props = ['size', 'width', 'height'];
export default Loader6;
