import { h } from 'vue';
import Icon from '../Icon.js';

const iconNode = [["path",{"d":"m12,15.25c0-1.792,1.458-3.25,3.25-3.25.4429,0,.8649.0903,1.25.2515v-6.7515H1.5v8.25c0,1.5186,1.2307,2.75,2.75,2.75h8.0015c-.1612-.3853-.2515-.8071-.2515-1.25Z","fill":"currentColor","fill-rule":"evenodd","opacity":".4","stroke-width":"0","data-color":"color-2"}],["path",{"d":"m6.5,1.25c0-.4142-.3358-.75-.75-.75s-.75.3358-.75.75v1.25h-.75c-1.5192,0-2.75,1.2308-2.75,2.75v1.25h15v-1.25c0-1.5192-1.2308-2.75-2.75-2.75h-.75v-1.25c0-.4142-.3358-.75-.75-.75s-.75.3358-.75.75v1.25h-5v-1.25Z","fill-rule":"evenodd","stroke-width":"0","fill":"currentColor"}],["circle",{"cx":"15.25","cy":"15.25","r":"1.75","stroke-width":"0","fill":"currentColor"}]];

export const CalendarUpdate = (props, context) => h(Icon, { ...props, iconNode }, context ? context.slots : undefined);
CalendarUpdate.props = ['size', 'width', 'height'];
export default CalendarUpdate;
