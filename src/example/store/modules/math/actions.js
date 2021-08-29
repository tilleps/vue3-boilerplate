
//
//  context.commit() calls mutation()
//
export default {
  double(context) {
    context.commit("double");
  },

  add(context, value) {
    context.commit("add", value);
  },

  subtract(context, value) {
    context.commit("subtract", value);
  }
};
