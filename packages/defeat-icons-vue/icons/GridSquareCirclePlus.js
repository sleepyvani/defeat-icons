import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"m3.75,8h2.5c.9648,0,1.75-.7852,1.75-1.75v-2.5c0-.9648-.7852-1.75-1.75-1.75h-2.5c-.9648,0-1.75.7852-1.75,1.75v2.5c0,.9648.7852,1.75,1.75,1.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m14.25,10h-2.5c-.9648,0-1.75.7852-1.75,1.75v2.5c0,.9648.7852,1.75,1.75,1.75h2.5c.9648,0,1.75-.7852,1.75-1.75v-2.5c0-.9648-.7852-1.75-1.75-1.75Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m5,9.75c-1.792,0-3.25,1.458-3.25,3.25s1.458,3.25,3.25,3.25,3.25-1.458,3.25-3.25-1.458-3.25-3.25-3.25Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m15.5,4.5h-1.75v-1.75c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v1.75h-1.75c-.4141,0-.75.3359-.75.75s.3359.75.75.75h1.75v1.75c0,.4141.3359.75.75.75s.75-.3359.75-.75v-1.75h1.75c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];

export const GridSquareCirclePlus = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
GridSquareCirclePlus.props = ['size', 'width', 'height'];
export default GridSquareCirclePlus;
