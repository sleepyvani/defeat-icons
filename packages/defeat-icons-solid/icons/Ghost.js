import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"m9,1c-3.8599,0-7,3.1401-7,7v8.25c0,.4141.3359.75.75.75,1.2051,0,1.833-.5762,2.2915-.9966.3799-.3491.5649-.5034.9585-.5034.416,0,.6167.1768.9956.5444.4155.4033.9854.9556,2.0044.9556s1.5889-.5522,2.0044-.9556c.3789-.3677.5796-.5444.9956-.5444.3936,0,.5786.1543.9585.5034.4585.4204,1.0864.9966,2.2915.9966.4141,0,.75-.3359.75-.75v-8.25c0-3.8599-3.1401-7-7-7Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["ellipse",{"cx":"6","cy":"8.5","rx":"1","ry":"1.5","stroke-width":"0","fill":"currentColor"}],["ellipse",{"cx":"12","cy":"8.5","rx":"1","ry":"1.5","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"9","cy":"11.25","r":"1.25","stroke-width":"0","fill":"currentColor"}]];

export const Ghost = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default Ghost;
