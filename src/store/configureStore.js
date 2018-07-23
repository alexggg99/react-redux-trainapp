import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configStore(initialStore) {
  return createStore(
    rootReducer,
    initialStore,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
