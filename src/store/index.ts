import Vue from 'vue';
import Vuex from 'vuex';
import VUEX_editor from './editor'
import VUEX_drag from './dragEvent'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    VUEX_editor,
    VUEX_drag
  },
});
