import React from 'react';
import Reply from './Reply';

class MainContents extends React.Component {
  render() {
    return (
      <article className="MainContents">
        <img alt="/articlepicture" src="/images/kimmyungsung/iu_img.jpeg" />
        <div className="reactionBtn">
          <div className="reactionLeft">
            <img alt="like" src="/images/kimmyungsung/like.png" />
            <img alt="chat" src="/images/kimmyungsung/chat-bubble.png" />
            <img alt="upload" src="/images/kimmyungsung/upload.png" />
          </div>
          <img alt="save" src="/images/kimmyungsung/save.png" />
        </div>
        <div className="likeName">
          <img alt="profile" src="/images/kimmyungsung/ziyoung.jpeg" />
          <span>
            <b>xxxibgdrgn</b>님 <b>외 35,421명</b>이 좋아합니다
          </span>
        </div>
        <div className="content">
          <a href="/#" className="id">
            iu_leejieun516
          </a>
          <span className="reText">광고 촬영 무사히 잘 마쳤습니다~</span>
        </div>
        <Reply />
      </article>
    );
  }
}

export default MainContents;
