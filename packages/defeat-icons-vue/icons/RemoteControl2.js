import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["rect",{"x":"4","y":"1","width":"10","height":"16","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"9","cy":"5.5","r":"2","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"7.5","cy":"10","r":"1","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"10.5","cy":"10","r":"1","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"7.5","cy":"13","r":"1","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"10.5","cy":"13","r":"1","stroke-width":"0","fill":"currentColor"}]];

export const RemoteControl2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
RemoteControl2.props = ['size', 'width', 'height'];
export default RemoteControl2;
