import React from 'react';
import { RECOMMEND } from './RecommendData.js';
import './Main.scss';

class Recommend extends React.Component {
  render() {
    return (
      <>
        {RECOMMEND.map(el => {
          return (
            <div key={el.id} className="recommend-list">
              <div className="recommend-thumnail">
                <img src={el.thumbnail} alt="추천목록 프로필 썸네일" />
              </div>
              <div className="recommend-id">
                <div>{el.recommendId}</div>
                <div>{el.recommendName}</div>
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
