import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"M9 1C4.58168 1 1 4.58179 1 9C1 13.4182 4.58168 17 9 17V1Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M15.2454 14C13.7792 15.8289 11.5264 17 9 17V14H15.2454Z","fill":"currentColor"}],["path",{"d":"M9 1V4H15.2454C13.7792 2.17109 11.5264 1 9 1Z","fill":"currentColor"}],["path",{"d":"M16.9653 8.25H9V5.5H16.1958C16.6071 6.34418 16.8743 7.27152 16.9653 8.25Z","fill":"currentColor"}],["path",{"d":"M16.1958 12.5H9V9.75H16.9653C16.8743 10.7285 16.6071 11.6558 16.1958 12.5Z","fill":"currentColor"}]];

export const Contrast = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default Contrast;
