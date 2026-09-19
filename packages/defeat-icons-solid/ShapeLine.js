import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M15.7803 2.21967C16.0732 2.51256 16.0732 2.98744 15.7803 3.28033L3.28033 15.7803C2.98744 16.0732 2.51256 16.0732 2.21967 15.7803C1.92678 15.4874 1.92678 15.0126 2.21967 14.7197L14.7197 2.21967C15.0126 1.92678 15.4874 1.92678 15.7803 2.21967Z","fill":"currentColor"}]];

export const ShapeLine = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default ShapeLine;
