import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"m9,1C4.5889,1,1,4.5889,1,9c0,2.2075.8848,4.2651,2.4922,5.7935.1387.1328.3242.2065.5166.2065h9.9824c.1924,0,.3779-.0737.5166-.2065,1.6074-1.5283,2.4922-3.5859,2.4922-5.7935,0-4.4111-3.5889-8-8-8Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m9,9.75c-.1924,0-.3838-.0732-.5303-.2197l-3-3c-.293-.293-.293-.7676,0-1.0605s.7676-.293,1.0605,0l3,3c.293.293.293.7676,0,1.0605-.1465.1465-.3379.2197-.5303.2197Z","stroke-width":"0","fill":"currentColor"}]];

export const Speedometer = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default Speedometer;
