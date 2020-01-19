import { describe } from 'riteway';
import { reducer, increment, decrement, getValue, initial } from './reducer';

describe('applicaton store', async assert => {
  assert({
    given: 'no args',
    should: 'return the default state',
    actual: reducer(),
    expected: getValue({ counter: reducer() })
  });
  assert({
    given: 'some 3 increments & 1 decrement',
    should: 'return the result',
    actual: [increment(), decrement(), increment(), increment()].reduce(
      reducer,
      initial
    ),
    expected: getValue({ counter: 2 })
  });
});
