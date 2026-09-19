import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"M17 9C17 4.58172 13.4183 1 9 1V2.5C12.5899 2.5 15.5 5.41015 15.5 9C15.5 12.5899 12.5899 15.5 9 15.5V17C13.4183 17 17 13.4183 17 9Z","fill":"url(#nc-loader-2-fill-duo-gradient-1)","data-square-cap":"square"}],["path",{"d":"M2.5 9C2.5 5.41015 5.41015 2.5 9 2.5V1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17V15.5C5.41015 15.5 2.5 12.5899 2.5 9Z","fill":"url(#nc-loader-2-fill-duo-gradient-2)"}],["circle",{"cx":"9","cy":"16.25","r":"0.75","fill":"currentColor"}],["circle",{"cx":"9","cy":"9","r":"5","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["defs",{"fill":"none"}]];

export const Loader2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Loader2.props = ['size', 'width', 'height'];
export default Loader2;
