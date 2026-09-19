import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6.5 3C6.5 1.6189 7.6189 0.5 9 0.5C10.3811 0.5 11.5 1.6189 11.5 3C11.5 4.3811 10.3811 5.5 9 5.5C7.6189 5.5 6.5 4.3811 6.5 3Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2.75 11C2.33579 11 2 11.3358 2 11.75C2 12.1642 2.33579 12.5 2.75 12.5H4V17.25C4 17.6642 4.33579 18 4.75 18H13.25C13.6642 18 14 17.6642 14 17.25V12.5H15.25C15.6642 12.5 16 12.1642 16 11.75C16 11.3358 15.6642 11 15.25 11H2.75Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"d":"M9 6.5C6.51479 6.5 4.5 8.51479 4.5 11H13.5C13.5 8.51479 11.4852 6.5 9 6.5Z","fill":"currentColor"}]];

export const Judge = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Judge.props = ['size', 'width', 'height'];
export default Judge;
