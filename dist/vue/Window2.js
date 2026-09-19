import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"M17 7V13.25C17 14.7631 15.7699 16 14.25 16H3.75C2.23006 16 1 14.7631 1 13.25V7H17Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M14.2501 2H3.75006C2.23346 2 1.00006 3.2334 1.00006 4.75V7H17.0001V4.75C17.0001 3.2334 15.7667 2 14.2501 2ZM3.50006 5.5C2.94776 5.5 2.50006 5.0522 2.50006 4.5C2.50006 3.9478 2.94776 3.5 3.50006 3.5C4.05236 3.5 4.50006 3.9478 4.50006 4.5C4.50006 5.0522 4.05226 5.5 3.50006 5.5ZM6.50006 5.5C5.94776 5.5 5.50006 5.0522 5.50006 4.5C5.50006 3.9478 5.94776 3.5 6.50006 3.5C7.05236 3.5 7.50006 3.9478 7.50006 4.5C7.50006 5.0522 7.05226 5.5 6.50006 5.5Z","fill":"currentColor"}]];

export const Window2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Window2.props = ['size', 'width', 'height'];
export default Window2;
