import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.0759 1.61119C13.9072 1.07941 15 1.67539 15 2.664V15.337C15 16.3256 13.9072 16.9216 13.0759 16.3898L7.78051 13H4.25C3.00779 13 2 11.9922 2 10.75V7.25C2 6.00778 3.00779 5 4.25 5H7.78056L13.0759 1.61119Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];

export const Volume = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Volume.props = ['size', 'width', 'height'];
export default Volume;
