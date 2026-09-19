import React from 'react';
import { Icon } from './Icon.js';
export const DependencyLink = ({ ...props }) => {
    return (React.createElement(Icon, { size: "18px", ...props },
        React.createElement("path", { d: "m6.25,13.5c-.4141,0-.75-.3359-.75-.75v-2.25c0-1.2407,1.0098-2.25,2.25-2.25h2.5c.4131,0,.75-.3364.75-.75v-2.25c0-.4141.3359-.75.75-.75s.75.3359.75.75v2.25c0,1.2407-1.0098,2.25-2.25,2.25h-2.5c-.4131,0-.75.3364-.75.75v2.25c0,.4141-.3359.75-.75.75Z", fill: "currentColor", opacity: ".4", strokeWidth: "0", "data-color": "color-2" }),
        React.createElement("rect", { x: "7", y: "1.5", width: "9.5", height: "4.5", rx: "1.75", ry: "1.75", strokeWidth: "0", fill: "currentColor" }),
        React.createElement("rect", { x: "1.5", y: "12", width: "9.5", height: "4.5", rx: "1.75", ry: "1.75", strokeWidth: "0", fill: "currentColor" })));
};
//# sourceMappingURL=DependencyLink.js.map
export default DependencyLink;
