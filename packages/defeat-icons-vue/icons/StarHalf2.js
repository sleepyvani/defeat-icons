import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"M8.99998 1.03419C8.72708 1.03419 8.45407 1.1621 8.32707 1.418L6.26167 5.6035L1.64259 6.2749C1.35939 6.3159 1.12499 6.5137 1.03709 6.7852C0.948189 7.0567 1.02247 7.355 1.22657 7.5542L4.56938 10.8125L3.77937 15.4131C3.73147 15.6943 3.84678 15.979 4.07728 16.147C4.30778 16.314 4.61439 16.3365 4.86729 16.2041L9.00007 14.0322L8.99998 1.03419Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];

export const StarHalf2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
StarHalf2.props = ['size', 'width', 'height'];
export default StarHalf2;
