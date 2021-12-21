<!--
 * @Author: 王鑫
 * @Description: 测试路由
 * @Date: 2021-11-17 10:45:14
-->
<template>
  <HeaderBar></HeaderBar>
  <div class="content">
    <p>欢迎来到王阿白的博客~</p>
    测试下自动代码部署9
    <CeShi></CeShi>
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
