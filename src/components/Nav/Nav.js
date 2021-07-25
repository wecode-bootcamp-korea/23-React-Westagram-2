import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <nav className="navContainer">
          <div className="homepage">
            <img alt="instagram logo" src="/images/Nav/instagram.png" />
            <header>
              <a href="main.html">Westagram</a>
            </header>
          </div>
          <div className="searchBar">
            <div>
              <img src="/images/Nav/magnifying-glass.png" alt="" />
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
