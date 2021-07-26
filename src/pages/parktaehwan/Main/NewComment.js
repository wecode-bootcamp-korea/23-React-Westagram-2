import React from 'react';

class NewComment extends React.Component {
  render() {
    return (
      <div className="comment">
        <div className="commentLeft">
          <a href="#" className="commentWriter">
            wecode_bootcamp
          </a>{' '}
          <span>한 것도 없는데 벌써 9시..</span>
        </div>
        <div className="commentHeartBox">
          <img alt="like" src="/images/Nav/like.png" className="commentHeart" />
        </div>
      </div>
    );
  }
}

export default NewComment;
