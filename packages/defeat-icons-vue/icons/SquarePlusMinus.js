import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 4.75C2 3.23069 3.23128 2 4.75 2H13.25C14.7687 2 16 3.23069 16 4.75V13.25C16 14.7693 14.7687 16 13.25 16H4.75C3.23128 16 2 14.7693 2 13.25V4.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M9.75 4.75C9.75 4.33579 9.41421 4 9 4C8.58579 4 8.25 4.33579 8.25 4.75V6.5H6.5C6.08579 6.5 5.75 6.83579 5.75 7.25C5.75 7.66421 6.08579 8 6.5 8H8.25V9.75C8.25 10.1642 8.58579 10.5 9 10.5C9.41421 10.5 9.75 10.1642 9.75 9.75V8H11.5C11.9142 8 12.25 7.66421 12.25 7.25C12.25 6.83579 11.9142 6.5 11.5 6.5H9.75V4.75Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5.75 12.25C5.75 11.8358 6.08579 11.5 6.5 11.5H11.5C11.9142 11.5 12.25 11.8358 12.25 12.25C12.25 12.6642 11.9142 13 11.5 13H6.5C6.08579 13 5.75 12.6642 5.75 12.25Z","fill":"currentColor"}]];

export const SquarePlusMinus = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
SquarePlusMinus.props = ['size', 'width', 'height'];
export default SquarePlusMinus;
