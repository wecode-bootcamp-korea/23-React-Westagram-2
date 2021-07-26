import React from 'react';

class NewComment extends React.Component {
  render() {
    return (
      <div className="comment">
        <div className="commentLeft">
          <a href="#" className="commentWriter">
            {this.props.cmtName}
          </a>{' '}
          <span>{this.props.cmtContent}</span>
        </div>
        <div className="commentHeartBox">
          <img alt="like" src="/images/Nav/like.png" className="commentHeart" />
        </div>
      </div>
    );
  }
}

export default NewComment;
