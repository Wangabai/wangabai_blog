/*
 * @Author: 王鑫
 * @Description: 路由配置
 * @Date: 2021-11-17 10:43:34
 */
import { createRouter, createWebHistory } from 'vue-router';

// 路由列表
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index/index.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/list/index.vue'),
  },
];

// 导出路由
export default createRouter({
  history: createWebHistory(),
  routes,
});
