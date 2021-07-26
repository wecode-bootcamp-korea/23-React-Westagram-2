import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   id: '',
    //   comment: [''],
    // };
  }

  render() {
    return (
      <div className="CommentList">
        <li>
          <span className="newCommentid">{this.props.id}</span>
          <span className="newComments">{this.props.comment}</span>
        </li>
      </div>
    );
  }
}

export default Comment;
