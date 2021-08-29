import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";


import modules from "./modules/index.js";


// Create a new store instance
export default {
  strict: true,
  modules: modules,
  state () {
    return {
      count: 1
    };
  },
  getters: getters,
  mutations: mutations,
  actions: actions
};
