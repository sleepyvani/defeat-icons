import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"m10.25,9.75H2.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h7.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m13.25,14.5h-7.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h7.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m15.25,5h-7.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h7.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}]];

export const GanttChart = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
GanttChart.props = ['size', 'width', 'height'];
export default GanttChart;
