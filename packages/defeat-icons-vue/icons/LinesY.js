import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V15.25C3.5 15.6642 3.16421 16 2.75 16C2.33579 16 2 15.6642 2 15.25V2.75C2 2.33579 2.33579 2 2.75 2Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15.25 4C15.6642 4 16 4.33579 16 4.75V15.25C16 15.6642 15.6642 16 15.25 16C14.8358 16 14.5 15.6642 14.5 15.25V4.75C14.5 4.33579 14.8358 4 15.25 4Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7 7C7.41421 7 7.75 7.33579 7.75 7.75V15.25C7.75 15.6642 7.41421 16 7 16C6.58579 16 6.25 15.6642 6.25 15.25V7.75C6.25 7.33579 6.58579 7 7 7Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11 11C11.4142 11 11.75 11.3358 11.75 11.75V15.25C11.75 15.6642 11.4142 16 11 16C10.5858 16 10.25 15.6642 10.25 15.25V11.75C10.25 11.3358 10.5858 11 11 11Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];

export const LinesY = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
LinesY.props = ['size', 'width', 'height'];
export default LinesY;
