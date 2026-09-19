import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"m6.75,3.5h-.75v-1.25c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.25h-.75c-.6895,0-1.25.5605-1.25,1.25v6c0,.6895.5605,1.25,1.25,1.25h.75v3.75c0,.4141.3359.75.75.75s.75-.3359.75-.75v-3.75h.75c.6895,0,1.25-.5605,1.25-1.25v-6c0-.6895-.5605-1.25-1.25-1.25Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m14.25,6h-.75v-3.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v3.75h-.75c-.6895,0-1.25.5605-1.25,1.25v6c0,.6895.5605,1.25,1.25,1.25h.75v1.25c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1.25h.75c.6895,0,1.25-.5605,1.25-1.25v-6c0-.6895-.5605-1.25-1.25-1.25Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];

export const ChartCandlestick2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
ChartCandlestick2.props = ['size', 'width', 'height'];
export default ChartCandlestick2;
