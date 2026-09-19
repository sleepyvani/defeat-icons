import { DefineComponent, SVGAttributes } from 'vue';

export interface IconProps extends SVGAttributes {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  iconNode?: Array<[string, Record<string, any>]>;
}
export declare const Icon: DefineComponent<IconProps>;
export default Icon;
