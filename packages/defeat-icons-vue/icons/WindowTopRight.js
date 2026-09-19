import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M3.75012 2.5H14.2501C15.7667 2.5 17.0001 3.7334 17.0001 5.25V12.75C17.0001 14.2666 15.7667 15.5 14.2501 15.5H3.75012C2.23352 15.5 1.00012 14.2666 1.00012 12.75V5.25C1.00012 3.7334 2.23352 2.5 3.75012 2.5Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M14.2501 4.5H11.7501C11.3359 4.5 11.0001 4.83579 11.0001 5.25V7.75C11.0001 8.16421 11.3359 8.5 11.7501 8.5H14.2501C14.6643 8.5 15.0001 8.16421 15.0001 7.75V5.25C15.0001 4.83579 14.6643 4.5 14.2501 4.5Z","fill":"currentColor"}]];

export const WindowTopRight = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
WindowTopRight.props = ['size', 'width', 'height'];
export default WindowTopRight;
