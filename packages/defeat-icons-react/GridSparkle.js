import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["rect",{"x":"2","y":"2","width":"6","height":"6","rx":"1.75","ry":"1.75","fill":"currentColor","opacity":".4","strokeWidth":"0","data-color":"color-2"}],["rect",{"x":"10","y":"2","width":"6","height":"6","rx":"1.75","ry":"1.75","fill":"currentColor","opacity":".4","strokeWidth":"0","data-color":"color-2"}],["rect",{"x":"2","y":"10","width":"6","height":"6","rx":"1.75","ry":"1.75","fill":"currentColor","opacity":".4","strokeWidth":"0","data-color":"color-2"}],["path",{"d":"m15.589,12.4055l-1.515-.5095-.505-1.5259c-.164-.4937-.975-.4937-1.139,0l-.505,1.5259-1.515.5095c-.2451.0815-.41.3132-.41.573s.165.4917.41.5732l1.515.5095.505,1.5256c.082.2468.312.4131.57.4131s.487-.1663.57-.4131l.505-1.5256,1.515-.5095c.245-.0815.41-.3135.41-.5732s-.166-.4905-.411-.573Z","strokeWidth":"0","fill":"currentColor"}]];

export const GridSparkle = (props) => React.createElement(Icon, { iconNode, ...props });
export default GridSparkle;
