
export default {
  double(state) {
    state.total = state.total * 2;
  },

  half(state) {
    state.total = state.total / 2;
  },

  increment(state) {
    state.total++;
  },

  decrement(state) {
    state.total--;
  },

  add(state, value) {
    state.total += value;
  },

  subtract(state, value) {
    state.total -= value;
  }
};