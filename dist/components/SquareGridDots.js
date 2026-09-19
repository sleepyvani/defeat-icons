import React from 'react';
import { Icon } from './Icon.js';
export const SquareGridDots = ({ ...props }) => {
    return (React.createElement(Icon, { size: "18px", ...props },
        React.createElement("rect", { x: "2", y: "2", width: "14", height: "14", rx: "2.75", ry: "2.75", fill: "currentColor", opacity: ".4", strokeWidth: "0", "data-color": "color-2" }),
        React.createElement("circle", { cx: "5.5", cy: "9", r: "1", strokeWidth: "0", fill: "currentColor" }),
        React.createElement("circle", { cx: "9", cy: "12.5", r: "1", strokeWidth: "0", fill: "currentColor" }),
        React.createElement("circle", { cx: "9", cy: "9", r: "1", strokeWidth: "0", fill: "currentColor" }),
        React.createElement("circle", { cx: "9", cy: "5.5", r: "1", strokeWidth: "0", fill: "currentColor" }),
        React.createElement("circle", { cx: "12.5", cy: "9", r: "1", strokeWidth: "0", fill: "currentColor" })));
};
//# sourceMappingURL=SquareGridDots.js.map
export default SquareGridDots;
