import React from 'react';
import Nav from '../../../components/Nav/Nav';
import { withRouter } from 'react-router-dom';
import CommentList from './CommentList';

import './Main.scss';
class MainHun extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
    };
  }

  handleComment = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleList = () => {
    if (this.state.comment.length === 0) {
      return;
    }

    const newComment = {
      comment: this.state.comment,
      id: Date.now(),
    };

    this.setState(state => ({
      commentList: state.commentList.concat(newComment),
      comment: '',
    }));
  };

  render() {
    return (
      <div className="MainHun">
        <Nav />

        <div className="main-container">
          <main>
            <div className="feeds">
              <article>
                <header>
                  <div className="profile-of-article">
                    <img
                      className="img-profile pic"
                      src="/images/kimjihun/user-img.jpeg"
                      alt="wecode-founder-img"
                    />
                    <span
                      className="userID main-id point-span"
                      style={{ fontWeight: 'bold' }}
                    >
                      wecode-founder
                    </span>
                  </div>
                  <img
                    className="icon-react icon-more"
                    src="/images/kimjihun/keb.png"
                    alt="more"
                  />
                </header>
                <div className="main-image">
                  <img
                    src="/images/kimjihun/user-img.jpeg"
                    alt="wecode-founder님의 피드 사진"
                    className="mainPic"
                  />
                </div>
                <div className="icons-react">
                  <div className="icons-left">
                    <img
                      className="icon-react"
                      src="/images/kimjihun/heart_.png"
                      alt="하트"
                    />
                    <img
                      className="icon-react"
                      src="/images/kimjihun/comment.png"
                      alt="말풍선"
                    />
                    <img
                      className="icon-react"
                      src="/images/kimjihun/message.png"
                      alt="DM"
                    />
                  </div>
                  <img
                    className="icon-react"
                    src="/images/kimjihun/bookmark_.png"
                    alt="북마크"
                  />
                </div>
                <div className="reaction">
                  <div className="liked-people">
                    <img
                      className="pic"
                      src="/images/kimjihun/user-img.jpeg"
                      alt="wecode-founder님의 프로필 사진"
                      style={{ borderRadius: '70%' }}
                    />
                    <p>
                      <span className="point-span">wecode-founder</span>님{' '}
                      <span className="point-span">외 873,261,598,695명</span>이
                      좋아합니다
                    </p>
                  </div>
                  <div className="description">
                    <span className="point-span userID">wecode-founder</span>
                    <span style={{ margin: '5px' }}>
                      라피자노스트라 블루베리피자 인정 안인정???
                    </span>
                  </div>
                  <div className="comment-section">
                    <ul className="comments">
                      <li>
                        <span className="point-span userID">godjinsu1004</span>
                        <span style={{ margin: '5px' }}>
                          블루베리 피자 정말 꿈에 나올 정도로
                          JMT...인정!!킹인정!!
                        </span>
                        <img
                          className="comment-heart"
                          src="/images/kimjihun/heart_s.png"
                          alt="하트"
                        />
                        <CommentList commentList={this.state.commentList} />
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="comment">
                  <div className="time-log">
                    <span>32분 전</span>
                  </div>
                  <input
                    id="input-comment"
                    className="input-comment"
                    type="text"
                    placeholder="댓글 달기..."
                    onChange={this.handleComment}
                    value={this.state.comment}
                  />
                  <button
                    className="commentButton"
                    onClick={this.handleList}
                    style={{
                      opacity: this.state.comment.length >= 1 ? '1' : '0.5',
                    }}
                  >
                    게시
                  </button>
                </div>
              </article>
            </div>
            <div className="main-right">
              <div className="myProfile">
                <img
                  className="pic"
                  src="/images/kimjihun/user-img.jpeg"
                  alt="wecode-founder 프로필 사진"
                  style={{ borderRadius: '70%' }}
                />
                <div>
                  <span className="userID point-span">wecode-founder</span>
                  <span className="sub-span">EUNWOO-SONG</span>
                </div>
              </div>
              <div className="section-story">
                <div className="menu-title">
                  <span className="sub-title">스토리</span>
                  <span className="find-more">모두 보기</span>
                </div>
                <ul className="story-list">
                  <li>
                    <div className="gradient-wrap">
                      <img
                        className="img-profile story"
                        src="/images/kimjihun/user-img.jpeg"
                        alt="wecode_bootcamp님의 프로필 사진"
                      />
                    </div>
                    <div className="profile-text">
                      <span className="userID point-span">wecode-founder</span>
                      <span className="sub-span">4분 전</span>
                    </div>
                  </li>
                  <li>
                    <div className="gradient-wrap">
                      <img
                        className="img-profile story"
                        src="/images/kimjihun/user-img.jpeg"
                        alt="wecode_bootcamp님의 프로필 사진"
                      />
                    </div>
                    <div className="profile-text">
                      <span className="userID point-span">wecode-founder</span>
                      <span className="sub-span">18분 전</span>
                    </div>
                  </li>
                  <li>
                    <div className="gradient-wrap">
                      <img
                        className="img-profile story"
                        src="/images/kimjihun/user-img.jpeg"
                        alt="wecode-founder님의 프로필 사진"
                      />
                    </div>
                    <div className="profile-text">
                      <span className="userID point-span">wecode-founder</span>
                      <span className="sub-span">31분 전</span>
                    </div>
                  </li>
                  <li>
                    <div className="gradient-wrap">
                      <img
                        className="img-profile story"
                        src="/images/kimjihun/user-img.jpeg"
                        alt="wecode-founder님의 프로필 사진"
                      />
                    </div>
                    <div className="profile-text">
                      <span className="userID point-span">wecode-founder</span>
                      <span className="sub-span">56분 전</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="section-recommend">
                <div className="menu-title">
                  <span className="sub-title">회원님을 위한 추천</span>
                  <span className="find-more">모두 보기</span>
                </div>
                <ul className="recommend-list">
                  <li>
                    <div className="recommend-friend-profile">
                      <img
                        className="img-profile"
                        src="/images/kimjihun/lee.jpeg"
                        alt="lupercalia88님의 프로필 사진"
                      />
                      <div className="profile-text">
                        <span className="userID point-span">lupercalia88</span>
                        <span className="sub-span">
                          lupitaongo님 외 9명이 팔로우합니다
                        </span>
                      </div>
                    </div>
                    <span className="btn-follow">팔로우</span>
                  </li>
                  <li>
                    <div className="recommend-friend-profile">
                      <img
                        className="img-profile"
                        src="/images/kimjihun/nam.jpeg"
                        alt="
                    isacc_jihyun_choi님의 프로필 사진"
                      />
                      <div className="profile-text">
                        <span className="userID point-span">
                          isacc_jihyun_choi
                        </span>
                        <span className="sub-span">
                          isacc_jihyun_choi님이 팔로우합니다
                        </span>
                      </div>
                    </div>
                    <span className="btn-follow">팔로우</span>
                  </li>
                  <li>
                    <div className="recommend-friend-profile">
                      <img
                        className="img-profile"
                        src="/images/kimjihun/choi.jpeg"
                        alt="teddysphotos님의 프로필 사진"
                      />
                      <div className="profile-text">
                        <span className="userID point-span">teddysphotos</span>
                        <span className="sub-span">
                          diego.costa님 외 32명이 팔로우합...
                        </span>
                      </div>
                    </div>
                    <span className="btn-follow">팔로우</span>
                  </li>
                </ul>
              </div>
              <footer>
                <p className="westa-script">
                  Westagram 정보 ∙ 지원 ∙ 소개 ∙ 도움말 ∙ 홍보 센터 ∙ API ∙ 채용
                  정보 ∙ 맛집 ∙개인정보처리방침 ∙ 약관 ∙ <br />
                  위치 ∙ 인기계정 ∙ 해시태그 ∙ 사랑 ∙ 정열 ∙ 지구당
                  <br />
                  <br />
                  <br />© 2021 WESTAGRAM FROM FAKEBOOK
                </p>
              </footer>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
export default withRouter(MainHun);
