import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["circle",{"cx":"9","cy":"9","r":"8","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m9,9.75c-.1924,0-.3838-.0732-.5303-.2197l-3-3c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l3,3c.293.293.293.7676,0,1.0605-.1465.1465-.3379.2197-.5303.2197Z","stroke-width":"0","fill":"currentColor"}]];

export const Speedometer2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Speedometer2.props = ['size', 'width', 'height'];
export default Speedometer2;
