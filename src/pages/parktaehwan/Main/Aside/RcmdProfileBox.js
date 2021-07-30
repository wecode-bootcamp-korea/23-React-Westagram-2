import React from 'react';

class RcmdProfileBox extends React.Component {
  render() {
    return (
      <div className="asideSectionProfile follow">
        <div className="asideSectionProfileLeft">
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
        <div className="followBtnBox">
          <button className="followBtn">팔로우</button>
        </div>
      </div>
    );
  }
}

export default RcmdProfileBox;
