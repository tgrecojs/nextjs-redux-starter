import withRedux from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';
import configureStore from '../../store';
import { compose } from 'redux';
import withLayout from './withLayout';

export default BaseComponent =>
  compose(
    withRedux(configureStore, state => ({ ...state }), {}),
    withLayout
  )(nextReduxSaga(BaseComponent));
