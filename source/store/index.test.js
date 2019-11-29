import { describe } from 'riteway';
import { rootReducer } from './index';

describe('applicaton store', async assert => {
  assert({
    given: 'no args',
    should: 'return the default state',
    actual: rootReducer(),
    expected: { counter: 0 }
  });
});
