import React from 'react';
import Nav from './Nav';
import Feeds from './Feeds';
import MainRight from './MainRight';
import './Main.scss';

class MainSung extends React.Component {
  render() {
    return (
      <div className="MainSung">
        <Nav />
        <main>
          <Feeds />
          <MainRight />
        </main>
      </div>
    );
  }
}

export default MainSung;
