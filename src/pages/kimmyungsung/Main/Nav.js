import React from 'react';
import Logo from '../Login/Logo';

class Nav extends React.Component {
  render() {
    return (
      <div className="navFix">
        <nav>
          <div className="homepage">
            <img alt="instagram logo" src="/images/Nav/instagram.png" />
            <Logo />
          </div>
          <div className="searchBar">
            <div>
              <img alt="search" src="/images/Nav/magnifying-glass.png" />
              <input type="text" placeholder="검색" />
            </div>
          </div>
          <div className="menu">
            <img alt="search" src="/images/Nav/search.png" />
            <img alt="like" src="/images/Nav/like.png" />
            <img alt="am i" src="/images/Nav/ami.png" />
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
