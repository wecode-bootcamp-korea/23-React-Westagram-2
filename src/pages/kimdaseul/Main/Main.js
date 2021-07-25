import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Comment from './Comment';
import './Main.scss';

class MainSeul extends React.Component {
  render() {
    return (
      <div className="mainSeul">
        <Nav />
        <main>
          <section>
            <div className="main-left">
              <article>
                <div className="feed-profile">
                  <div className="feed-profile-thumnail">
                    <img
                      src="../images/kimdaseul/profile.png"
                      alt="프로필 썸네일"
                    />
                  </div>
                  <div className="feed-profile-id">cocacollllla</div>
                  <div className="feed-profile-more">
                    <img
                      src="https://image.flaticon.com/icons/png/512/512/512142.png"
                      alt="프로필 메뉴 더보기"
                    />
                  </div>
                </div>
                <div className="feed-image">
                  <img
                    src="../images/kimdaseul/mainimage.png"
                    alt="메인 피드 이미지"
                  />
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
                  <Comment />
                </div>
              </article>
            </div>
            <div className="main-right">
              <div className="my-profile">
                <div className="my-profile-thumnail">
                  <img
                    src="../images/kimdaseul/profile.png"
                    alt="내 프로필 썸네일"
                  />
                </div>
                <div className="my-profile-id">
                  <div>cocacollllla</div>
                  <div>콜라</div>
                </div>
              </div>
              <div className="recommend">
                <div className="recommend-title">
                  <p>회원님을 위한 추천</p>
                  <div>모두 보기</div>
                </div>
                <div className="recommend-list-box">
                  <div className="recommend-list">
                    <div className="recommend-thumnail">
                      <img
                        src="../images/kimdaseul/profile.png"
                        alt="추천목록 프로필 썸네일"
                      />
                    </div>
                    <div className="recommend-id">
                      <div>cocacollllla</div>
                      <div>콜라</div>
                    </div>
                    <div className="recommend-follow">팔로우</div>
                  </div>
                  <div className="recommend-list">
                    <div className="recommend-thumnail">
                      <img
                        src="../images/kimdaseul/profile.png"
                        alt="추천목록 프로필 썸네일"
                      />
                    </div>
                    <div className="recommend-id">
                      <div>cocacollllla</div>
                      <div>콜라</div>
                    </div>
                    <div className="recommend-follow">팔로우</div>
                  </div>
                  <div className="recommend-list">
                    <div className="recommend-thumnail">
                      <img
                        src="../images/kimdaseul/profile.png"
                        alt="추천목록 프로필 썸네일"
                      />
                    </div>
                    <div className="recommend-id">
                      <div>cocacollllla</div>
                      <div>콜라</div>
                    </div>
                    <div className="recommend-follow">팔로우</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default MainSeul;
