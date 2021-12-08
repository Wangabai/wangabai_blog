/*
 * @Author: 王鑫
 * @Description: 入口文件
 * @Date: 2021-11-17 09:54:39
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus'; // 全局引入ElementPlus
import commonGroupe from '@/components/'; // 注册全局组件
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import router from './router';
import { store, key } from './store';
import '@/style/index.scss'; // 引入公共样式
import App from './App.vue';

const app = createApp(App);

app
  .use(store, key)
  .use(router)
  .use(ElementPlus, { size: 'small', zIndex: 3000, locale: zhCn })
  .use(commonGroupe)
  .mount('#app');
