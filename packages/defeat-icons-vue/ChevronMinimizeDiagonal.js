import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M7.75 9.5H3.25C2.836 9.5 2.5 9.836 2.5 10.25C2.5 10.664 2.836 11 3.25 11H7V14.75C7 15.164 7.336 15.5 7.75 15.5C8.164 15.5 8.5 15.164 8.5 14.75V10.25C8.5 9.836 8.164 9.5 7.75 9.5Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M14.75 7H11V3.25C11 2.836 10.664 2.5 10.25 2.5C9.836 2.5 9.5 2.836 9.5 3.25V7.75C9.5 8.164 9.836 8.5 10.25 8.5H14.75C15.164 8.5 15.5 8.164 15.5 7.75C15.5 7.336 15.164 7 14.75 7Z","fill":"currentColor"}]];

export const ChevronMinimizeDiagonal = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
ChevronMinimizeDiagonal.props = ['size', 'width', 'height'];
export default ChevronMinimizeDiagonal;
