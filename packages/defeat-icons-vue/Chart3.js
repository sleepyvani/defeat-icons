import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"m6.75,9h-3.5c-.9648,0-1.75.7852-1.75,1.75v3c0,.9648.7852,1.75,1.75,1.75h3.5c.4141,0,.75-.3359.75-.75v-5c0-.4141-.3359-.75-.75-.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m14.75,5.5h-3.5c-.4141,0-.75.3359-.75.75v8.5c0,.4141.3359.75.75.75h3.5c.9648,0,1.75-.7852,1.75-1.75v-6.5c0-.9648-.7852-1.75-1.75-1.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m10.25,2h-2.5c-.9648,0-1.75.7852-1.75,1.75v11c0,.4141.3359.75.75.75h4.5c.4141,0,.75-.3359.75-.75V3.75c0-.9648-.7852-1.75-1.75-1.75Z","stroke-width":"0","fill":"currentColor"}]];

export const Chart3 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Chart3.props = ['size', 'width', 'height'];
export default Chart3;
