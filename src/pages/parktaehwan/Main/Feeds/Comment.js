import React from 'react';
import NewComment from './NewComment';

class Comment extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      comments: [],
    };
  }

  componentDidMount() {
    fetch('/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res.first,
        });
      });
  }

  handleInputValue = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleCommentValue = e => {
    const commentNew = {
      id: this.state.comments.length + 1,
      cmtName: 'mekemeke',
      cmtContent: this.state.inputValue,
      like: false,
    };
    // this.state.comments.push(this.state.inputValue);
    this.setState({
      comments: [...this.state.comments, commentNew],
      inputValue: '',
    });
  };

  removeComment = id => {
    const filteredComments = this.state.comments.filter(
      newComment => newComment.id !== id
    );
    this.setState({
      comments: filteredComments,
    });
  };

  clickUpload = e => {
    this.handleCommentValue();
  };

  pressEnter = e => {
    if (e.key === 'Enter') {
      this.handleCommentValue();
    }
  };

  likeComment = id => {
    const newLikedComments = this.state.comments.map(el => {
      return el.id === id ? { ...el, like: !el.like } : el;
    });
    this.setState({ comments: newLikedComments });
  };

  render() {
    const { inputValue, comments } = this.state;
    const {
      removeComment,
      likeComment,
      handleInputValue,
      pressEnter,
      clickUpload,
    } = this;
    return (
      <div className="content">
        <div className="contentComment newComment">
          {comments.map((el, index) => (
            <NewComment
              key={index}
              cmtName={el.cmtName}
              cmtContent={el.cmtContent}
              id={el.id}
              like={el.like}
              removeComment={removeComment}
              likeComment={likeComment}
            />
          ))}
        </div>
        <div className="time">
          <div className="writeTime">10000시간 전</div>
        </div>
        <div className="writeComment">
          <div className="commentInputBox">
            <input
              className="commentInput"
              type="text"
              value={inputValue}
              onChange={handleInputValue}
              placeholder="댓글 달기..."
              onKeyPress={pressEnter}
            />
          </div>
          <div>
            <button
              className="commentBtn"
              onClick={clickUpload}
              disabled={!inputValue}
            >
              게시
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
