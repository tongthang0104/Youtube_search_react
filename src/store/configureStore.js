import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import promise from 'redux-promise';

export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
  const store = createStoreWithMiddleware(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
