import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 6.75C2 6.33579 2.33579 6 2.75 6H15.25C15.6642 6 16 6.33579 16 6.75C16 7.16421 15.6642 7.5 15.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 11.25C2 10.8358 2.33579 10.5 2.75 10.5H15.25C15.6642 10.5 16 10.8358 16 11.25C16 11.6642 15.6642 12 15.25 12H2.75C2.33579 12 2 11.6642 2 11.25Z","fill":"currentColor"}]];

export const Equals = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Equals.props = ['size', 'width', 'height'];
export default Equals;
