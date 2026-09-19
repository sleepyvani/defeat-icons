import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M13.75 5H7.75C6.23122 5 5 6.23122 5 7.75V13.75C5 15.2688 6.23122 16.5 7.75 16.5H13.75C15.2688 16.5 16.5 15.2688 16.5 13.75V7.75C16.5 6.23122 15.2688 5 13.75 5Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M4.25 13H5V7.75C5 6.2334 6.2334 5 7.75 5H13V4.25C13 2.7334 11.7666 1.5 10.25 1.5H4.25C2.7334 1.5 1.5 2.7334 1.5 4.25V10.25C1.5 11.7666 2.7334 13 4.25 13Z","fill":"currentColor"}]];

export const Clone2 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default Clone2;
