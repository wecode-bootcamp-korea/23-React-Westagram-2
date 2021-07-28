import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed';
import './Main.scss';

class MainSeul extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/FeedData.json', {
      method: 'GET',
    })
      .then(response => response.json()) // server에서 보내준 response를 객체 형태로 변환
      .then(data => {
        // data는 객체형태로 변환한 response임. 그걸 인자로 받고 setState 실행. commentList가 객체 형태로 변환된 response인 data로 state 변경됨.
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    const { feedList } = this.state;
    return (
      <div className="mainSeul">
        <Nav />
        <main>
          <section>
            <div className="main-left">
              {feedList.map(feed => {
                return (
                  <Feed key={feed.id} name={feed.userName} img={feed.image} />
                );
              })}
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
