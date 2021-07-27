import React from 'react';
import { Link } from 'react-router-dom';

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Link to="/#" className="id">
          {this.props.id}
        </Link>
        <span className="reText">{this.props.content}</span>
      </div>
    );
  }
}

export default Content;
