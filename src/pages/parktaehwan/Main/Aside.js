import React from 'react';

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
                    alt=""
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
            <div className="asideSection">
              <div className="asideSectionTitle">
                <div className="asideSectionTitleName">스토리</div>
                <div>모두보기</div>
              </div>
              <div className="asideSectionProfile">
                <div className="profileImgBox">
                  <img
                    className="profileImg"
                    src="https://blog.kakaocdn.net/dn/nxzKU/btqJ8e1EAVW/auuUq9ON9dRPkDkL9iGazK/img.jpg"
                    alt=""
                  />
                </div>
                <div className="asideSectionNameBox">
                  <a href="">
                    <div className="asideSectionName">qwer_tyui</div>
                  </a>
                  <div className="asideSectionDes">1시간 전</div>
                </div>
              </div>
              <div className="asideSectionProfile">
                <div className="profileImgBox">
                  <img
                    className="profileImg"
                    src="https://blog.kakaocdn.net/dn/nxzKU/btqJ8e1EAVW/auuUq9ON9dRPkDkL9iGazK/img.jpg"
                    alt=""
                  />
                </div>
                <div className="asideSectionNameBox">
                  <a href="">
                    <div className="asideSectionName">asdf_ghjk</div>
                  </a>
                  <div className="asideSectionDes">1시간 전</div>
                </div>
              </div>
              <div className="asideSectionProfile">
                <div className="profileImgBox">
                  <img
                    className="profileImg"
                    src="https://blog.kakaocdn.net/dn/nxzKU/btqJ8e1EAVW/auuUq9ON9dRPkDkL9iGazK/img.jpg"
                    alt=""
                  />
                </div>
                <div className="asideSectionNameBox">
                  <a href="">
                    <div className="asideSectionName">zxcv_bnml</div>
                  </a>
                  <div className="asideSectionDes">1시간 전</div>
                </div>
              </div>
            </div>
            <div className="asideSection">
              <div className="asideSectionTitle">
                <div className="asideSectionTitleName">회원님을 위한 추천</div>
                <div>모두보기</div>
              </div>
              <div className="asideSectionProfile follow">
                <div className="asideSectionProfileLeft">
                  <div className="profileImgBox">
                    <img
                      className="profileImg"
                      src="https://blog.kakaocdn.net/dn/nxzKU/btqJ8e1EAVW/auuUq9ON9dRPkDkL9iGazK/img.jpg"
                      alt=""
                    />
                  </div>
                  <div className="asideSectionNameBox">
                    <a href="">
                      <div className="asideSectionName">qwer_tyui</div>
                    </a>
                    <div className="asideSectionDes">1시간 전</div>
                  </div>
                </div>
                <div className="followBtnBox">
                  <button className="followBtn">팔로우</button>
                </div>
              </div>
              <div className="asideSectionProfile follow">
                <div className="asideSectionProfileLeft">
                  <div className="profileImgBox">
                    <img
                      className="profileImg"
                      src="https://blog.kakaocdn.net/dn/nxzKU/btqJ8e1EAVW/auuUq9ON9dRPkDkL9iGazK/img.jpg"
                      alt=""
                    />
                  </div>
                  <div className="asideSectionNameBox">
                    <a href="">
                      <div className="asideSectionName">qwer_tyui</div>
                    </a>
                    <div className="asideSectionDes">1시간 전</div>
                  </div>
                </div>
                <div className="followBtnBox">
                  <button className="followBtn">팔로우</button>
                </div>
              </div>
              <div className="asideSectionProfile follow">
                <div className="asideSectionProfileLeft">
                  <div className="profileImgBox">
                    <img
                      className="profileImg"
                      src="https://blog.kakaocdn.net/dn/nxzKU/btqJ8e1EAVW/auuUq9ON9dRPkDkL9iGazK/img.jpg"
                      alt=""
                    />
                  </div>
                  <div className="asideSectionNameBox">
                    <a href="">
                      <div className="asideSectionName">qwer_tyui</div>
                    </a>
                    <div className="asideSectionDes">1시간 전</div>
                  </div>
                </div>
                <div className="followBtnBox">
                  <button className="followBtn">팔로우</button>
                </div>
              </div>
            </div>
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
