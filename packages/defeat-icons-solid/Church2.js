import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"m13.25,17H4.75c-1.5166,0-2.75-1.2334-2.75-2.75v-7.5039c0-.543.2578-1.0635.6904-1.3926L7.9404,1.3628c.625-.4727,1.4961-.4746,2.1191.0005l5.25,3.9897c.4326.3296.6904.8501.6904,1.3931v7.5039c0,1.5166-1.2334,2.75-2.75,2.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m11.75,8h-2v-2.25c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v2.25h-2c-.4141,0-.75.3359-.75.75s.3359.75.75.75h2v6.75c0,.4141.3359.75.75.75s.75-.3359.75-.75v-6.75h2c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","stroke-width":"0","fill":"currentColor"}]];

export const Church2 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default Church2;
