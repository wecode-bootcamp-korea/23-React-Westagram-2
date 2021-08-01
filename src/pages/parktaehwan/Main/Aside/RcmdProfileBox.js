import React from 'react';

class RcmdProfileBox extends React.Component {
  render() {
    const { imageSrc, name, time } = this.props;
    return (
      <div className="asideSectionProfile follow">
        <div className="asideSectionProfileLeft">
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
        <div className="followBtnBox">
          <button className="followBtn">팔로우</button>
        </div>
      </div>
    );
  }
}

export default RcmdProfileBox;
