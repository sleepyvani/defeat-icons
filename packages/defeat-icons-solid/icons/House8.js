import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M10.0591 1.36312C9.4333 0.886569 8.56694 0.887445 7.94127 1.36281L2.69155 5.3526C2.2559 5.68346 2 6.19867 2 6.746V14.25C2 15.7692 3.23079 17 4.75 17H13.25C14.7692 17 16 15.7692 16 14.25V6.746C16 6.20008 15.7448 5.68398 15.3088 5.35287L10.0591 1.36312Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5 13.25C5 12.8358 5.33579 12.5 5.75 12.5H12.25C12.6642 12.5 13 12.8358 13 13.25C13 13.6642 12.6642 14 12.25 14H5.75C5.33579 14 5 13.6642 5 13.25Z","fill":"currentColor"}]];

export const House8 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default House8;
