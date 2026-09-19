import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M9.00012 16H13.2501C14.7667 16 16.0001 14.7666 16.0001 13.25V9H9.00012V16Z","fill":"currentColor","data-color":"color-2"}],["path",{"opacity":"0.2","d":"M13.2501 2H9.00012V9H16.0001V4.75C16.0001 3.2334 14.7667 2 13.2501 2Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M4.75012 2C3.23352 2 2.00012 3.2334 2.00012 4.75V13.25C2.00012 14.7666 3.23352 16 4.75012 16H9.00012V2H4.75012Z","fill":"currentColor"}]];

export const SquareLayoutGrid2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
SquareLayoutGrid2.props = ['size', 'width', 'height'];
export default SquareLayoutGrid2;
