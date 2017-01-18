import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './root';

import configureStore from './store/configureStore';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>, document.querySelector('#container')
);

if (module.hot) {
  module.hot.accept('./root', () => {
    const newRoot = require('./root').default();

    render(
      <AppContainer>
        <newRoot store={store} />
      </AppContainer>
    );
  });
}
