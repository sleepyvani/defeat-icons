import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"M9.932 1.91604C9.457 1.38704 8.543 1.38704 8.069 1.91604L4.938 5.41604C4.604 5.78904 4.52399 6.30303 4.72699 6.76003C4.93099 7.21703 5.369 7.501 5.869 7.501H12.133C12.633 7.501 13.071 7.21703 13.275 6.76003C13.478 6.30303 13.398 5.78901 13.064 5.41701L9.933 1.91701L9.932 1.91604Z","fill":"currentColor"}]];

export const SortUp = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default SortUp;
