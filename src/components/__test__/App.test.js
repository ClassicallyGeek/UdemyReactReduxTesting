import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

describe('App Component Tests', () => {
  it('should render component', () => {
    const div = document.createElement('div');

    // Can we render an instance of App Component?
    ReactDOM.render(<App />, div);

    // "Clean up" Remove component from the JSDOM
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should show the comment box', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);

    // Look inside div and check to see if CommentBox is in there?
    expect(div.innerHTML).toContain('Comment Box');

    ReactDOM.unmountComponentAtNode(div);
  });
});
