import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"M9 17C13.4182 17 17 13.4183 17 9C17 4.58168 13.4182 1 9 1C4.58179 1 1 4.58168 1 9C1 13.4183 4.58179 17 9 17Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M17 9C17 13.4183 13.4182 17 9 17V1C13.4182 1 17 4.58168 17 9Z","fill":"currentColor"}]];

export const AdjustContrast = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
AdjustContrast.props = ['size', 'width', 'height'];
export default AdjustContrast;
