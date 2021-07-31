import React from 'react';

class Comments extends React.Component {
  render() {
    return (
      <div className="reply">
        <div className="content">
          <a href="/#" className="id">
            sstaar_mx
          </a>
          <span className="reText">{this.props.commentContent}</span>
        </div>
        <img
          alt="like"
          className="reHeart"
          src="/images/kimmyungsung/like.png"
        />
      </div>
    );
  }
}

export default Comments;
