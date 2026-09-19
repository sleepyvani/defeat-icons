import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"m9.5,6.7598c0,.4141.3359.75.75.75s.75-.3359.75-.75V2.25c0-.4141-.3359-.75-.75-.75h-4.5098c-.4141,0-.75.3359-.75.75s.3359.75.75.75h2.6992L1.7197,9.7197c-.293.293-.293.7676,0,1.0605.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197l6.7197-6.7197v2.6992Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m15.2197,7.2197l-6.7197,6.7197v-2.6992c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v4.5098c0,.4141.3359.75.75.75h4.5098c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75h-2.6992l6.7197-6.7197c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}]];

export const ArrowsDiagonalOppositeDirection = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
ArrowsDiagonalOppositeDirection.props = ['size', 'width', 'height'];
export default ArrowsDiagonalOppositeDirection;
