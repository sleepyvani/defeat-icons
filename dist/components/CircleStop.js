import React from 'react';
import { Icon } from './Icon.js';
export const CircleStop = ({ ...props }) => {
    return (React.createElement(Icon, { size: "18px", ...props },
        React.createElement("circle", { cx: "9", cy: "9", r: "8", fill: "currentColor", opacity: ".4", strokeWidth: "0", "data-color": "color-2" }),
        React.createElement("rect", { x: "5.5", y: "5.5", width: "7", height: "7", rx: "1.75", ry: "1.75", strokeWidth: "0", fill: "currentColor" })));
};
//# sourceMappingURL=CircleStop.js.map
export default CircleStop;
