import React from 'react';
import { Icon } from './Icon.js';
export const Palette = ({ ...props }) => {
    return (React.createElement(Icon, { size: "18px", ...props },
        React.createElement("path", { d: "M2 13.25C2 14.7693 3.23128 16 4.75 16H13.25C14.7687 16 16 14.7693 16 13.25V11.5H2V13.25Z", fill: "currentColor" }),
        React.createElement("path", { d: "M16 6.5H2L2 4.75C2 3.23069 3.23128 2 4.75 2H13.25C14.7687 2 16 3.23069 16 4.75V6.5Z", fill: "currentColor", fillOpacity: "0.2", "data-color": "color-2" }),
        React.createElement("path", { d: "M16 6.5H2V11.5H16V6.5Z", fill: "currentColor", fillOpacity: "0.4", "data-color": "color-2" })));
};
//# sourceMappingURL=Palette.js.map
export default Palette;
