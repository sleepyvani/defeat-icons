import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"M9 13.7882L14.5913 15.4453C15.6758 15.7737 16.5939 14.6267 16.0762 13.6457L10.1234 2.18187C9.88379 1.72135 9.44154 1.49831 9 1.50091L9 13.7882Z","fill":"currentColor"}],["path",{"d":"M9 13.7882L9 1.50092C8.55836 1.50352 8.11744 1.73186 7.88075 2.1741L1.92255 13.6481C1.40664 14.6406 2.33668 15.7618 3.40611 15.4461L9 13.7882Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];

export const PaperPlane3 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default PaperPlane3;
