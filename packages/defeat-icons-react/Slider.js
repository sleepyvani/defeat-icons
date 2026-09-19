import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["path",{"d":"m15.25,13h-7.5c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h7.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","fill":"currentColor","opacity":".4","strokeWidth":"0","data-color":"color-2"}],["path",{"d":"m10.25,6.5H2.75c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h7.5c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z","fill":"currentColor","opacity":".4","strokeWidth":"0","data-color":"color-2"}],["path",{"d":"m5,15.25c-1.6541,0-3-1.3459-3-3s1.3459-3,3-3,3,1.3459,3,3-1.3459,3-3,3Z","strokeWidth":"0","fill":"currentColor"}],["path",{"d":"m13,8.75c-1.6541,0-3-1.3459-3-3s1.3459-3,3-3,3,1.3459,3,3-1.3459,3-3,3Z","strokeWidth":"0","fill":"currentColor"}]];

export const Slider = (props) => React.createElement(Icon, { iconNode, ...props });
export default Slider;
