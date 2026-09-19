import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M15.7501 9.75H8.75009C8.33599 9.75 8.00009 9.4141 8.00009 9C8.00009 8.5859 8.33599 8.25 8.75009 8.25H15.7501C16.1642 8.25 16.5001 8.5859 16.5001 9C16.5001 9.4141 16.1642 9.75 15.7501 9.75Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M15.7501 15H2.25009C1.83599 15 1.50009 14.6641 1.50009 14.25C1.50009 13.8359 1.83599 13.5 2.25009 13.5H15.7501C16.1642 13.5 16.5001 13.8359 16.5001 14.25C16.5001 14.6641 16.1642 15 15.7501 15Z","fill":"currentColor"}],["path",{"d":"M15.7501 4.5H2.25009C1.83599 4.5 1.50009 4.1641 1.50009 3.75C1.50009 3.3359 1.83599 3 2.25009 3H15.7501C16.1642 3 16.5001 3.3359 16.5001 3.75C16.5001 4.1641 16.1642 4.5 15.7501 4.5Z","fill":"currentColor"}]];

export const MenuRight2 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default MenuRight2;
