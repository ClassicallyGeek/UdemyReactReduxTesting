import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  // making it a bound arrow function- instead of bind?
  handleChange = (event) => {
    this.setState({ comment:event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault(); // Stop the form from submitting itself & reloading the page.

    // TODO Call an action creator & Save the comment

    this.setState( {comment: '' });
  }

  render() {
    return (
      <form onSubmit = { this.handleSubmit }>
        <h4>Enter a Comment</h4>
        <textarea value={ this.state.comment } onChange={ this.handleChange }/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  };
}

export default CommentBox;
