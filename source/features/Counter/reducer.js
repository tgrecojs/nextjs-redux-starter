import autodux, { id } from 'autodux';

export const {
  reducer,
  initial,
  slice,
  actions: { increment, decrement, multiply },
  selectors: { getValue }
} = autodux({
  // the slice of state your reducer controls
  slice: 'counter',

  // The initial value of your reducer state
  initial: 0,

  // No need to implement switching logic -- it's
  // done for you.
  actions: {
    increment: state => state + 1,
    decrement: state => state - 1,
    multiply: (state, payload) => state * payload
  },

  // No need to select the state slice -- it's done for you.
  selectors: {
    getValue: id
  }
});
