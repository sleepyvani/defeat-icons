import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"M3.75 2C2.23128 2 1 3.23069 1 4.75V13.25C1 14.7693 2.23128 16 3.75 16H14.25C15.7687 16 17 14.7693 17 13.25V4.75C17 3.23069 15.7687 2 14.25 2H3.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M1 13H5.25003C6.21669 13 7.00003 12.2161 7.00003 11.25V6.75C7.00003 5.78393 6.21669 5 5.25003 5H1V13Z","fill":"currentColor"}],["path",{"d":"M17 5H12.75C11.7833 5 11 5.78393 11 6.75V11.25C11 12.2161 11.7833 13 12.75 13H17V5Z","fill":"currentColor"}]];

export const AnimationFrames = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default AnimationFrames;
