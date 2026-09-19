import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["circle",{"cx":"10","cy":"9","r":"2.25","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"14.25","cy":"9","r":".75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m2.5,8h3.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-3.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m14.75,3.5H5.5c-.4141,0-.75.3359-.75.75s.3359.75.75.75h9.25c.6895,0,1.25.5605,1.25,1.25v5.5c0,.6895-.5605,1.25-1.25,1.25H5.25c-.3774,0-.6523-.1709-.8164-.3145-.3115-.2729-.7856-.2407-1.0581.0708-.2729.3115-.2412.7852.0708,1.0581.5049.4419,1.1455.6855,1.8037.6855h9.5c1.5161,0,2.75-1.2334,2.75-2.75v-5.5c0-1.5166-1.2339-2.75-2.75-2.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m5.75,10.25c0-.4141-.3359-.75-.75-.75H.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h4.25c.4141,0,.75-.3359.75-.75Z","stroke-width":"0","fill":"currentColor"}]];

export const InstantMoney = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default InstantMoney;
