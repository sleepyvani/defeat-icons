import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M7.00012 2H3.75012C2.23352 2 1.00012 3.2334 1.00012 4.75V13.25C1.00012 14.7666 2.23352 16 3.75012 16H7.00012V2Z","fill":"currentColor","data-color":"color-2"}],["path",{"opacity":"0.2","d":"M14.2501 2H7.00012V16H14.2501C15.7667 16 17.0001 14.7666 17.0001 13.25V4.75C17.0001 3.2334 15.7667 2 14.2501 2Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M17.0001 8V4.75C17.0001 3.2334 15.7667 2 14.2501 2H3.75012C2.23352 2 1.00012 3.2334 1.00012 4.75V8H17.0001Z","fill":"currentColor"}]];

export const RectLayoutGrid3 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
RectLayoutGrid3.props = ['size', 'width', 'height'];
export default RectLayoutGrid3;
