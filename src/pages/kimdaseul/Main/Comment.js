import React from 'react';
import CommentLi from './CommentLi';
import './Main.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      contents: ['더워...'],
      content: '',
    };
  }

  saveValue = e => {
    const { value } = e.target;
    this.setState({
      content: value,
    });
  };

  clickInsertValue = () => {
    const { contents, content } = this.state;
    this.setState({
      contents: contents.concat(content),
      content: '',
    });
  };

  enterInsertValue = e => {
    if (e.key === 'Enter') {
      this.clickInsertValue();
    }
  };

  render() {
    const { contents, content } = this.state;
    const { saveValue, enterInsertValue, clickInsertValue } = this;
    return (
      <div className="comment-list-box">
        <CommentLi commentData={contents} />
        <div className="comment-write">
          <input
            type="text"
            onChange={saveValue}
            onKeyPress={enterInsertValue}
            value={content}
            placeholder="댓글달기"
          ></input>
          <button onClick={clickInsertValue}>게시</button>
        </div>
      </div>
    );
  }
}

export default Comment;
