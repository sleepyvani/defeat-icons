import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 7.75C1 6.23079 2.23079 5 3.75 5H14.25C15.7692 5 17 6.23079 17 7.75V13.25C17 14.7692 15.7692 16 14.25 16H3.75C2.23079 16 1 14.7692 1 13.25V7.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M9.9654 5H3.75C2.23079 5 1 6.23079 1 7.75V3.75C1 2.78379 1.78379 2 2.75 2H6.547C7.05184 2 7.53228 2.21878 7.86426 2.59794L9.9654 5Z","fill":"currentColor"}]];

export const Folder5 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Folder5.props = ['size', 'width', 'height'];
export default Folder5;
