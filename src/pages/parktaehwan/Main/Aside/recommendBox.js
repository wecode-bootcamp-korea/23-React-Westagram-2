import React from 'react';
import RcmdProfileBox from './RcmdProfileBox';

class RecommendBox extends React.Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/profileData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          list: data.recommend,
        });
      });
  }
  render() {
    return (
      <div className="asideSection">
        <div className="asideSectionTitle">
          <div className="asideSectionTitleName">회원님을 위한 추천</div>
          <div>모두보기</div>
        </div>
        {this.state.list.map(el => (
          <RcmdProfileBox
            name={el.name}
            time={el.time}
            imageSrc={el.imageSrc}
          />
        ))}
      </div>
    );
  }
}

export default RecommendBox;
