import React from 'react';
import { Icon } from './Icon.js';
export const SquareLayoutGrid = ({ ...props }) => {
    return (React.createElement(Icon, { size: "18px", ...props },
        React.createElement("path", { d: "M9 9V2H4.75012C3.23312 2 2.00012 3.233 2.00012 4.75V9H9Z", fill: "currentColor" }),
        React.createElement("path", { d: "M9 9H16.0001V4.75C16.0001 3.233 14.7671 2 13.2501 2H9V9Z", fill: "currentColor", fillOpacity: "0.4", "data-color": "color-2" }),
        React.createElement("path", { d: "M9 9V16H13.2501C14.7671 16 16.0001 14.767 16.0001 13.25V9H9Z", fill: "currentColor", fillOpacity: "0.2", "data-color": "color-2" }),
        React.createElement("path", { d: "M9 9L2.00012 9V13.25C2.00012 14.767 3.23312 16 4.75012 16H9V9Z", fill: "currentColor", fillOpacity: "0.4", "data-color": "color-2" })));
};
//# sourceMappingURL=SquareLayoutGrid.js.map
export default SquareLayoutGrid;
