<!--
 * @Author: 王鑫
 * @Description: 底部栏
 * @Date: 2021-11-22 10:47:32
-->
<template>
  <div class="footer">
    <p>
      <a target="_blank" href="http://beian.miit.gov.cn/"
        >浙ICP备2021034816号</a
      >
    </p>
    <p>本系统由Vue3+Node搭建</p>
    <p>版权所有©2021-2022 Wangabai 保留所有权利。</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'footerBar',
});
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 10px;
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: 0;
  a {
    color: #1890ff;
  }
}
</style>
