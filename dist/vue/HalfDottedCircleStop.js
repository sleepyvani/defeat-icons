import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"m9,17c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75c3.584,0,6.5-2.916,6.5-6.5s-2.916-6.5-6.5-6.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75c4.4111,0,8,3.5889,8,8s-3.5889,8-8,8Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"3.873","cy":"14.127","r":".75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"1.75","cy":"9","r":".75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"3.873","cy":"3.873","r":".75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"6.226","cy":"15.698","r":".75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"2.302","cy":"11.774","r":".75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"2.302","cy":"6.226","r":".75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"6.226","cy":"2.302","r":".75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["rect",{"x":"5.5","y":"5.5","width":"7","height":"7","rx":"1.75","ry":"1.75","stroke-width":"0","fill":"currentColor"}]];

export const HalfDottedCircleStop = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
HalfDottedCircleStop.props = ['size', 'width', 'height'];
export default HalfDottedCircleStop;
