import { Component, JSX } from 'solid-js';

export interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  iconNode?: Array<[string, Record<string, any>]>;
}
export declare const Icon: Component<IconProps>;
export default Icon;
