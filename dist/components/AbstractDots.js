import React from 'react';
import { Icon } from './Icon.js';
export const AbstractDots = ({ ...props }) => {
    return (React.createElement(Icon, { size: "18px", ...props },
        React.createElement("circle", { cx: "4.5", cy: "4.5", r: "2", strokeWidth: "0", fill: "currentColor" }),
        React.createElement("circle", { cx: "9", cy: "9", r: "2", strokeWidth: "0", fill: "currentColor" }),
        React.createElement("circle", { cx: "13.5", cy: "4.5", r: "2", strokeWidth: "0", fill: "currentColor" }),
        React.createElement("circle", { cx: "13.5", cy: "13.5", r: "2", strokeWidth: "0", fill: "currentColor" }),
        React.createElement("circle", { cx: "4.5", cy: "13.5", r: "2", strokeWidth: "0", fill: "currentColor" }),
        React.createElement("circle", { cx: "9", cy: "2", r: "1", fill: "currentColor", opacity: ".4", strokeWidth: "0", "data-color": "color-2" }),
        React.createElement("circle", { cx: "2", cy: "9", r: "1", fill: "currentColor", opacity: ".4", strokeWidth: "0", "data-color": "color-2" }),
        React.createElement("circle", { cx: "9", cy: "16", r: "1", fill: "currentColor", opacity: ".4", strokeWidth: "0", "data-color": "color-2" }),
        React.createElement("circle", { cx: "16", cy: "9", r: "1", fill: "currentColor", opacity: ".4", strokeWidth: "0", "data-color": "color-2" })));
};
//# sourceMappingURL=AbstractDots.js.map
export default AbstractDots;
