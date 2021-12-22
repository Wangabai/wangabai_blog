<!--
 * @Author: 王鑫
 * @Description: 首页
 * @Date: 2021-11-17 10:45:14
-->
<template>
  <HeaderBar></HeaderBar>
  <div class="content">
    <p>欢迎来到王阿白的博客~</p>
    <p>目前啥也没有</p>
    <!-- <p>放张我儿子的照片压阵</p> -->
    <!-- <img
      style="cursor: pointer"
      src="@/assets/myson.png"
      v-if="showMySon"
      @click="showMySon = false"
    /> -->
    <!-- <p v-if="!showMySon">我也受不了了，谢谢你隐藏</p> -->
    <!-- <p>注意：受不了了可以点击图片隐藏</p> -->
  </div>
  <FooterBar></FooterBar>
  <div class="welcome" v-if="status" @click="welcome">
    <WelcomeLoading></WelcomeLoading>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import WelcomeLoading from './components/welcome.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    WelcomeLoading,
  },
  setup() {
    const state = reactive({
      status: sessionStorage.getItem('welcome') || true,
      showMySon: true,
    });
    // 判断是否第一次打开首页
    state.status = state.status === 'false' ? false : true;
    // 点击清除开场动画
    const welcome = () => {
      state.status = false;
      sessionStorage.setItem('welcome', 'false');
    };
    const method = {
      welcome,
    };
    return {
      ...toRefs(state),
      ...method,
    };
  },
});
</script>
<style lang="scss" scoped>
.content {
  width: 800px;
  margin: 0 auto;
}
.welcome {
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: #fff;
  width: 100%;
  height: 100%;
}
</style>
