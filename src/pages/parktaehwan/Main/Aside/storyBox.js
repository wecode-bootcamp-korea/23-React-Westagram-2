import React from 'react';
import StoryProfileBox from './StoryProfileBox';

class StoryBox extends React.Component {
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
          list: data.story,
        });
      });
  }

  render() {
    return (
      <div className="asideSection">
        <div className="asideSectionTitle">
          <div className="asideSectionTitleName">스토리</div>
          <div>모두보기</div>
        </div>
        {this.state.list.map(el => (
          <StoryProfileBox
            name={el.name}
            time={el.time}
            imageSrc={el.imageSrc}
          />
        ))}
      </div>
    );
  }
}

export default StoryBox;
