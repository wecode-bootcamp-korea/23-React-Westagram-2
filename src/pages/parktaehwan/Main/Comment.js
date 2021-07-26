import React from 'react';
import NewComment from './NewComment';

class Comment extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      commentList: [],
      comments: [],
      disabled: true,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
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
          {/* <NewComment
            cmtName="mekemeke"
            cmtContent="한 것도 없는데 벌써 9시..."
          />
          <NewComment
            cmtName="wecode_mento"
            cmtContent="더 공부하세요 더 노력하세요"
          /> */}
          {this.state.commentList.map(el => (
            <NewComment cmtName={el.cmtName} cmtContent={el.cmtContent} />
          ))}
          {this.state.comments.map(el => (
            <NewComment cmtName="mekemeke" cmtContent={el} />
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
