import React from 'react';
import footerData from './footerData.js';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        {footerData.map(el => {
          return (
            <li key={el.id}>
              <a href="/#">{el.content}</a>
            </li>
          );
        })}
      </footer>
    );
  }
}

export default Footer;
