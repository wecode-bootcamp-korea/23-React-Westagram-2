import React from 'react';

class Story extends React.Component {
  render() {
    return (
      <div className="story">
        <div className="storyTitle">
          <span>스토리</span>
          <span>모두 보기</span>
        </div>
        <div className="friendStory">
          <img alt="profile" src="/images/kimmyungsung/ziyoung.jpeg" />
          <div className="friendInform">
            <span>xxxibgdrgn</span>
            <span>27초 전</span>
          </div>
        </div>
        <div className="friendStory">
          <img alt="profile" src="/images/kimmyungsung/messi.jpeg" />
          <div className="friendInform">
            <span>leomessi</span>
            <span>56분 전</span>
          </div>
        </div>
        <div className="friendStory">
          <img alt="profile" src="/images/kimmyungsung/beyonce.jpeg" />
          <div className="friendInform">
            <span>beyonce</span>
            <span>3시간 전</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
