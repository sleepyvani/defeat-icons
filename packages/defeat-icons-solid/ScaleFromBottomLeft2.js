import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M13.2501 2H4.75011C3.23132 2 2.00012 3.23122 2.00012 4.75V13.25C2.00012 14.7688 3.23132 16 4.75011 16H13.2501C14.7689 16 16.0001 14.7688 16.0001 13.25V4.75C16.0001 3.23122 14.7689 2 13.2501 2Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M6.25011 9H4.75011C3.23132 9 2.00012 10.2312 2.00012 11.75V13.25C2.00012 14.7688 3.23132 16 4.75011 16H6.25011C7.76889 16 9.00011 14.7688 9.00011 13.25V11.75C9.00011 10.2312 7.76889 9 6.25011 9Z","fill":"currentColor"}]];

export const ScaleFromBottomLeft2 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default ScaleFromBottomLeft2;
