import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M14.2501 2H3.75012C2.23134 2 1.00012 3.23122 1.00012 4.75V13.25C1.00012 14.7688 2.23134 16 3.75012 16H14.2501C15.7689 16 17.0001 14.7688 17.0001 13.25V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M11.0001 16H14.2501C15.7667 16 17.0001 14.7666 17.0001 13.25V4.75C17.0001 3.2334 15.7667 2 14.2501 2H11.0001V16Z","fill":"currentColor"}],["path",{"d":"M7.75005 12.25C7.55765 12.25 7.36625 12.1768 7.21975 12.0303L4.71975 9.5303C4.42675 9.2373 4.42675 8.76277 4.71975 8.46987L7.21975 5.96987C7.51275 5.67687 7.98737 5.67687 8.28027 5.96987C8.57317 6.26287 8.57327 6.7374 8.28027 7.0303L6.31057 9.00002L8.28027 10.9697C8.57327 11.2627 8.57327 11.7373 8.28027 12.0302C8.13377 12.1767 7.94245 12.25 7.75005 12.25Z","fill":"currentColor"}]];

export const SidebarRightShow = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
SidebarRightShow.props = ['size', 'width', 'height'];
export default SidebarRightShow;
