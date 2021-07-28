import React from 'react';
import CommentList from './CommentList';
import './Main.scss';

class Feed extends React.Component {
  render() {
    return (
      <article>
        <div className="feed-profile">
          <div className="feed-profile-thumnail">
            <img src="../images/kimdaseul/profile.png" alt="프로필 썸네일" />
          </div>
          <div className="feed-profile-id">{this.props.name}</div>
          <div className="feed-profile-more">
            <img
              src="https://image.flaticon.com/icons/png/512/512/512142.png"
              alt="프로필 메뉴 더보기"
            />
          </div>
        </div>
        <div className="feed-image">
          <img src={this.props.img} alt="메인 피드 이미지" />
        </div>
        <div className="comment">
          <div className="response-icons">
            <ul>
              <li>
                <img
                  src="https://image.flaticon.com/icons/png/512/1077/1077035.png"
                  alt="하트 버튼"
                />
              </li>
              <li>
                <img
                  src="https://image.flaticon.com/icons/png/512/32/32562.png"
                  alt="댓글달기 버튼"
                />
              </li>
              <li>
                <img
                  src="https://image.flaticon.com/icons/png/512/786/786205.png"
                  alt="다이렉트메세지 보내기 버튼"
                />
              </li>
              <li>
                <img
                  src="https://image.flaticon.com/icons/png/512/786/786251.png"
                  alt="북마크 버튼"
                />
              </li>
            </ul>
          </div>
          <div className="comment-count">
            <span>coke</span>님 외 <span>여러 명</span>이 좋아합니다.
          </div>
          <CommentList />
        </div>
      </article>
    );
  }
}

export default Feed;
