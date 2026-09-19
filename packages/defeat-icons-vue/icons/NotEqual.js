import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 6.75C2 6.33579 2.33579 6 2.75 6H15.25C15.6642 6 16 6.33579 16 6.75C16 7.16421 15.6642 7.5 15.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 11.25C2 10.8358 2.33579 10.5 2.75 10.5H15.25C15.6642 10.5 16 10.8358 16 11.25C16 11.6642 15.6642 12 15.25 12H2.75C2.33579 12 2 11.6642 2 11.25Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z","fill":"currentColor"}]];

export const NotEqual = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
NotEqual.props = ['size', 'width', 'height'];
export default NotEqual;
