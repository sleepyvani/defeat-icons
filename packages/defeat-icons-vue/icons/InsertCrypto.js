import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"m9,1C4.5889,1,1,4.5889,1,9c0,1.6914.5283,3.3135,1.5273,4.6904.1416.1943.3672.3096.6074.3096h11.7305c.2402,0,.4658-.1152.6074-.3096.999-1.377,1.5273-2.999,1.5273-4.6904,0-4.4111-3.5889-8-8-8Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m16.25,17H1.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h14.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m11.6465,8.293l-1.9395-1.9395c-.3906-.3896-1.0234-.3896-1.4141,0l-1.9395,1.9395c-.3896.3896-.3896,1.0244,0,1.4141l1.9395,1.9395c.1953.1948.4512.2925.707.2925s.5117-.0977.707-.2925l1.9395-1.9395c.3896-.3896.3896-1.0244,0-1.4141Z","stroke-width":"0","fill":"currentColor"}]];

export const InsertCrypto = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
InsertCrypto.props = ['size', 'width', 'height'];
export default InsertCrypto;
