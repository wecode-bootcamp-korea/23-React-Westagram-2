import React from 'react';
import './Comment.scss';

class comment extends React.Component {
  render() {
    const newArray = this.props.comment.map((commentarray, index) => (
      <li key={index}>
        <span className="newCommentid">{this.props.nickname}</span>
        <span className="newComments">{commentarray}</span>
      </li>
    ));
    return <div className="CommentList">{newArray}</div>;
  }
}

export default comment;
