import React from 'react';
import { Icon } from './Icon.js';
export const CirclePause = ({ ...props }) => {
    return (React.createElement(Icon, { size: "18px", ...props },
        React.createElement("circle", { cx: "9", cy: "9", r: "8", fill: "currentColor", opacity: ".4", strokeWidth: "0", "data-color": "color-2" }),
        React.createElement("path", { d: "m6.75,12.5c-.4141,0-.75-.3359-.75-.75v-5.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v5.5c0,.4141-.3359.75-.75.75Z", strokeWidth: "0", fill: "currentColor" }),
        React.createElement("path", { d: "m11.25,12.5c-.4141,0-.75-.3359-.75-.75v-5.5c0-.4141.3359-.75.75-.75s.75.3359.75.75v5.5c0,.4141-.3359.75-.75.75Z", strokeWidth: "0", fill: "currentColor" })));
};
//# sourceMappingURL=CirclePause.js.map
export default CirclePause;
