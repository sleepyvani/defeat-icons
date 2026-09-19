import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M14.75 9.5H10.25C9.836 9.5 9.5 9.836 9.5 10.25V14.75C9.5 15.164 9.836 15.5 10.25 15.5C10.664 15.5 11 15.164 11 14.75V11H14.75C15.164 11 15.5 10.664 15.5 10.25C15.5 9.836 15.164 9.5 14.75 9.5Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M7.75 2.5C7.336 2.5 7 2.836 7 3.25V7H3.25C2.836 7 2.5 7.336 2.5 7.75C2.5 8.164 2.836 8.5 3.25 8.5H7.75C8.164 8.5 8.5 8.164 8.5 7.75V3.25C8.5 2.836 8.164 2.5 7.75 2.5Z","fill":"currentColor"}]];

export const ChevronMinimizeDiagonal2 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default ChevronMinimizeDiagonal2;
