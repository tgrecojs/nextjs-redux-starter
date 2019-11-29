import { useSelector, useDispatch } from 'react-redux';
import t from 'prop-types';
import { compose } from 'ramda';
import { getValue, increment, decrement } from './reducer';
const Counter = ({ title = 'Counter' }) => {
  const state = useSelector(({ counter }) => getValue({ counter }));
  const dispatch = useDispatch();
  const onInc = compose(dispatch, increment);

  const onDec = compose(dispatch, decrement);
  console.log({ state });
  return (
    <div>
      <h2>{title}</h2>
      <h4>Count: {state}</h4>
      <button onClick={() => onInc()}>increment</button>
      <button onClick={() => onDec()}>decrement</button>
    </div>
  );
};

Counter.propTypes = {
  title: t.string
};

export default Counter;
