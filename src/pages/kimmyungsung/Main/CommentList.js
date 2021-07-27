import React, { Component } from 'react';

class CommentList extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: '',
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

  render() {
    const { commentList } = this.state;

    return (
      <div className="comment">
        <ul>
          {commentList.map(comment => {
            return (
              <div className="reply">
                <div className="content">
                  <a href="/#" className="id">
                    {comment.userName}
                  </a>
                  <span className="reText">{comment.content}</span>
                </div>
                <img
                  alt="like"
                  className="reHeart"
                  src="/images/kimmyungsung/like.png"
                />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentList;
