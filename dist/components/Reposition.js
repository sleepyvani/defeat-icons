import React from 'react';
import { Icon } from './Icon.js';
export const Reposition = ({ ...props }) => {
    return (React.createElement(Icon, { size: "18px", ...props },
        React.createElement("circle", { cx: "5", cy: "5", r: "3", fill: "currentColor", opacity: ".4", strokeWidth: "0", "data-color": "color-2" }),
        React.createElement("circle", { cx: "5", cy: "13", r: "3", fill: "currentColor", opacity: ".4", strokeWidth: "0", "data-color": "color-2" }),
        React.createElement("path", { d: "m11.0303,6.7803l1.9697-1.9697,1.9697,1.9697c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-2.5-2.5c-.293-.293-.7676-.293-1.0605,0l-2.5,2.5c-.293.293-.293.7676,0,1.0605s.7676.293,1.0605,0Z", strokeWidth: "0", fill: "currentColor" }),
        React.createElement("path", { d: "m14.9697,11.2197l-1.9697,1.9697-1.9697-1.9697c-.293-.293-.7676-.293-1.0605,0s-.293.7676,0,1.0605l2.5,2.5c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197l2.5-2.5c.293-.293.293-.7676,0-1.0605s-.7676-.293-1.0605,0Z", strokeWidth: "0", fill: "currentColor" })));
};
//# sourceMappingURL=Reposition.js.map
export default Reposition;
