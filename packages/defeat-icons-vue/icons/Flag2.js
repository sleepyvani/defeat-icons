import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 3.25C3 2.83579 3.33579 2.5 3.75 2.5H13.25C14.2162 2.5 15 3.28379 15 4.25V9.25C15 10.2162 14.2162 11 13.25 11H3.75C3.33579 11 3 10.6642 3 10.25V3.25Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.75 1C4.16421 1 4.5 1.33579 4.5 1.75V16.25C4.5 16.6642 4.16421 17 3.75 17C3.33579 17 3 16.6642 3 16.25V1.75C3 1.33579 3.33579 1 3.75 1Z","fill":"currentColor"}]];

export const Flag2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Flag2.props = ['size', 'width', 'height'];
export default Flag2;
