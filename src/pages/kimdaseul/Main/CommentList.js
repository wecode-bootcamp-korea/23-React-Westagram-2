import React from 'react';
import Comment from './Comment';
import './Main.scss';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      contents: [],
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

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json()) // server에서 보내준 response를 객체 형태로 변환
      .then(data => {
        // data는 객체형태로 변환한 response임. 그걸 인자로 받고 setState 실행. commentList가 객체 형태로 변환된 response인 data로 state 변경됨.
        this.setState({
          commentList: data,
        });
      });
  }

  render() {
    const { commentList, content } = this.state;
    const { saveValue, enterInsertValue, clickInsertValue } = this;
    return (
      <>
        <div className="comment-list-box">
          <ul className="comment-lists">
            {commentList.map(comment => {
              return (
                <Comment
                  key={comment.id}
                  name={comment.userName}
                  content={comment.content}
                />
              );
            })}
            {this.state.contents.map((el, index) => {
              return <Comment name="cocacola" content={el} key={index + 4} />;
            })}
          </ul>
        </div>
        <div className="comment-write">
          <input
            type="text"
            placeholder="댓글달기"
            onChange={saveValue}
            onKeyPress={enterInsertValue}
            value={content}
          ></input>
          <button onClick={clickInsertValue}>게시</button>
        </div>
      </>
    );
  }
}

export default CommentList;
