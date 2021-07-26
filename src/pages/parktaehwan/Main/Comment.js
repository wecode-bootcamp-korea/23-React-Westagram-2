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

  handleInputValue = e => {
    this.setState({
      inputValue: e.target.value,
      disabled: false,
    });
  };

  handleCommentValue = e => {
    this.state.comments.push(this.state.inputValue);
    this.setState({
      comments: this.state.comments,
      inputValue: '',
      disabled: true,
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

  render() {
    console.log(this.state);
    return (
      <div className="content">
        <div className="contentComment newComment">
          <div className="comment">
            <div className="commentLeft">
              <a href="#" className="commentWriter">
                wecode_bootcamp
              </a>{' '}
              <span>한 것도 없는데 벌써 9시..</span>
            </div>
            <div className="commentHeartBox">
              <img
                alt="like"
                src="/images/Nav/like.png"
                className="commentHeart"
              />
            </div>
          </div>
          <div className="comment">
            <div className="commentLeft">
              <a href="#" className="commentWriter">
                wecode_bootcamp
              </a>{' '}
              <span>한 것도 없는데 벌써 10시..</span>
            </div>
            <div className="commentHeartBox">
              <img
                alt="like"
                src="/images/Nav/like.png"
                className="commentHeart"
              />
            </div>
          </div>
          {this.state.comments.map(el => (
            <div className="comment">
              <div className="commentLeft">
                <a href="#" className="commentWriter">
                  wecode_bootcamp
                </a>
                <span>{el}</span>
              </div>
              <div className="commentHeartBox">
                <img
                  alt="like"
                  src="/images/Nav/like.png"
                  className="commentHeart"
                />
              </div>
            </div>
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
