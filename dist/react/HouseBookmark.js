import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M12 11.75C12 10.7838 12.7838 10 13.75 10H16.25C17.2162 10 18 10.7838 18 11.75V17.25C18 17.5533 17.8173 17.8268 17.537 17.9429C17.2568 18.059 16.9342 17.9948 16.7197 17.7803L15 16.0607L13.2803 17.7803C13.0658 17.9948 12.7432 18.059 12.463 17.9429C12.1827 17.8268 12 17.5533 12 17.25V11.75Z","fill":"currentColor"}],["path",{"d":"M7.94127 1.36281C8.56694 0.887445 9.4333 0.886569 10.0591 1.36312L15.3088 5.35287C15.7448 5.68398 16 6.20008 16 6.746V8.5H13.75C11.9554 8.5 10.5 9.95536 10.5 11.75V17H4.75C3.23079 17 2 15.7692 2 14.25V6.746C2 6.19867 2.2559 5.68346 2.69155 5.3526L7.94127 1.36281Z","fill":"currentColor","fillOpacity":"0.4","data-color":"color-2"}]];

export const HouseBookmark = (props) => React.createElement(Icon, { iconNode, ...props });
export default HouseBookmark;
