import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"M11.0001 5C7.68641 5 5.00011 7.6863 5.00011 11C5.00011 14.3137 7.68641 17 11.0001 17C14.3138 17 17.0001 14.3137 17.0001 11C17.0001 7.6863 14.3138 5 11.0001 5Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M5.00011 11C5.00011 7.68629 7.68641 4.99999 11.0001 4.99999C11.6063 4.99999 12.1915 5.08988 12.743 5.25706C11.9963 2.79338 9.70765 0.999993 7.00011 0.999993C3.68641 0.999993 1.00011 3.68629 1.00011 6.99999C1.00011 9.70753 2.79349 11.9962 5.25718 12.7429C5.09 12.1913 5.00011 11.6062 5.00011 11Z","fill":"currentColor"}]];

export const CircleCopy = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
CircleCopy.props = ['size', 'width', 'height'];
export default CircleCopy;
