import React from 'react';
import MyStatus from './MyStatus';
import Story from './Story';
import Recommand from './Recommand';
import Footer from './Footer';

class MainRight extends React.Component {
  render() {
    return (
      <div className="mainRight">
        <MyStatus />
        <Story />
        <Recommand />
        <Footer />
      </div>
    );
  }
}

export default MainRight;
