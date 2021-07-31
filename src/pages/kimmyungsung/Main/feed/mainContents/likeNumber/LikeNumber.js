import React from 'react';

class LikeNumber extends React.Component {
  render() {
    return (
      <div className="likeNumber">
        <img alt="profile" src="/images/kimmyungsung/ziyoung.jpeg" />
        <span>
          <b>xxxibgdrgn</b>님 <b>외 61,235,421명</b>이 좋아합니다
        </span>
      </div>
    );
  }
}

export default LikeNumber;
