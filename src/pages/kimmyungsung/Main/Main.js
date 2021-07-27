import React from 'react';
import MainContents from './MainContents';
import Footer from './Footer';
import './Main.scss';

class MainSung extends React.Component {
  render() {
    return (
      <div className="MainSung">
        <nav>
          <div className="homepage">
            <img alt="instagram logo" src="/images/Nav/instagram.png" />
            <header>
              <a href="MainSung">Westagram</a>
            </header>
          </div>
          <div className="searchBar">
            <div>
              <img alt="search" src="/images/Nav/magnifying-glass.png" />
              <input type="text" placeholder="검색" />
            </div>
          </div>
          <div className="menu">
            <img alt="search" src="/images/Nav/search.png" />
            <img alt="like" src="/images/Nav/like.png" />
            <img alt="am i" src="/images/Nav/ami.png" />
          </div>
        </nav>
        <main>
          <div className="feeds">
            <div className="profileTop">
              <div className="profileName">
                <img alt="profile" src="/images/kimmyungsung/pro_iu.jpeg" />
                <span>iu_leejieun516</span>
              </div>
              <div className="addFunction">
                <img
                  alt="add function"
                  src="/images/kimmyungsung/ellipsis.png"
                />
              </div>
            </div>
            <MainContents />
          </div>
          <div className="mainRight">
            <div className="myStatus">
              <img alt="profile" src="/images/kimmyungsung/me.jpeg" />
              <div className="myInform">
                <span>sstaar_mx</span>
                <span>Myungsung Kim</span>
              </div>
            </div>
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
            <Footer />
          </div>
        </main>
      </div>
    );
  }
}

export default MainSung;
