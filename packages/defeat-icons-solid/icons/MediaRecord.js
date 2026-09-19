import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];

export const MediaRecord = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default MediaRecord;
