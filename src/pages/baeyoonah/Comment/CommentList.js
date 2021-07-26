import React from 'react';
import Comment from './Comment';
import './CommentList.scss';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: '',
      id: '',
      comment: [],
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
      // commentInput: '',
    });
    console.log(this.state.id);
  };

  enterPress = e => {
    if (e.key === 'Enter') {
      this.inputToComment();
    }
    e.target.value = '';
  };

  render() {
    return (
      <div className="CommentList">
        <Comment id={this.state.id} comment={this.state.comment} />
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

export default CommentList;
