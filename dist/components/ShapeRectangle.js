import React from 'react';
import { Icon } from './Icon.js';
export const ShapeRectangle = ({ ...props }) => {
    return (React.createElement(Icon, { size: "18px", ...props },
        React.createElement("rect", { x: "1", y: "3", width: "16", height: "12", rx: "2.75", ry: "2.75", fill: "currentColor", opacity: ".4", strokeWidth: "0", "data-color": "color-2" })));
};
//# sourceMappingURL=ShapeRectangle.js.map
export default ShapeRectangle;
