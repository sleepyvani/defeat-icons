import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M9.00012 17C13.4184 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4184 1 9.00012 1C4.58184 1 1.00012 4.58172 1.00012 9C1.00012 13.4183 4.58184 17 9.00012 17Z","fill":"currentColor","data-color":"color-2"}]];

export const RadioUnchecked = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
RadioUnchecked.props = ['size', 'width', 'height'];
export default RadioUnchecked;
