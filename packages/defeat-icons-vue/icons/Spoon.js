import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M9 10C9.41421 10 9.75 10.3358 9.75 10.75V16C9.75 16.4142 9.41421 16.75 9 16.75C8.58579 16.75 8.25 16.4142 8.25 16V10.75C8.25 10.3358 8.58579 10 9 10Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6.09986 2.83414C6.79326 1.90073 7.81045 1.25 9 1.25C10.1895 1.25 11.2067 1.90073 11.9001 2.83414C12.5936 3.76759 13 5.02193 13 6.375C13 7.72807 12.5936 8.98241 11.9001 9.91586C11.2067 10.8493 10.1895 11.5 9 11.5C7.81045 11.5 6.79326 10.8493 6.09986 9.91586C5.40643 8.98241 5 7.72807 5 6.375C5 5.02193 5.40643 3.76759 6.09986 2.83414Z","fill":"currentColor"}]];

export const Spoon = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Spoon.props = ['size', 'width', 'height'];
export default Spoon;
