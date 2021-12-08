/*
 * @Author: 王鑫
 * @Description: vuex 状态管理
 * @Date: 2021-11-17 10:29:03
 */
import { InjectionKey } from 'vue';
import { createStore, Store } from 'vuex';

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
