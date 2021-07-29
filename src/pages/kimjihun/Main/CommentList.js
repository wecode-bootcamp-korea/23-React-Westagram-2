import React, { Component } from 'react';
import './Main.scss';

class CommentList extends Component {
  render() {
    return (
      <ul className="comment-ul">
        {this.props.commentList.map(list => (
          <li key={list.id}>
            {' '}
            <b>wecode-founder&nbsp;</b>
            {list.comment}{' '}
          </li>
        ))}
      </ul>
    );
  }
}

export default CommentList;
