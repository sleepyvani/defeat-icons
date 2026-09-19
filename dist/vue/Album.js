import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.5 1.75C3.5 1.33579 3.83579 1 4.25 1H13.75C14.1642 1 14.5 1.33579 14.5 1.75C14.5 2.16421 14.1642 2.5 13.75 2.5H4.25C3.83579 2.5 3.5 2.16421 3.5 1.75Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1.72611 6.06321C1.53024 4.98816 2.35674 4 3.44801 4H14.552C15.6447 4 16.468 4.98929 16.274 6.06242L14.638 15.0626C14.4872 15.8953 13.7609 16.5 12.916 16.5H5.08501C4.23892 16.5 3.51534 15.8943 3.36328 15.0641L1.72611 6.06321Z","fill":"currentColor","fill-opacity":"0.4","data-color":"color-2"}]];

export const Album = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
Album.props = ['size', 'width', 'height'];
export default Album;
