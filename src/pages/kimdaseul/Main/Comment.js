import React from 'react';
import './Main.scss';

class Comment extends React.Component {
  render() {
    return (
      <li>
        <span>{this.props.name}</span>
        <span>{this.props.content}</span>
      </li>
    );
  }
}

export default Comment;
