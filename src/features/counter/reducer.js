import autodux, { id } from 'autodux';
import cuid from 'cuid';
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
  initial: { currentValue: 0, history: [] },

  // No need to implement switching logic -- it's
  // done for you.
  actions: {
    increment: state => ({
      currentValue: state.currentValue + 1,
      history: state.history.concat({ key: cuid(), value: state.currentValue })
    }),
    decrement: state => ({
      currentValue: state.currentValue - 1,
      history: state.history.concat({ key: cuid(), value: state.currentValue })
    }),
    multiply: (state, payload) => state * payload
  },

  // No need to select the state slice -- it's done for you.
  selectors: {
    getValue: id
  }
});
