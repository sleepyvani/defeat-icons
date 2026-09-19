import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M13.25 2H4.75C3.233 2 2 3.233 2 4.75V13.25C2 14.767 3.233 16 4.75 16H13.25C14.767 16 16 14.767 16 13.25V4.75C16 3.233 14.767 2 13.25 2Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M11 11.0219C11 11.6239 10.328 11.9799 9.82998 11.6429L6.84298 9.62093C6.40398 9.32293 6.40398 8.67599 6.84298 8.37899L9.82998 6.35702C10.328 6.02002 11 6.37699 11 6.97799V11.0219Z","fill":"currentColor"}]];

export const SquareCaretLeft = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
SquareCaretLeft.props = ['size', 'width', 'height'];
export default SquareCaretLeft;
