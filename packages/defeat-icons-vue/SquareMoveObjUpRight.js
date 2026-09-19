import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M13.25 2H4.75C3.23122 2 2 3.23122 2 4.75V13.25C2 14.7688 3.23122 16 4.75 16H13.25C14.7688 16 16 14.7688 16 13.25V4.75C16 3.23122 14.7688 2 13.25 2Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M9 10.75V16H4.75C3.2334 16 2 14.7666 2 13.25V9H7.25C8.2148 9 9 9.7852 9 10.75Z","fill":"currentColor"}],["path",{"d":"M12 8.25V7.06055L10.5303 8.53015C10.2373 8.82315 9.7627 8.82315 9.4698 8.53015C9.1769 8.23715 9.1768 7.76263 9.4698 7.46973L10.9395 6H9.75C9.3359 6 9 5.6641 9 5.25C9 4.8359 9.3359 4.5 9.75 4.5H12.75C13.1641 4.5 13.5 4.8359 13.5 5.25V8.25C13.5 8.6641 13.1641 9 12.75 9C12.3359 9 12 8.6641 12 8.25Z","fill":"currentColor"}]];

export const SquareMoveObjUpRight = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
SquareMoveObjUpRight.props = ['size', 'width', 'height'];
export default SquareMoveObjUpRight;
