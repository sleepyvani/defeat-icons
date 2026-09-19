import { SvelteComponent } from 'svelte';

export interface IconProps extends svelteHTML.SVGAttributes<SVGSVGElement> {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  iconNode?: Array<[string, Record<string, any>]>;
}
export default class Icon extends SvelteComponent<IconProps> {}
export { Icon };
