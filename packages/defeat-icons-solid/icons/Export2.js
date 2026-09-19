import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"m12.7803,4.4697l-3.25-3.25c-.293-.293-.7676-.293-1.0605,0l-3.25,3.25c-.293.293-.293.7676,0,1.0605s.7676.293,1.0605,0l1.9697-1.9697v4.6895c0,.4141.3359.75.75.75s.75-.3359.75-.75V3.5605l1.9697,1.9697c.1465.1465.3379.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m13.25,10.5H4.75c-1.792,0-3.25,1.458-3.25,3.25s1.458,3.25,3.25,3.25h8.5c1.792,0,3.25-1.458,3.25-3.25s-1.458-3.25-3.25-3.25Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["circle",{"cx":"5","cy":"13.75","r":"1","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"8","cy":"13.75","r":"1","stroke-width":"0","fill":"currentColor"}]];

export const Export2 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default Export2;
