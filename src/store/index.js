import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { reducer as countReducer } from '../features/counter/reducer';
import rootSaga from '../shared/sagas';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    // const { composeWithDevTools } = require('redux-devtools-extension');
    return applyMiddleware(...middleware);
  }
  return applyMiddleware(...middleware);
};

function configureStore(
  initialState = {
    countState: {
      currentValue: 0,
      history: []
    }
  }
) {
  const rootReducer = combineReducers({
    countState: countReducer
  });
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([logger, sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
