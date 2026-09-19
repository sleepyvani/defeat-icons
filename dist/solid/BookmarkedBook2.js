import { createComponent, mergeProps } from 'solid-js/web';
import Icon from './Icon.js';

const iconNode = [["path",{"d":"m11,2h4.25c.9662,0,1.75.7838,1.75,1.75v9.5c0,.9662-.7838,1.75-1.75,1.75h-4.25c-.6908,0-1.25.5592-1.25,1.25,0,.4142-.3358.75-.75.75V2.8622c.5013-.5309,1.2118-.8622,2-.8622Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m7,2H2.75c-.9662,0-1.75.7838-1.75,1.75v9.5c0,.9662.7838,1.75,1.75,1.75h4.25c.6908,0,1.25.5592,1.25,1.25,0,.4142.3358.75.75.75V2.8622c-.5013-.5309-1.2118-.8622-2-.8622Z","stroke-width":"0","fill":"currentColor"}],["path",{"d":"m12,2v4.75c0,.4141.3359.75.75.75s.75-.3359.75-.75V2h-1.5Z","stroke-width":"0","fill":"currentColor"}]];

export const BookmarkedBook2 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default BookmarkedBook2;
