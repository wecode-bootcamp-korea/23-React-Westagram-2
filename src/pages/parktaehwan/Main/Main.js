import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from './Feeds/Feeds';
import Aside from './Aside/Aside';
import './Main.scss';

class MainHwan extends React.Component {
  goToLogin = () => {
    this.props.history.push('/LoginHwan');
  };

  render() {
    return (
      <div className="mainBody">
        <Nav />
        <main className="mainPage">
          <Feeds goToLogin={this.goToLogin} />
          <Aside />
        </main>
      </div>
    );
  }
}

export default MainHwan;
