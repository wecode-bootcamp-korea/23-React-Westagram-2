import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import Comment from '../Comment/Comment';
import './Main.scss';

class MainAh extends React.Component {
  render() {
    return (
      <div className="MainAh">
        <Nav />
        <div className="mainContainer">
          <div className="feedsContainer">
            <article>
              <div className="feedsTop">
                <img
                  className="profileImage"
                  src="/images/baeyoonah/Main/mark.png"
                  alt=""
                />
                <span className="feedsId" id="myId">
                  wecode-bootcamp
                </span>
              </div>
              <img src="/images/baeyoonah/Main/liberty.jpg" alt="" />
              <div className="feedsIcon">
                <ul>
                  <li>
                    <img src="/images/baeyoonah/Main/redheart.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/baeyoonah/Main/what.png" alt="" />
                  </li>
                  <li>
                    <img src="/images/baeyoonah/Main/share.png" alt="" />
                  </li>
                </ul>
                <img src="/images/baeyoonah/Main/tag.png" alt="" />
              </div>
              <div className="feedsContent">
                <div>
                  <img src="/images/baeyoonah/Main/mark.png" alt="" />
                  <span className="feedsId">ainworld</span>
                  <span className="feedsText">님 외 4명이 좋아합니다.</span>
                </div>
                <div>
                  <p className="feedsId">
                    canon_mj
                    <span className="feedsText">
                      위워크에서 진행한 베이킹 클래스
                    </span>
                  </p>
                  <p className="feedsId">
                    neceosecius
                    <span className="feedsText">거봐 좋았잖아~~~</span>
                  </p>
                  <Comment />
                </div>
              </div>
            </article>
          </div>
          <div className="mainRightContainer">
            <div className="mainRightTop">
              <img src="/images/baeyoonah/Main/mark.png" alt="" />
              <span className="siteId">wecode_bootcamp</span>
              <p className="mainRightIdInfo">Wecode | 위코드</p>
            </div>

            <div className="storyContainer">
              <div className="storyMenu">
                <span className="storyId">스토리</span>
                <span className="storyIdInfo">모두보기</span>
              </div>
              <div className="storyContent">
                <img src="/images/baeyoonah/Main/mark.png" alt="" />
                <span className="siteId">_yms_s</span>
                <p className="siteIdInfo">16분 전</p>
              </div>
              <div className="storyContent">
                <img src="/images/baeyoonah/Main/mark.png" alt="" />
                <span className="siteId">_yms_s</span>
                <p className="siteIdInfo">16분 전</p>
              </div>
              <div className="storyContent">
                <img src="/images/baeyoonah/Main/mark.png" alt="" />
                <span className="siteId">_yms_s</span>
                <p className="siteIdInfo">16분 전</p>
              </div>
            </div>

            <div className="follow">
              <div className="storyMenu">
                <span className="storyId">회원님을 위한 추천</span>
                <span className="storyIdInfo">모두 보기</span>
              </div>
              <div className="storyContent">
                <img src="/images/baeyoonah/Main/mark.png" alt="" />
                <span className="siteId">ioaaaaaahye</span>
                <p className="siteIdInfo">_legenda님 외 2명이 ...</p>
                <button className="followBtn">팔로우</button>
              </div>
              <div className="storyContent">
                <img src="/images/baeyoonah/Main/mark.png" alt="" />
                <span className="siteId">ioaaaaaahye</span>
                <p className="siteIdInfo">_legenda님 외 2명이 ...</p>
                <button className="followBtn">팔로우</button>
              </div>
              <div className="storyContent">
                <img src="/images/baeyoonah/Main/mark.png" alt="" />
                <span className="siteId">ioaaaaaahye</span>
                <p className="siteIdInfo">_legenda님 외 2명이 ...</p>
                <button className="followBtn">팔로우</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainAh);
