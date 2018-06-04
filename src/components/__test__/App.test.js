import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('App Component Tests', () => {
  it('should show the comment box', () => {
    // Using Enzyme
    const wrapped = shallow(<App />);
    // Find returns an array
    expect(wrapped.find(CommentBox).length).toEqual(1);
  });

  it('should show the comment list', () => {
    // Using Enzyme
    const wrapped = shallow(<App />);
    // Find returns an array
    expect(wrapped.find(CommentList).length).toEqual(1);
  });
});
