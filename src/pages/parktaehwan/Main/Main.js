import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Comment from './Comment';
import './Main.scss';

class MainHwan extends React.Component {
  goToLogin = () => {
    this.props.history.push('/LoginHwan');
  };

  render() {
    return (
      <div className="mainBody">
        <Nav />
        <main className="mainPage">
          <div className="feeds">
            <section className="section1">
              <header className="writer">
                <div className="profileLeft">
                  <div className="profileImgBox">
                    <img
                      className="profileImg"
                      src="https://blog.kakaocdn.net/dn/nxzKU/btqJ8e1EAVW/auuUq9ON9dRPkDkL9iGazK/img.jpg"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <div className="profileNameBox">
                      wecode_bootcamp
                      <button onClick={this.goToLogin}>로그인으로</button>
                    </div>
                  </a>
                </div>
                <div className="writerDotBox">
                  <img
                    className="writerDot"
                    src="https://image.flaticon.com/icons/png/512/512/512142.png"
                    alt="dot"
                  />
                </div>
              </header>
              <article className="content">
                <div className="contentImgBox">
                  <img
                    className="contentImg"
                    src="/images/parktaehwan/example.jpg"
                    alt="person"
                  />
                </div>
                <div className="likeBtnBar">
                  <div className="likeLeft">
                    <i className="far fa-heart like"></i>
                    <i className="far fa-comment like"></i>
                    <i className="far fa-paper-plane like"></i>
                  </div>
                  <div className="likeRight">
                    <i className="far fa-bookmark like"></i>
                  </div>
                </div>
                <div className="howManyLike">
                  <div className="howManyLikeBox">
                    <img
                      className="howManyLikeImg"
                      src="https://blog.kakaocdn.net/dn/nxzKU/btqJ8e1EAVW/auuUq9ON9dRPkDkL9iGazK/img.jpg"
                      alt=""
                    />
                  </div>
                  <div className="howManyLikeText">
                    <span className="bold">mekemeke</span>님{' '}
                    <span className="bold">외 10000명</span>이 좋아합니다
                  </div>
                </div>
                <div className="contentComment">
                  <div className="contentWriter">
                    <a href="">wecode_bootcamp</a> 시간이 너무 빨리 간다..
                  </div>
                  <div className="commentPop">댓글 10000개 모두 보기</div>
                </div>
                <Comment />
              </article>
            </section>
          </div>
          <aside>
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
                  <div className="asideSectionTitleName">
                    회원님을 위한 추천
                  </div>
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
          </aside>
        </main>
      </div>
    );
  }
}

export default MainHwan;
