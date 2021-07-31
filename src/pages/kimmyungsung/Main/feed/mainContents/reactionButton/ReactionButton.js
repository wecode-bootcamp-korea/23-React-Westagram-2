import React from 'react';

class ReactionButton extends React.Component {
  render() {
    return (
      <div className="reactionBtn">
        <div className="reactionLeft">
          <img alt="like" src="/images/kimmyungsung/like.png" />
          <img alt="chat" src="/images/kimmyungsung/chat-bubble.png" />
          <img alt="upload" src="/images/kimmyungsung/upload.png" />
        </div>
        <img alt="save" src="/images/kimmyungsung/save.png" />
      </div>
    );
  }
}

export default ReactionButton;
