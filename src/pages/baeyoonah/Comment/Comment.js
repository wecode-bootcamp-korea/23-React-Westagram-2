import React from 'react';
import './Comment.scss';

class NewComment extends React.Component {
  render() {
    // const newArray = this.props.newComment.map((commentarray, index) => (
    //   <li key={index}>
    //     <span className="newCommentid">{this.props.nickname}</span>
    //     <span className="newComments">{commentarray}</span>
    //   </li>
    // ));
    return (
      <div className="comment">
        <div className="newComment">
          <span className="newCommentid">{this.props.nickname}</span>
          <span className="newComments">{this.props.comment}</span>
        </div>
      </div>
    );
  }
}

export default NewComment;
