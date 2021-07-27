import React from 'react';

class Recommand extends React.Component {
  render() {
    return (
      <div className="recommand">
        <div className="customerTitle">
          <span>회원님을 위한 추천</span>
          <span>모두 보기</span>
        </div>
        <div className="recommandList">
          <div className="recommandProfile">
            <img alt="profile" src="/images/kimmyungsung/ronaldo.jpeg" />
            <div className="friendInform">
              <span>cristiano</span>
              <span>회원님을 팔로우합니다</span>
            </div>
          </div>
          <button type="submit">팔로우</button>
        </div>
        <div className="recommandList">
          <div className="recommandProfile">
            <img alt="profile" src="/images/kimmyungsung/obama.jpeg" />
            <div className="friendInform">
              <span>barackobama</span>
              <span>회원님을 팔로우합니다</span>
            </div>
          </div>
          <button type="submit">팔로우</button>
        </div>
        <div className="recommandList">
          <div className="recommandProfile">
            <img alt="profile" src="/images/kimmyungsung/ladygaga.jpeg" />
            <div className="friendInform">
              <span>ladygaga</span>
              <span>회원님을 팔로우합니다</span>
            </div>
          </div>
          <button type="submit">팔로우</button>
        </div>
      </div>
    );
  }
}

export default Recommand;
