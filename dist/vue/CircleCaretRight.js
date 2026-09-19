import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M7.5 11.022V6.97804C7.5 6.37704 8.172 6.02 8.67 6.357L11.657 8.37904C12.096 8.67604 12.096 9.32398 11.657 9.62098L8.67 11.643C8.172 11.98 7.5 11.623 7.5 11.022Z","fill":"currentColor"}]];

export const CircleCaretRight = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
CircleCaretRight.props = ['size', 'width', 'height'];
export default CircleCaretRight;
