import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 4.75C2 4.33579 2.33579 4 2.75 4H15.25C15.6642 4 16 4.33579 16 4.75V14.25C16 15.7682 14.7682 17 13.25 17H4.75C3.23179 17 2 15.7682 2 14.25V4.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M9.75 4V8.25C9.75 8.66421 9.41421 9 9 9C8.58579 9 8.25 8.66421 8.25 8.25V4H9.75Z","fill":"currentColor"}],["path",{"d":"M4.99999 1C4.76393 1 4.54163 1.11115 4.39999 1.3L2.15472 4.29369C2.29182 4.11512 2.50746 4 2.74999 4H15.25C15.4928 4 15.7086 4.11536 15.8457 4.29426L13.6 1.3C13.4584 1.11115 13.2361 1 13 1H4.99999Z","fill":"currentColor"}]];

export const BoxArchive2 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default BoxArchive2;
