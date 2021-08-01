import React from 'react';
import RecommendBox from './recommendBox';
import StoryBox from './storyBox';

class Aside extends React.Component {
  render() {
    return (
      <aside>
        <div className="asideBox">
          <header>
            <div className="myProfile">
              <div className="myProfileLeft">
                <div className="myProfileImgBox">
                  <img
                    className="profileImg"
                    src="https://blog.kakaocdn.net/dn/nxzKU/btqJ8e1EAVW/auuUq9ON9dRPkDkL9iGazK/img.jpg"
                    alt="profile"
                  />
                </div>
                <div className="myProfileNameBox">
                  <a href="">
                    <div className="myProfileName">mekemeke</div>
                  </a>
                  <div className="myProfileSub">여기는 설명란~</div>
                </div>
              </div>
            </div>
          </header>
          <section>
            <StoryBox />
            <RecommendBox />
          </section>
          <footer className="intro">
            <div>
              instagram 정보ㆍ지원ㆍ홍보 센터ㆍAPIㆍ채용
              정보ㆍ개인정보처리방침ㆍ약관ㆍ디렉터리ㆍ프로필ㆍ해시태그ㆍ언어
            </div>
            <br />
            <div>© 2021 WESTAGRAM</div>
          </footer>
        </div>
      </aside>
    );
  }
}

export default Aside;
