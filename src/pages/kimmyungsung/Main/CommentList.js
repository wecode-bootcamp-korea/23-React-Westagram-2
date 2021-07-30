import React from 'react';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: '',
    };
  }

  // componentDidMount() {
  //   fetch('/data/commentData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         commentList: data,
  //       });
  //     });
  // }

  render() {
    const { commentList } = this.state;
    const getComment = () => {
      fetch('/data/commentData.json', {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            commentList: data,
          });
        });
    };
    getComment();

    return (
      <div className="comment">
        <ul>
          {commentList.map(comment => {
            return (
              <div className="reply" key={comment.id}>
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
