import React from 'react';
import NewComment from './NewComment';

class Comment extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      comments: [],
      disabled: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
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
      disabled: false,
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
      disabled: true,
    });
  };

  removeComment = id => {
    const filteredComments = this.state.comments.filter(
      NewComment => NewComment.id !== id
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
      if (el.id === id) {
        el.like = !el.like;
      }
      return el;
    });
    this.setState({ comments: newLikedComments });
  };

  render() {
    return (
      <div className="content">
        <div className="contentComment newComment">
          {this.state.comments.map((el, index) => (
            <NewComment
              key={index}
              cmtName={el.cmtName}
              cmtContent={el.cmtContent}
              id={el.id}
              like={el.like}
              removeComment={this.removeComment}
              likeComment={this.likeComment}
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
              value={this.state.inputValue}
              onChange={e => {
                this.handleInputValue(e);
              }}
              placeholder="댓글 달기..."
              onKeyPress={this.pressEnter}
            />
          </div>
          <div>
            <button
              className="commentBtn"
              onClick={this.clickUpload}
              disabled={this.state.disabled}
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
