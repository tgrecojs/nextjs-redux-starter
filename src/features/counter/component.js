import { useSelector, useDispatch, connect } from 'react-redux';
import t from 'prop-types';
import { compose } from 'ramda';
import { getValue, increment, decrement } from './reducer';
const PastValues = ({ data = [] }) =>
  data.length < 1 ? (
    <p>No history available.</p>
  ) : (
    data.map(({ key, value }) => <li key={key}>{value}</li>)
  );

const Counter = ({ title = 'Counter', count, history }) => {
  const dispatch = useDispatch();
  const onInc = compose(dispatch, increment);

  const onDec = compose(dispatch, decrement);
  return (
    <div>
      <h2>{title}</h2>
      <span>Count: {count}</span>
      <button onClick={() => onInc()}>increment</button>
      <button onClick={() => onDec()}>decrement</button>
      <ul>
        <PastValues data={history} />
      </ul>
    </div>
  );
};

Counter.propTypes = {
  title: t.string
};

export default connect(state => ({
  count: state.countState.currentValue,
  history: state.countState.history
}))(Counter);
