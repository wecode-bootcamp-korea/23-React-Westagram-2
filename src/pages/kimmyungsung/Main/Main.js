import React from 'react';
import Nav from './nav/Nav';
import Feeds from './feed/Feeds';
import MainRight from './mainRight/MainRight';
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
