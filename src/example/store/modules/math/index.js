import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";


export default {
  strict: true,
  namespaced: true,
  modules: {},
  state () {
    return {
      total: 1
    };
  },
  getters: getters,
  mutations: mutations,
  actions: actions
};