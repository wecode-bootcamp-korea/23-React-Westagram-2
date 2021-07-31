import React from 'react';
import MyStatus from './myStatus/MyStatus';
import Story from './story/Story';
import Recommand from './recommand/Recommand';
import Footer from './footer/Footer';

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
