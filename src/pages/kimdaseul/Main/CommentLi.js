import React from 'react';
import './Main.scss';

class CommentLi extends React.Component {
  render() {
    const commentLi = this.props.commentData.map((list, index) => (
      <li key={index}>
        <span>cocacola</span>
        <span>{list}</span>
      </li>
    ));
    return <ul className="comment-lists">{commentLi}</ul>;
  }
}

export default CommentLi;
