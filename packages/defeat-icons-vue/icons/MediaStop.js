import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 4.75C2 3.23119 3.23119 2 4.75 2H13.25C14.7688 2 16 3.23119 16 4.75V13.25C16 14.7688 14.7688 16 13.25 16H4.75C3.23119 16 2 14.7688 2 13.25V4.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];

export const MediaStop = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
MediaStop.props = ['size', 'width', 'height'];
export default MediaStop;
