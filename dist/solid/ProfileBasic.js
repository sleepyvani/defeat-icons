import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"m14.25,15H3.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h10.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"9","cy":"7.5","r":"6","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];

export const ProfileBasic = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default ProfileBasic;
