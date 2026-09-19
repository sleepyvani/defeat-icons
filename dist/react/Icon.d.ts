import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  title?: string;
  iconNode?: Array<[string, Record<string, any>]>;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
