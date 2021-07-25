import React from 'react';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';
import { withRouter } from 'react-router-dom';

class MainHun extends React.Component {
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
                      alt="wecode-founder-image"
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
                      지구당 선릉 맛집 인정 안인정???
                    </span>
                  </div>
                  <div className="comment-section">
                    <ul className="comments">
                      <li>
                        <span className="point-span userID">godjinsu1004</span>
                        <span>
                          1호점도 그렇지만 2호점은 정말 양도 많이 주고 서비스도
                          정말 최고에요...인정!!!
                        </span>
                        <img
                          className="comment-heart"
                          src="/images/kimjihun/heart_s.png"
                          alt="하트"
                        />
                      </li>
                    </ul>
                    <div className="time-log">
                      <span>32분 전</span>
                    </div>
                  </div>
                </div>
                <div className="hl"></div>
                <div className="comment">
                  <input
                    id="input-comment"
                    className="input-comment"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button type="submit" className="submit-comment" disabled>
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
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/79944746_546575142588788_4126000168724070400_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=dNzc-nltQ2oAX8cdGhB&tn=xHhZlNV2JuVsEhoO&edm=AEF8tYYBAAAA&ccb=7-4&oh=7fc6072a0db06b2adb0a31d8740346c0&oe=61044FE9&_nc_sid=a9513d"
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
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/82500505_879121952558255_1603738855591116800_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Ffm5zzGVoDEAX9Chpxd&edm=AEF8tYYBAAAA&ccb=7-4&oh=d7b367212560202e191e3d17446ad688&oe=6105268F&_nc_sid=a9513d"
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
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/12345817_1731670323735453_100218076_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=KNAV601XZlwAX-6H33L&tn=xHhZlNV2JuVsEhoO&edm=ABfd0MgBAAAA&ccb=7-4&oh=a711dbcb8124c8b1c4fc6178ed8e226d&oe=6103BFC5&_nc_sid=7bff83"
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
