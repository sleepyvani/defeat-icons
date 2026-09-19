import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 3.75C1 3.33579 1.33579 3 1.75 3H13.25C14.2172 3 15 3.78676 15 4.75V13.25C15 14.2132 14.2172 15 13.25 15H1.75C1.33579 15 1 14.6642 1 14.25V3.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11.3447 9.75H1V8.25H11.3447C11.6779 6.95788 12.8517 6 14.25 6C15.9079 6 17.25 7.34644 17.25 9C17.25 10.6536 15.9079 12 14.25 12C12.8517 12 11.6779 11.0421 11.3447 9.75Z","fill":"currentColor"}]];

export const StrokeButCap = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
StrokeButCap.props = ['size', 'width', 'height'];
export default StrokeButCap;
