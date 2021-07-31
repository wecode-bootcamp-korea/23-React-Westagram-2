import React from 'react';
import { RECOMMEND } from './recommendData.js';
import './Main.scss';

class Recommend extends React.Component {
  render() {
    return (
      <>
        {RECOMMEND.map(recommend => {
          return (
            <div key={recommend.id} className="recommend-list">
              <div className="recommend-thumnail">
                <img src={recommend.thumbnail} alt="추천목록 프로필 썸네일" />
              </div>
              <div className="recommend-id">
                <div>{recommend.recommendId}</div>
                <div>{recommend.recommendName}</div>
              </div>
              <div className="recommend-follow">팔로우</div>
            </div>
          );
        })}
      </>
    );
  }
}
export default Recommend;
