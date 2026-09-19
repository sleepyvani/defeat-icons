import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"M2 12.8936V13.25C2 14.7692 3.23079 16 4.75 16H13.25C14.7692 16 16 14.7692 16 13.25V7.22763L11.9673 11.2603C11.4794 11.7482 10.6876 11.7482 10.1997 11.2603L6.91649 7.97714L2 12.8936Z","fill":"currentColor"}],["path",{"d":"M2 4.75C2 3.23079 3.23079 2 4.75 2H13.25C14.7692 2 16 3.23079 16 4.75V5.10632L11.0835 10.0228L7.80032 6.73966C7.31243 6.25177 6.52055 6.25177 6.03266 6.73966L2 10.7723V4.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];

export const SquareChartLine2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
SquareChartLine2.props = ['size', 'width', 'height'];
export default SquareChartLine2;
