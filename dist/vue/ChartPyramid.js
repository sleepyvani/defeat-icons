import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"M6.98839 2.61997C7.88206 1.07198 10.1177 1.07198 11.0114 2.61997L13.2516 6.5H4.74817L6.98839 2.61997Z","fill":"currentColor","fill-opacity":"0.2","data-color":"color-2"}],["path",{"d":"M15.8498 11H2.15001L1.56341 12.016C0.669967 13.5636 1.78619 15.5 3.57492 15.5H14.4249C16.2137 15.5 17.3297 13.5648 16.4366 12.0163L15.8498 11Z","fill":"currentColor"}],["path",{"d":"M4.74819 6.5H13.2517L15.8498 11H2.15002L4.74819 6.5Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];

export const ChartPyramid = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
ChartPyramid.props = ['size', 'width', 'height'];
export default ChartPyramid;
