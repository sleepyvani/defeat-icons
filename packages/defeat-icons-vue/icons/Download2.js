import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"m13.75,15.5H4.25c-1.5166,0-2.75-1.2334-2.75-2.75v-7.5c0-1.5166,1.2334-2.75,2.75-2.75h9.5c1.5166,0,2.75,1.2334,2.75,2.75v7.5c0,1.5166-1.2334,2.75-2.75,2.75Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m12.5303,8.2197c-.293-.293-.7676-.293-1.0605,0l-1.7197,1.7197V3.25c0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75v6.6895l-1.7197-1.7197c-.1465-.1465-.3384-.2197-.5303-.2197s-.3838.0732-.5303.2197c-.293.293-.293.7676,0,1.0605l3,3c.293.293.7676.293,1.0605,0l3-3c.293-.293.293-.7676,0-1.0605Z","stroke-width":"0","fill":"currentColor"}]];

export const Download2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Download2.props = ['size', 'width', 'height'];
export default Download2;
