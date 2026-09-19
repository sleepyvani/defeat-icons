import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M12.5001 13.5H8.73792C8.32382 13.5 7.98792 13.1641 7.98792 12.75V5.25C7.98792 4.8359 8.32382 4.5 8.73792 4.5H12.5001C14.9815 4.5 17.0001 6.5186 17.0001 9C17.0001 11.4814 14.9815 13.5 12.5001 13.5Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M6.25012 14.25C3.35512 14.25 1.00012 11.895 1.00012 9C1.00012 6.105 3.35512 3.75 6.25012 3.75C9.14512 3.75 11.5001 6.105 11.5001 9C11.5001 11.895 9.14512 14.25 6.25012 14.25Z","fill":"currentColor"}]];

export const Toggle = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default Toggle;
