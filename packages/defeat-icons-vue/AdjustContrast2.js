import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"M3.34315 14.6568C6.46729 17.781 11.5326 17.7811 14.6569 14.6568C17.7811 11.5326 17.781 6.46728 14.6569 3.34313C11.5327 0.218989 6.46737 0.218912 3.34315 3.34313C0.218924 6.46736 0.219002 11.5327 3.34315 14.6568Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M14.6569 14.6568C11.5326 17.7811 6.4673 17.781 3.34315 14.6568L14.6569 3.34314C17.781 6.46728 17.7811 11.5326 14.6569 14.6568Z","fill":"currentColor"}]];

export const AdjustContrast2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
AdjustContrast2.props = ['size', 'width', 'height'];
export default AdjustContrast2;
