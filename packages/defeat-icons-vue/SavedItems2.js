import { h } from 'vue';
import Icon from './Icon.js';

const iconNode = [["rect",{"x":"2","y":"2","width":"14","height":"14","rx":"2.75","ry":"2.75","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m12.5,2h-4.5v6.75c0,.2021.1221.3848.3086.4619.1846.0786.4014.0347.5449-.1084l1.3965-1.3965,1.3965,1.3965c.0957.0957.2236.1465.3535.1465.0645,0,.1299-.0122.1914-.0381.1865-.0771.3086-.2598.3086-.4619V2Z","stroke-width":"0","fill":"currentColor"}]];

export const SavedItems2 = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
SavedItems2.props = ['size', 'width', 'height'];
export default SavedItems2;
