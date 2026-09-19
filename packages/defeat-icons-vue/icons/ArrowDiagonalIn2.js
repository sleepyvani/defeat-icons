import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M13.25 2H4.75C3.233 2 2 3.233 2 4.75V13.25C2 14.767 3.233 16 4.75 16H8.5V10.75C8.5 9.509 9.51 8.5 10.75 8.5H16V4.75C16 3.233 14.767 2 13.25 2Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M16.78 15.72L12.56 11.5H15.249C15.663 11.5 15.999 11.164 15.999 10.75C15.999 10.336 15.663 10 15.249 10H10.749C10.335 10 9.99899 10.336 9.99899 10.75V15.25C9.99899 15.664 10.335 16 10.749 16C11.163 16 11.499 15.664 11.499 15.25V12.561L15.719 16.781C15.865 16.927 16.057 17.001 16.249 17.001C16.441 17.001 16.633 16.928 16.779 16.781C17.072 16.488 17.073 16.013 16.78 15.72Z","fill":"currentColor"}]];

export const ArrowDiagonalIn2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
ArrowDiagonalIn2.props = ['size', 'width', 'height'];
export default ArrowDiagonalIn2;
