<!--
 * @Author: 王鑫
 * @Description: 开场动画
 * @Date: 2021-12-16 11:05:49
-->
<template>
  <div class="welcome-loading">
    <div class="loading" v-if="showLoading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="show-name" v-if="showName">
      <div class="web-name-box">
        <div class="join-web-name-box">
          <span class="web-name">个人博客</span>
        </div>
      </div>
      <div class="line"><div class="join-line"></div></div>
      <div class="user-name-box">
        <div class="join-user-name-box">
          <span class="user-name">王阿白</span>
        </div>
      </div>
    </div>
    <div class="show-web" v-if="showName">
      <div class="rotate-x-box">
        <div class="box"></div>
      </div>
      <div class="click"><span class="click-span">点击进入</span></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue';
export default defineComponent({
  name: 'welcomeAnimation',
  setup() {
    const state = reactive({
      showLoading: true,
      showName: false,
    });
    setInterval(function () {
      state.showLoading = false;
      state.showName = true;
    }, 2000);
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
.welcome-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  .loading {
    width: 180px;
    height: 20px;
    span {
      display: inline-block;
      width: 20px;
      height: 100%;
      background: lightgreen;
      animation: load 1s linear infinite;
      -webkit-animation: load 1s linear infinite;
    }
    span:nth-child(2) {
      animation-delay: 0.2s;
      -webkit-animation-delay: 0.2s;
    }
    span:nth-child(3) {
      animation-delay: 0.4s;
      -webkit-animation-delay: 0.4s;
    }
    span:nth-child(4) {
      animation-delay: 0.6s;
      -webkit-animation-delay: 0.6s;
    }
    span:nth-child(5) {
      animation-delay: 0.8s;
      -webkit-animation-delay: 0.8s;
    }
    span:nth-child(6) {
      animation-delay: 1s;
      -webkit-animation-delay: 1s;
    }
    span:nth-child(7) {
      animation-delay: 1.2s;
      -webkit-animation-delay: 1.2s;
    }
    span:nth-child(8) {
      animation-delay: 1.4s;
      -webkit-animation-delay: 1.4s;
    }
    span:nth-child(8) {
      animation-delay: 1.6s;
      -webkit-animation-delay: 1.6s;
    }
    span:nth-child(8) {
      animation-delay: 1.8s;
      -webkit-animation-delay: 1.8s;
    }
  }
  @keyframes load {
    0%,
    100% {
      height: 20px;
      background: lightgreen;
    }
    50% {
      height: 20px;
      margin: -10px 0;
      background: lightblue;
    }
  }
  @-webkit-keyframes load {
    0%,
    100% {
      height: 20px;
      background: lightgreen;
    }
    50% {
      height: 20px;
      margin: -10px 0;
      background: lightblue;
    }
  }
  .show-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    height: 20px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    color: #51a9ff;
    .join-web-name-box {
      opacity: 0;
      animation: translate-wname-join 1s linear forwards;
    }
    .web-name {
      display: block;
      animation: rotate-name-left 1s linear 1s forwards;
      // -webkit-animation: rotate-name-left 1s linear forwards;
    }
    .web-name-box {
      animation: translate-name-left 1s linear 2s forwards;
    }
    .join-user-name-box {
      opacity: 0;
      animation: translate-uname-join 1s linear forwards;
    }
    .user-name {
      display: block;
      animation: rotate-name-right 1s linear 1s forwards;
    }
    .user-name-box {
      animation: translate-name-right 1s linear 2s forwards;
    }
    .line {
      width: 2px;
      height: 20px;
      background-color: #51a9ff;
      animation: line 1s linear 2s forwards;
    }
  }
  @keyframes rotate-name-left {
    0%,
    50% {
      transform: rotate(-360deg);
    }
    100% {
      transform: rotate(-720deg);
    }
  }
  @keyframes rotate-name-right {
    0%,
    50% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(720deg);
    }
  }
  @keyframes translate-name-left {
    50% {
      transform: translateX(25px);
      opacity: 1;
    }
    100% {
      transform: translateX(50px);
      opacity: 0;
    }
  }
  @keyframes translate-name-right {
    50% {
      transform: translateX(-25px);
      opacity: 1;
    }
    100% {
      transform: translateX(-50px);
      opacity: 0;
    }
  }
  @keyframes line {
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes translate-wname-join {
    50% {
      transform: translateX(25px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(50px);
      opacity: 1;
    }
  }
  @keyframes translate-uname-join {
    50% {
      transform: translateX(-25px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(-50px);
      opacity: 1;
    }
  }
  .show-web {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .rotate-x-box {
      position: absolute;
      top: 50%;
      left: 50%;
      animation: rotate-x-box 0.5s linear 3.5s forwards;
      .box {
        opacity: 0;
        animation: line-box 0.5s linear 3s forwards;
      }
    }
    .click {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      animation: click 0.5s linear 4s forwards;
      text-align: center;
      .click-span {
        opacity: 0;
        animation: click-span 0.5s linear 5s forwards;
      }
    }
  }
  @keyframes line-box {
    0% {
      width: 2px;
      height: 20px;
      background-color: #51a9ff;
      opacity: 1;
    }
    100% {
      width: 20px;
      height: 20px;
      background-color: #51a9ff;
      transform: rotate(360deg);
      opacity: 1;
    }
  }
  @keyframes rotate-x-box {
    0% {
      opacity: 1;
    }
    99% {
      opacity: 1;
      transform: rotateX(360deg);
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes click {
    0% {
      width: 20px;
      height: 20px;
      background-color: #51a9ff;
      opacity: 1;
    }
    100% {
      width: 280px;
      height: 30px;
      border: 4px solid #51a9ff;
      opacity: 1;
    }
  }
  @keyframes click-span {
    0% {
      opacity: 0;
    }
    100% {
      color: #51a9ff;
      cursor: pointer;
      opacity: 1;
    }
  }
}
</style>
