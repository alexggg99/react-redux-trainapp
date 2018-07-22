import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import invariant from 'redux-immutable-state-invariant';

export default function configStore(initialStore) {
  return createStore(
    rootReducer,
    initialStore
  );
}
