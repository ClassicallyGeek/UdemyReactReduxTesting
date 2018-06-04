import React from 'react';
/* Provider is a react component that communicates directly with every connect
function we create in our app. The connect function can reach to the provider
and get access to state, or dispatch actions via action creator */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

// initialState - an optional starting State. Helpful for Testing.
export default ({children, initialState = {}}) => {
  return (
    <Provider store={ createStore(reducers, initialState) } >
      { children }
    </Provider>
  );
}
