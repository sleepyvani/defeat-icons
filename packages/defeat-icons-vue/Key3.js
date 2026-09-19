import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.75 13C4.75 10.7909 6.54077 9 8.75 9C10.9592 9 12.75 10.7909 12.75 13C12.75 15.2091 10.9592 17 8.75 17C6.54077 17 4.75 15.2091 4.75 13Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M8.75 0.75C9.16421 0.75 9.5 1.08579 9.5 1.5V2H12.25C12.6642 2 13 2.33579 13 2.75C13 3.16421 12.6642 3.5 12.25 3.5H9.5V5H11.578C11.9922 5 12.328 5.33579 12.328 5.75C12.328 6.16421 11.9922 6.5 11.578 6.5H9.5V9.07019C9.25706 9.02411 9.00635 9 8.75 9C8.49365 9 8.24294 9.02411 8 9.07019V1.5C8 1.08579 8.33579 0.75 8.75 0.75Z","fill":"currentColor"}],["path",{"d":"M8.75 15.5C9.578 15.5 10.25 14.8284 10.25 14C10.25 13.1716 9.578 12.5 8.75 12.5C7.922 12.5 7.25 13.1716 7.25 14C7.25 14.8284 7.922 15.5 8.75 15.5Z","fill":"currentColor"}]];

export const Key3 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Key3.props = ['size', 'width', 'height'];
export default Key3;
