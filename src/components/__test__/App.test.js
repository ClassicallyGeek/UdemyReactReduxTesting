import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';

describe('App Component Tests', () => {
  it('should show the comment box', () => {
    // Using Enzyme
    const wrapped = shallow(<App />);
    // Find returns an array
    expect(wrapped.find(CommentBox).length).toEqual(1);
  });
});
