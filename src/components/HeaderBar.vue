<!--
 * @Author: 王鑫
 * @Description: 头部栏
 * @Date: 2021-11-22 13:42:47
-->
<template>
  <div class="header">
    <div class="container">
      <img class="logo" src="@/assets/logo.png" alt="" />
      <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false">
        <el-menu-item index="1">首页</el-menu-item>
        <el-sub-menu index="2">
          <template #title>杂项</template>
          <el-menu-item index="2-1">杂项1</el-menu-item>
          <el-menu-item index="2-2">杂项2</el-menu-item>
          <el-menu-item index="2-3">杂项3</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>杂项4</template>
            <el-menu-item index="2-4-1">杂项4-1</el-menu-item>
            <el-menu-item index="2-4-2">杂项4-2</el-menu-item>
            <el-menu-item index="2-4-3">杂项4-3</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3">关于我</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'header',
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  padding: 4px;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  text-align: center;
  :deep(.container) {
    width: 1000px;
    height: 51px;
    line-height: 51px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: auto;
      height: 50px;
    }
  }
}
</style>
