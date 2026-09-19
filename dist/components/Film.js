import React from 'react';
import { Icon } from './Icon.js';
export const Film = ({ ...props }) => {
    return (React.createElement(Icon, { size: "18px", ...props },
        React.createElement("path", { d: "M1 13H4V16H3.75C2.23119 16 1 14.7688 1 13.25L1 13Z", fill: "currentColor" }),
        React.createElement("path", { d: "M1 5H4V2H3.75C2.23119 2 1 3.23119 1 4.75V5Z", fill: "currentColor" }),
        React.createElement("path", { d: "M14 16H14.25C15.7688 16 17 14.7688 17 13.25V13H14V16Z", fill: "currentColor" }),
        React.createElement("path", { d: "M14 2H14.25C15.7688 2 17 3.23119 17 4.75V5H14L14 2Z", fill: "currentColor" }),
        React.createElement("path", { d: "M8.25 16H5.5V13H8.25V16Z", fill: "currentColor" }),
        React.createElement("path", { d: "M8.25 2H5.5V5H8.25V2Z", fill: "currentColor" }),
        React.createElement("path", { d: "M12.5 13H9.75L9.75 16H12.5V13Z", fill: "currentColor" }),
        React.createElement("path", { d: "M12.5 5H9.75L9.75 2H12.5V5Z", fill: "currentColor" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1 5H8.25V13H1V5ZM17 13V5H9.75V13H17Z", fill: "currentColor", fillOpacity: "0.4", "data-color": "color-2" })));
};
//# sourceMappingURL=Film.js.map
export default Film;
