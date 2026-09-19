import React from 'react';

export const Icon = ({ size = 18, width, height, title, iconNode = [], children, ...props }) => {
  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: width || size,
      height: height || size,
      viewBox: '0 0 18 18',
      ...props
    },
    title ? React.createElement('title', null, title) : null,
    iconNode.map(([tag, attrs], index) => React.createElement(tag, { key: index, ...attrs })),
    children
  );
};
export default Icon;
