import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"M9.404 0.649236C9.17151 0.450906 8.82818 0.450906 8.59485 0.649236C8.42319 0.795067 6.91571 2.11421 6.91571 3.44836C6.91571 4.58 7.84986 5.49999 8.99901 5.49999C10.1482 5.49999 11.0823 4.58 11.0823 3.44836C11.0823 2.11421 9.57567 0.795067 9.404 0.649236Z","fill":"currentColor"}],["path",{"d":"M10.25 7H10V10.25C10 10.664 9.664 11 9.25 11C8.836 11 8.5 10.664 8.5 10.25V7H7.75C6.785 7 6 7.785 6 8.75V15.25C6 15.664 6.336 16 6.75 16H11.25C11.664 16 12 15.664 12 15.25V8.75C12 7.785 11.215 7 10.25 7Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M10 7V10.25C10 10.6642 9.66421 11 9.25 11C8.83579 11 8.5 10.6642 8.5 10.25V7H10Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2.25 15.75C2.25 15.3358 2.58579 15 3 15H15C15.4142 15 15.75 15.3358 15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5H3C2.58579 16.5 2.25 16.1642 2.25 15.75Z","fill":"currentColor"}]];

export const Candle = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Candle.props = ['size', 'width', 'height'];
export default Candle;
