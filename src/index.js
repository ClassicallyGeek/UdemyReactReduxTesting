import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/* Provider is a react component that communicates directly with every connect
function we create in our app. The connect function can reach to the provider
and get access to state, or dispatch actions via action creator */
import { createStore } from 'redux';

import reducers from 'reducers'; // when we import a director, we get the index.js file in that dir.
import App from 'components/App';

ReactDOM.render(
  <Provider store={ createStore(reducers, {}) }>
    <App />
  </Provider>, document.querySelector('#root')
);
