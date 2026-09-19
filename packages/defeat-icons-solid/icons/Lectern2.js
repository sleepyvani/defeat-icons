import { createComponent, mergeProps } from 'solid-js/web';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"m16.3804,7.0874l-1.4316-3.5c-.2705-.6606-.9062-1.0874-1.6201-1.0874H4.6714c-.7139,0-1.3496.4268-1.6201,1.0874l-1.4316,3.5c-.2212.541-.1587,1.1528.167,1.6382.3257.4849.8687.7744,1.4531.7744h11.5205c.5845,0,1.1274-.2896,1.4531-.7744.3257-.4854.3882-1.0972.167-1.6382Z","fill":"currentColor","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m12.75,14.5h-3v-5h-1.5v5h-3c-.4141,0-.75.3359-.75.75s.3359.75.75.75h7.5c.4141,0,.75-.3359.75-.75s-.3359-.75-.75-.75Z","stroke-width":"0","fill":"currentColor"}]];

export const Lectern2 = (props) => createComponent(Icon, mergeProps(props, { iconNode }));
export default Lectern2;
