import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M11.5001 15H6.50012C3.19152 15 0.500122 12.3086 0.500122 9C0.500122 5.6914 3.19152 3 6.50012 3H11.5001C14.8087 3 17.5001 5.6914 17.5001 9C17.5001 12.3086 14.8087 15 11.5001 15Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M6.50012 12C4.84582 12 3.50012 10.6543 3.50012 9C3.50012 7.3457 4.84582 6 6.50012 6C8.15442 6 9.50012 7.3457 9.50012 9C9.50012 10.6543 8.15442 12 6.50012 12Z","fill":"currentColor"}]];

export const Toggle2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Toggle2.props = ['size', 'width', 'height'];
export default Toggle2;
