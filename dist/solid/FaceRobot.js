import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["rect",{"x":"1.5","y":"3","width":"15","height":"13","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m12,10c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m7,9c0-.552-.448-1-1-1s-1,.448-1,1c0,.552.448,1,1,1s1-.448,1-1Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m11.5,12.5h-5c-.2761,0-.5.2239-.5.5v1c0,.2761.2239.5.5.5h5c.2762,0,.5-.2239.5-.5v-1c0-.2761-.2238-.5-.5-.5Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m1.5,7.5h-.25c-.4141,0-.75.3359-.75.75v2.5c0,.4141.3359.75.75.75h.25v-4Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m16.5,7.5h.25c.4141,0,.75.3359.75.75v2.5c0,.4141-.3359.75-.75.75h-.25v-4Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m9.75,3v-1.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.75h1.5Z","stroke-width":"0","fill":"currentColor"}]];

export const FaceRobot = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default FaceRobot;
