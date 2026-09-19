import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"M13.2501 2H4.75006C3.23128 2 2.00006 3.23122 2.00006 4.75V13.25C2.00006 14.7688 3.23128 16 4.75006 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M6.50012 2H8.00012V6.5H16.0001V8H8.00012V16H6.50012V8H2.00012V6.5H6.50012V2Z","fill":"currentColor"}]];

export const SquareLayoutGrid5 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default SquareLayoutGrid5;
