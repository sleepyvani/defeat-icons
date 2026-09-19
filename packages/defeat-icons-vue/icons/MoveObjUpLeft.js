import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M14.25 9H10.75C9.7835 9 9 9.7835 9 10.75V14.25C9 15.2165 9.7835 16 10.75 16H14.25C15.2165 16 16 15.2165 16 14.25V10.75C16 9.7835 15.2165 9 14.25 9Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M4.561 3.5H7.261C7.675 3.5 8.011 3.164 8.011 2.75C8.011 2.336 7.675 2 7.261 2H2.75C2.336 2 2 2.336 2 2.75V7.26001C2 7.67401 2.336 8.01001 2.75 8.01001C3.164 8.01001 3.5 7.67401 3.5 7.26001V4.56L7.22 8.28003C7.366 8.42603 7.558 8.5 7.75 8.5C7.942 8.5 8.134 8.42703 8.28 8.28003C8.573 7.98703 8.573 7.51199 8.28 7.21899L4.56 3.49902L4.561 3.5Z","fill":"currentColor"}]];

export const MoveObjUpLeft = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
MoveObjUpLeft.props = ['size', 'width', 'height'];
export default MoveObjUpLeft;
