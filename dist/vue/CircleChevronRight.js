import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"opacity":"0.4","d":"M17 9C17 4.589 13.411 1 9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9Z","fill":"currentColor","data-color":"color-2"}],["path",{"d":"M7.47 6.53003C7.177 6.23703 7.177 5.76199 7.47 5.46899C7.616 5.32299 7.808 5.24902 8 5.24902C8.192 5.24902 8.384 5.32199 8.53 5.46899L11.53 8.46899C11.823 8.76199 11.823 9.23703 11.53 9.53003L8.53 12.53C8.237 12.823 7.762 12.823 7.469 12.53C7.176 12.237 7.176 11.762 7.469 11.469L9.939 8.99902L7.469 6.52899L7.47 6.53003Z","fill":"currentColor"}]];

export const CircleChevronRight = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
CircleChevronRight.props = ['size', 'width', 'height'];
export default CircleChevronRight;
