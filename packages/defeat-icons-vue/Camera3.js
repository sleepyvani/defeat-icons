import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 4.75C2 3.23119 3.23119 2 4.75 2H13.25C14.7688 2 16 3.23119 16 4.75V13.25C16 14.7688 14.7688 16 13.25 16H4.75C3.23119 16 2 14.7688 2 13.25V4.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5.5 9C5.5 7.06699 7.06699 5.5 9 5.5C10.933 5.5 12.5 7.06699 12.5 9C12.5 10.933 10.933 12.5 9 12.5C7.06699 12.5 5.5 10.933 5.5 9Z","fill":"currentColor"}],["path",{"d":"M5.25 6C5.6642 6 6 5.6642 6 5.25C6 4.8358 5.6642 4.5 5.25 4.5C4.8358 4.5 4.5 4.8358 4.5 5.25C4.5 5.6642 4.8358 6 5.25 6Z","fill":"currentColor"}]];

export const Camera3 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Camera3.props = ['size', 'width', 'height'];
export default Camera3;
