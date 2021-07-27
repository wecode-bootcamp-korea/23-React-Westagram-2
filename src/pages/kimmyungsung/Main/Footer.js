import React from 'react';
import FooterData from './FooterData.js';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        {FooterData.map(el => {
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
