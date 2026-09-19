import React from 'react';
import { Icon } from './Icon.js';
export const ChartPie = ({ ...props }) => {
    return (React.createElement(Icon, { size: "18px", ...props },
        React.createElement("path", { d: "M17 9H9.75C9.33579 9 9 8.66421 9 8.25V1C13.4183 1 17 4.58172 17 9Z", fill: "currentColor" }),
        React.createElement("path", { d: "M9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C13.4183 17 17 13.4183 17 9H9.75C9.33579 9 9 8.66421 9 8.25V1Z", fill: "currentColor", fillOpacity: "0.4", "data-color": "color-2" })));
};
//# sourceMappingURL=ChartPie.js.map
export default ChartPie;
