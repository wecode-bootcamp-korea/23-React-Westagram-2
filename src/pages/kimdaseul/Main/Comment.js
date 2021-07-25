import React from 'react';
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
    this.setState({
      content: e.target.value,
    });
  };

  clickInsertValue = () => {
    this.setState({
      contents: this.state.contents.concat(this.state.content),
      content: '',
    });
  };

  enterInsertValue = e => {
    if (e.key === 'Enter') {
      this.clickInsertValue();
    }
  };

  render() {
    const commentLi = this.state.contents.map(list => (
      <li>
        <span>cocacola</span>
        <span>{list}</span>
      </li>
    ));
    return (
      <div className="comment-list-box">
        <ul className="comment-lists">{commentLi}</ul>
        <div className="comment-write">
          <input
            type="text"
            onChange={this.saveValue}
            onKeyPress={this.enterInsertValue}
            value={this.state.content}
            placeholder="댓글달기"
          ></input>
          <button onClick={this.clickInsertValue}>게시</button>
        </div>
      </div>
    );
  }
}

export default Comment;
