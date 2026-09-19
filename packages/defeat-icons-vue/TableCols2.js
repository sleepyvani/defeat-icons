import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"M4.75012 2C3.23352 2 2.00012 3.2334 2.00012 4.75V13.25C2.00012 14.7666 3.23352 16 4.75012 16H9.00012V2H4.75012Z","fill":"currentColor"}],["path",{"opacity":"0.4","d":"M13.2501 2C14.7667 2 16.0001 3.2334 16.0001 4.75V9V13.25C16.0001 14.7666 14.7667 16 13.2501 16H9.00012V9V2H13.2501Z","fill":"currentColor","data-color":"color-2"}]];

export const TableCols2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
TableCols2.props = ['size', 'width', 'height'];
export default TableCols2;
