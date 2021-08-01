import React from 'react';

class StoryProfileBox extends React.Component {
  render() {
    const { imageSrc, name, time } = this.props;
    return (
      <div className="asideSectionProfile">
        <div className="profileImgBox">
          <img className="profileImg" src={imageSrc} alt="" />
        </div>
        <div className="asideSectionNameBox">
          <a href="">
            <div className="asideSectionName">{name}</div>
          </a>
          <div className="asideSectionDes">{time}</div>
        </div>
      </div>
    );
  }
}

export default StoryProfileBox;
