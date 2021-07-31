import React from 'react';
import RecommandList from './RecommandList';

class Recommand extends React.Component {
  render() {
    return (
      <div className="recommand">
        <div className="customerTitle">
          <span>회원님을 위한 추천</span>
          <span>모두 보기</span>
        </div>
        <RecommandList />
      </div>
    );
  }
}

export default Recommand;
