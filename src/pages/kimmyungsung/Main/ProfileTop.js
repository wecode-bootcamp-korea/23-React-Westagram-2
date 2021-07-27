import React from 'react';

class ProfileTop extends React.Component {
  render() {
    return (
      <div className="profileTop">
        <div className="profileName">
          <img alt="profile" src="/images/kimmyungsung/pro_iu.jpeg" />
          <span>iu_leejieun516</span>
        </div>
        <div className="addFunction">
          <img alt="add function" src="/images/kimmyungsung/ellipsis.png" />
        </div>
      </div>
    );
  }
}

export default ProfileTop;
