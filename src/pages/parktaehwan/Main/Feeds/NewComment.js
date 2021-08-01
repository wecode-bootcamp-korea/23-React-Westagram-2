import React from 'react';
import { withRouter } from 'react-router';

class NewComment extends React.Component {
  render() {
    const { id, like, removeComment, likeComment, cmtName, cmtContent } =
      this.props;

    return (
      <div className="comment">
        <div className="commentLeft">
          <a href="" className="commentWriter">
            {cmtName}
          </a>{' '}
          <span>{cmtContent}</span>
          <span className="xBox">
            <i className="fas fa-times" onClick={() => removeComment(id)} />
          </span>
        </div>
        <div className="commentHeartBox">
          <i
            className={like ? 'fas fa-heart' : 'far fa-heart'}
            onClick={() => likeComment(id)}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(NewComment);
