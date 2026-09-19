import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M3.75012 16H14.2501C15.7667 16 17.0001 14.7666 17.0001 13.25V5C17.0001 4.5859 16.6642 4.25 16.2501 4.25H1.75012C1.33602 4.25 1.00012 4.5859 1.00012 5V13.25C1.00012 14.7666 2.23352 16 3.75012 16Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M14.2501 2H3.75012C2.23134 2 1.00012 3.23122 1.00012 4.75V5.25C1.00012 6.76878 2.23134 8 3.75012 8H14.2501C15.7689 8 17.0001 6.76878 17.0001 5.25V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z","fill":"currentColor"}]];

export const LayoutHeader = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default LayoutHeader;
