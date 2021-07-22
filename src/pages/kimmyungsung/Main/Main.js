import React from 'react';
import './Main.scss';

class MainSung extends React.Component {
  render() {
    return (
      <div class="MainSung">
        <nav>
          <div class="homepage">
            <img alt="instagram logo" src="/images/Nav/instagram.png" />
            <header>
              <a href="MainSung">Westagram</a>
            </header>
          </div>
          <div class="searchBar">
            <div>
              <img alt="search" src="/images/Nav/magnifying-glass.png" />
              <input type="text" placeholder="검색" />
            </div>
          </div>
          <div class="menu">
            <img alt="search" src="/images/Nav/search.png" />
            <img alt="like" src="/images/Nav/like.png" />
            <img alt="am i" src="/images/Nav/ami.png" />
          </div>
        </nav>
        <main>
          <div class="feeds">
            <div class="profileTop">
              <div class="profileName">
                <img alt="profile" src="/images/kimmyungsung/pro_iu.jpeg" />
                <span>iu_leejieun516</span>
              </div>
              <div class="addFunction">
                <img
                  alt="add function"
                  src="/images/kimmyungsung/ellipsis.png"
                />
              </div>
            </div>
            <article>
              <img
                alt="/articlepicture"
                src="/images/kimmyungsung/iu_img.jpeg"
              />
              <div class="reactionBtn">
                <div class="reactionLeft">
                  <img alt="like" src="/images/kimmyungsung/like.png" />
                  <img alt="chat" src="/images/kimmyungsung/chat-bubble.png" />
                  <img alt="upload" src="/images/kimmyungsung/upload.png" />
                </div>
                <img alt="save" src="/images/kimmyungsung/save.png" />
              </div>
              <div class="likeName">
                <img alt="profile" src="/images/kimmyungsung/ziyoung.jpeg" />
                <span>
                  <b>xxxibgdrgn</b>님 <b>외 35,421명</b>이 좋아합니다
                </span>
              </div>
              <div class="content">
                <a href="/#" className="id">
                  iu_leejieun516
                </a>
                <span class="reText">광고 촬영 무사히 잘 마쳤습니다~</span>
              </div>
              <div class="reply">
                <div class="content">
                  <a href="/#" className="id">
                    sstaar_mx
                  </a>
                  <span class="reText">광고 촬영 했나보네? 고생했어~</span>
                </div>
                <img
                  alt="like"
                  class="reHeart"
                  src="/images/kimmyungsung/like.png"
                />
              </div>
              <div class="reply">
                <div class="content">
                  <a href="/#" class="id">
                    iu_leejieun516
                  </a>
                  <a href="/#" class="reId">
                    @sstaar_mx
                  </a>
                  <span class="reText">
                    어? 오빠! 오랜만이에요! 고마워요 ㅎㅎ
                  </span>
                </div>
                <img
                  alt="like"
                  class="reHeart"
                  src="/images/kimmyungsung/like.png"
                />
              </div>
            </article>
            <div class="writeReply">
              <input type="text" class="replyText" placeholder="댓글 달기..." />
              <button type="submit" class="replySubmit">
                게시
              </button>
            </div>
          </div>
          <div class="mainRight">
            <div class="myStatus">
              <img alt="profile" src="/images/kimmyungsung/me.jpeg" />
              <div class="myInform">
                <span>sstaar_mx</span>
                <span>Myungsung Kim</span>
              </div>
            </div>
            <div class="story">
              <div class="storyTitle">
                <span>스토리</span>
                <span>모두 보기</span>
              </div>
              <div class="friendStory">
                <img alt="profile" src="/images/kimmyungsung/ziyoung.jpeg" />
                <div class="friendInform">
                  <span>xxxibgdrgn</span>
                  <span>27초 전</span>
                </div>
              </div>
              <div class="friendStory">
                <img alt="profile" src="/images/kimmyungsung/messi.jpeg" />
                <div class="friendInform">
                  <span>leomessi</span>
                  <span>56분 전</span>
                </div>
              </div>
              <div class="friendStory">
                <img alt="profile" src="/images/kimmyungsung/beyonce.jpeg" />
                <div class="friendInform">
                  <span>beyonce</span>
                  <span>3시간 전</span>
                </div>
              </div>
            </div>
            <div class="recommand">
              <div class="customerTitle">
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
              </div>
              <div class="recommandList">
                <div class="recommandProfile">
                  <img alt="profile" src="/images/kimmyungsung/ronaldo.jpeg" />
                  <div class="friendInform">
                    <span>cristiano</span>
                    <span>회원님을 팔로우합니다</span>
                  </div>
                </div>
                <button type="submit">팔로우</button>
              </div>
              <div class="recommandList">
                <div class="recommandProfile">
                  <img alt="profile" src="/images/kimmyungsung/obama.jpeg" />
                  <div class="friendInform">
                    <span>barackobama</span>
                    <span>회원님을 팔로우합니다</span>
                  </div>
                </div>
                <button type="submit">팔로우</button>
              </div>
              <div class="recommandList">
                <div class="recommandProfile">
                  <img alt="profile" src="/images/kimmyungsung/ladygaga.jpeg" />
                  <div class="friendInform">
                    <span>ladygaga</span>
                    <span>회원님을 팔로우합니다</span>
                  </div>
                </div>
                <button type="submit">팔로우</button>
              </div>
            </div>
            <div>
              <div class="etcList">
                <span>Instagram 정보 . 지원 . 홍보 센터 . API .</span>
                <span>채용 정보 . 개인정보처리방침 . 약관 .</span>
                <span>디렉터리 . 프로필 . 해시태그 . 언어</span>
                <p>ⓒ 2019 INSTAGRAM</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default MainSung;
