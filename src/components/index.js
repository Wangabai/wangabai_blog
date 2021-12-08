/*
 * @Author: 王鑫
 * @Description: 全局公共组件注册
 * @Date: 2021-11-22 10:57:51
 */
import CeShi from './Ceshi.vue';
import FooterBar from './FooterBar.vue';
import HeaderBar from './HeaderBar.vue';

const commonGroupe = {
  install: function (Vue) {
    Vue.component('CeShi', CeShi);
    Vue.component('FooterBar', FooterBar);
    Vue.component('HeaderBar', HeaderBar);
  },
};

export default commonGroupe;
