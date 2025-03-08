import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { userKey } from './keys';

const app = createApp(App);
const app2 = createApp(App);

app.config.globalProperties.msg = 'hello'; // 全局属性

app.provide(userKey, { name: 'lywq' });

app.mount('#app');
app2.mount('#app2');
