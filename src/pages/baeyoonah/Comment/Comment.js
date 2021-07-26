import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: '',
      id: '',
      comment: [''],
    };
  }

  checkInput = e => {
    this.setState({
      commentInput: e.target.value,
    });
  };

  inputToComment = () => {
    this.setState({
      id: 'wecode_bootcamp',
      comment: this.state.comment.concat(this.state.commentInput),
      commentInput: '',
    });
  };

  enterPress = e => {
    if (e.key === 'Enter') {
      this.inputToComment();
    }
    e.target.value = '';
  };

  render() {
    const commentList = this.state.comment.map(commentarray => (
      <li>
        <span className="newCommentid">{this.state.id}</span>
        <span className="newComments">{commentarray}</span>
      </li>
    ));
    return (
      <div className="Comment">
        <div className="newComment">{commentList}</div>
        <div className="newText">
          <input
            id="typingText"
            onChange={this.checkInput}
            onKeyPress={this.enterPress}
            type="text"
            placeholder="댓글 달기...."
          />
          <button onClick={this.checkInput} id="button">
            게시
          </button>
        </div>
      </div>
    );
  }
}

export default Comment;
