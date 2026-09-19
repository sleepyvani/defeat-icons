import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"M7 9.568V11L15.78 2.22C15.644 2.084 15.457 2 15.25 2H2.75C2.336 2 2 2.336 2 2.75V4.535C2 5.053 2.227 5.541 2.622 5.873L7 9.568Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M7 14.182V16.25C7 16.664 7.336 17 7.75 17H10.25C10.664 17 11 16.664 11 16.25V10.182L7 14.182Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M1.99999 16.75C1.80799 16.75 1.61599 16.677 1.46999 16.53C1.17699 16.237 1.17699 15.762 1.46999 15.469L15.72 1.21999C16.013 0.926994 16.488 0.926994 16.781 1.21999C17.074 1.51299 17.074 1.98799 16.781 2.28099L2.52999 16.53C2.38399 16.676 2.19199 16.75 1.99999 16.75Z","fill":"currentColor"}]];

export const Filter2Off = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Filter2Off.props = ['size', 'width', 'height'];
export default Filter2Off;
