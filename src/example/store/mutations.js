
export default {
  double(state) {
    state.count = state.count * 2;
  },

  increment(state) {
    state.count++;
  },

  decrement(state) {
    state.count--;
  },
  
  add(state, value) {
    state.count += value;
  }
};