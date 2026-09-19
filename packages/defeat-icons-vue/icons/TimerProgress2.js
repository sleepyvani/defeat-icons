import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["circle",{"cx":"3.873","cy":"3.873","r":".75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"2.302","cy":"6.226","r":".75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"6.226","cy":"2.302","r":".75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m9,9.75h-4.2427c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h4.2427c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m9,17c-4.4111,0-8-3.5889-8-8,0-.4141.3359-.75.75-.75s.75.3359.75.75c0,3.584,2.916,6.5,6.5,6.5s6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75c4.4111,0,8,3.5889,8,8s-3.5889,8-8,8Z","stroke-width":"0","fill":"currentColor"}]];

export const TimerProgress2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
TimerProgress2.props = ['size', 'width', 'height'];
export default TimerProgress2;
