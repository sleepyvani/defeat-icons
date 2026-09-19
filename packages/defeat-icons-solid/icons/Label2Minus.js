import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M17.833 8.5278L13.8838 3.6504C13.5498 3.2368 13.0547 3 12.5234 3H5.25C3.7334 3 2.5 4.2334 2.5 5.75V12H5.75C6.9907 12 8 13.0093 8 14.25C8 14.5142 7.9459 14.7642 7.8618 15H12.5234C13.0546 15 13.5498 14.7632 13.8828 14.3511L17.833 9.4722C18.0557 9.1968 18.0557 8.8032 17.833 8.5278Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M5.75 15H0.75C0.3359 15 0 14.6641 0 14.25C0 13.8359 0.3359 13.5 0.75 13.5H5.75C6.1641 13.5 6.5 13.8359 6.5 14.25C6.5 14.6641 6.1641 15 5.75 15Z","fill":"currentColor"}]];

export const Label2Minus = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default Label2Minus;
