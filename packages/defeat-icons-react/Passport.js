import React from 'react';
import { Icon } from './Icon.js';

const iconNode = [["path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M2.5 3.75C2.5 2.23128 3.73069 1 5.25 1H12.75C14.2693 1 15.5 2.23128 15.5 3.75V14.25C15.5 15.7687 14.2693 17 12.75 17H5.25C3.73069 17 2.5 15.7687 2.5 14.25V3.75Z","fill":"currentColor","fillOpacity":"0.4","data-color":"color-2"}],["path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M6.5 7.5C6.5 6.11915 7.61993 5 9 5C10.3801 5 11.5 6.11915 11.5 7.5C11.5 8.88085 10.3801 10 9 10C7.61993 10 6.5 8.88085 6.5 7.5Z","fill":"currentColor"}],["path",{"fillRule":"evenodd","clipRule":"evenodd","d":"M6.25 12.25C6.25 11.8358 6.58579 11.5 7 11.5H11C11.4142 11.5 11.75 11.8358 11.75 12.25C11.75 12.6642 11.4142 13 11 13H7C6.58579 13 6.25 12.6642 6.25 12.25Z","fill":"currentColor"}]];

export const Passport = (props) => React.createElement(Icon, { iconNode, ...props });
export default Passport;
