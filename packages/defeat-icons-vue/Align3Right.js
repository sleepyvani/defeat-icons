import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 4.25C2 3.00726 3.00792 2 4.25 2H13.75C14.9921 2 16 3.00726 16 4.25V5.75C16 6.99274 14.9921 8 13.75 8H4.25C3.00792 8 2 6.99274 2 5.75V4.25Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8 12.25C8 11.0073 9.00792 10 10.25 10H13.75C14.9921 10 16 11.0073 16 12.25V13.75C16 14.9927 14.9921 16 13.75 16H10.25C9.00792 16 8 14.9927 8 13.75V12.25Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];

export const Align3Right = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Align3Right.props = ['size', 'width', 'height'];
export default Align3Right;
