import React from 'react';

class StoryProfileBox extends React.Component {
  render() {
    return (
      <div className="asideSectionProfile">
        <div className="profileImgBox">
          <img className="profileImg" src={this.props.imageSrc} alt="" />
        </div>
        <div className="asideSectionNameBox">
          <a href="">
            <div className="asideSectionName">{this.props.name}</div>
          </a>
          <div className="asideSectionDes">{this.props.time}</div>
        </div>
      </div>
    );
  }
}

export default StoryProfileBox;
