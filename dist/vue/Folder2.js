import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1.5 4.75C1.5 3.23079 2.73079 2 4.25 2H6.075C6.88233 2 7.64813 2.35485 8.17042 2.96923L9.47009 4.5H13.75C15.2692 4.5 16.5 5.73079 16.5 7.25V12.75C16.5 14.2692 15.2692 15.5 13.75 15.5H4.25C2.73079 15.5 1.5 14.2692 1.5 12.75V4.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];

export const Folder2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Folder2.props = ['size', 'width', 'height'];
export default Folder2;
