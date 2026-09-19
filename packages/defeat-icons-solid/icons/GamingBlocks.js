import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"M15 11.5V15.75C15 16.7162 14.2162 17.5 13.25 17.5H10.75C9.78379 17.5 9 16.7162 9 15.75V11.5H15Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M13.25 5.5H10.75C9.7835 5.5 9 6.2835 9 7.25V11.5H15V7.25C15 6.28379 14.2162 5.5 13.25 5.5Z","fill":"currentColor"}],["path",{"d":"M9 6.5V10.75C9 11.7165 8.2165 12.5 7.25 12.5H4.75C3.78379 12.5 3 11.7162 3 10.75V6.5H9Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M4.75 0.5C3.78379 0.5 3 1.28379 3 2.25V6.5H9V2.25C9 1.28379 8.21621 0.5 7.25 0.5H4.75Z","fill":"currentColor"}]];

export const GamingBlocks = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default GamingBlocks;
