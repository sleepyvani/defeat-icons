import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M4.75 16H13.25C14.767 16 16 14.767 16 13.25V4.75C16 3.233 14.767 2 13.25 2H9.5V7.25C9.5 8.491 8.49 9.5 7.25 9.5H2V13.25C2 14.767 3.233 16 4.75 16Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M1.21999 2.28L5.43899 6.5H2.74999C2.33599 6.5 1.99999 6.836 1.99999 7.25C1.99999 7.664 2.33599 8 2.74999 8H7.24999C7.66399 8 7.99999 7.664 7.99999 7.25V2.75C7.99999 2.336 7.66399 2 7.24999 2C6.83599 2 6.49999 2.336 6.49999 2.75V5.439L2.27999 1.22C2.13399 1.074 1.94199 1 1.74999 1C1.55799 1 1.36599 1.073 1.21999 1.22C0.926994 1.513 0.926994 1.987 1.21999 2.28Z","fill":"currentColor"}]];

export const ArrowDiagonalIn = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
ArrowDiagonalIn.props = ['size', 'width', 'height'];
export default ArrowDiagonalIn;
