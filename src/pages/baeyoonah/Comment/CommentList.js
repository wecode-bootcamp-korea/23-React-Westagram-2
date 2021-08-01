import React from 'react';
import Comment from './Comment';
import './CommentList.scss';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: '',
      newComment: [],
      nickname: '',
      commentList: [],
      commentValue: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  checkInput = e => {
    this.setState({
      commentInput: e.target.value,
    });
  };

  inputToComment = () => {
    const { newComment, commentInput } = this.state;
    this.setState({
      nickname: 'wecode_bootcamp',
      newComment: newComment.concat(commentInput),
    });
  };

  enterPress = e => {
    if (e.key === 'Enter') {
      this.inputToComment();
    }
    e.target.value = '';
  };

  render() {
    const { commentValue, commentList } = this.state;
    return (
      <div className="commentList">
        {commentList.map(comment => {
          return (
            <Comment
              key={comment.id}
              nickname={comment.userName}
              comment={comment.content}
            />
          );
        })}

        <div className="newText">
          <input
            id="typingText"
            value={commentValue}
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

export default CommentList;
