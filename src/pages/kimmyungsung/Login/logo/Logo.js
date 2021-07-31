import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
  render() {
    return (
      <header className="Logo">
        <Link to="/#">Westagram</Link>
      </header>
    );
  }
}

export default Logo;