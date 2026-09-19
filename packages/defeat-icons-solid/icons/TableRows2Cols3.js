import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M16.5 4.75V13.25C16.5 14.77 15.267 16 13.75 16H4.25C2.733 16 1.5 14.77 1.5 13.25V4.75C1.5 3.23 2.733 2 4.25 2H13.75C15.267 2 16.5 3.23 16.5 4.75Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M12.5 2H11V8.25H7V2H5.5V8.25H1.5V9.75H5.5V16H7V9.75H11V16H12.5V9.75H16.5V8.25H12.5V2Z","fill":"currentColor"}]];

export const TableRows2Cols3 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default TableRows2Cols3;
