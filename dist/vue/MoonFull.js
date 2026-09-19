import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M9.75 12.5C10.164 12.5 10.5 12.1642 10.5 11.75C10.5 11.3358 10.164 11 9.75 11C9.336 11 9 11.3358 9 11.75C9 12.1642 9.336 12.5 9.75 12.5Z","fill":"currentColor"}],["path",{"d":"M6.5 10C7.052 10 7.5 9.5523 7.5 9C7.5 8.4477 7.052 8 6.5 8C5.948 8 5.5 8.4477 5.5 9C5.5 9.5523 5.948 10 6.5 10Z","fill":"currentColor"}],["path",{"d":"M10.75 8C11.44 8 12 7.4404 12 6.75C12 6.0596 11.44 5.5 10.75 5.5C10.06 5.5 9.5 6.0596 9.5 6.75C9.5 7.4404 10.06 8 10.75 8Z","fill":"currentColor"}]];

export const MoonFull = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
MoonFull.props = ['size', 'width', 'height'];
export default MoonFull;
