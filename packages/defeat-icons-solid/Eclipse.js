import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 9C1 4.58168 4.58179 1 9 1C13.4182 1 17 4.58168 17 9C17 13.4183 13.4182 17 9 17C4.58179 17 1 13.4183 1 9Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M10.8741 1.22072C14.3882 2.06424 17 5.22708 17 9C17 12.7729 14.3882 15.9358 10.8741 16.7793C7.35994 15.9358 4.74814 12.7729 4.74814 9C4.74814 5.22708 7.35994 2.06424 10.8741 1.22072Z","fill":"currentColor"}]];

export const Eclipse = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default Eclipse;
