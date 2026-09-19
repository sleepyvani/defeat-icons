import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"m4.75,16c-.4141,0-.75-.3359-.75-.75V6.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v8.75c0,.4141-.3359.75-.75.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m13.25,12.25c-.4141,0-.75-.3359-.75-.75v-5.25c0-.4136-.3364-.75-.75-.75h-2c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h2c1.2407,0,2.25,1.0093,2.25,2.25v5.25c0,.4141-.3359.75-.75.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"4.75","cy":"4.5","r":"2.5","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"13.25","cy":"13.5","r":"2.5","stroke-width":"0","fill":"currentColor"}]];

export const ConditionalLogic = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default ConditionalLogic;
