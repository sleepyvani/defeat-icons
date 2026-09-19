import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 3.75C1 3.33579 1.33579 3 1.75 3H15.25C16.2172 3 17 3.78676 17 4.75V13.25C17 14.2132 16.2172 15 15.25 15H1.75C1.33579 15 1 14.6642 1 14.25V3.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8.09473 9.75H1V8.25H8.09473C8.42794 6.95788 9.60166 6 11 6C12.6579 6 14 7.34644 14 9C14 10.6536 12.6579 12 11 12C9.60166 12 8.42794 11.0421 8.09473 9.75Z","fill":"currentColor"}]];

export const StrokeProjectingCap = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
StrokeProjectingCap.props = ['size', 'width', 'height'];
export default StrokeProjectingCap;
