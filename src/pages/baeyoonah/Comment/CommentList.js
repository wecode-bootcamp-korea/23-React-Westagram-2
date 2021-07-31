import React from 'react';
import Comment from './Comment';
import './CommentList.scss';

class commentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: '',
      nickname: '',
      comment: [],
    };
  }

  checkInput = e => {
    this.setState({
      commentInput: e.target.value,
    });
  };
  // commentlist에서 input 값을 보고 map을 돌릴지 commnent에서 props 해온 input 갯수로 할지 결정하기
  inputToComment = () => {
    const { comment, commentInput } = this.state;
    this.setState({
      nickname: 'wecode_bootcamp',
      comment: comment.concat(commentInput),
    });
  };

  enterPress = e => {
    if (e.key === 'Enter') {
      this.inputToComment();
    }
    e.target.value = '';
  };

  render() {
    const { nickname, comment } = this.state;
    return (
      <div className="CommentList">
        <Comment nickname={nickname} comment={comment} />
        <div className="newText">
          <input
            id="typingText"
            onChange={this.checkInput}
            onKeyPress={this.enterPress}
            type="text"
            placeholder="댓글 달기...."
          />
          <button onClick={this.checkInput}>게시</button>
        </div>
      </div>
    );
  }
}

export default commentList;
