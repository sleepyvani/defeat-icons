import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"M6.25 6C5.00726 6 4 7.00792 4 8.25V13.75C4 14.9921 5.00726 16 6.25 16H14.75C15.9927 16 17 14.9921 17 13.75V8.25C17 7.00792 15.9927 6 14.75 6H6.25Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M17 9.5H4V11H17V9.5Z","fill":"currentColor"}],["path",{"d":"M0.503906 4.25C0.503906 3.00792 1.51116 2 2.75391 2H11.2539C12.4966 2 13.5039 3.00792 13.5039 4.25V6H6.25C5.00726 6 4 7.00792 4 8.25V12H2.75391C1.51116 12 0.503906 10.9921 0.503906 9.75V4.25Z","fill":"currentColor","fill-opacity":"0.2","data-color":"color-2"}]];

export const CreditCards = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default CreditCards;
