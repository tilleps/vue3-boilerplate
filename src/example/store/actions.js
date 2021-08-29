
export default {
  double(context) {
    // context.commit() calls mutation()
    context.commit("double");
  },

  add(context, value) {
    // context.commit() calls mutation()
    context.commit("add", value);
  }
};

