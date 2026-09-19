import React from 'react';
import { Icon } from './Icon.js';
export const SlashCircle = ({ ...props }) => {
    return (React.createElement(Icon, { size: "18px", ...props },
        React.createElement("circle", { cx: "9", cy: "9", r: "8", fill: "currentColor", opacity: ".4", strokeWidth: "0", "data-color": "color-2" }),
        React.createElement("path", { d: "m6.75,12c-.1919,0-.3838-.0732-.5303-.2197-.293-.293-.293-.7676,0-1.0605l4.5-4.5c.293-.293.7676-.293,1.0605,0s.293.7676,0,1.0605l-4.5,4.5c-.1465.1465-.3384.2197-.5303.2197Z", strokeWidth: "0", fill: "currentColor" })));
};
//# sourceMappingURL=SlashCircle.js.map
export default SlashCircle;
