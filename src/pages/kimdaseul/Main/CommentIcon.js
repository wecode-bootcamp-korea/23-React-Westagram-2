import React from 'react';
import { COMMENTICON } from './commentIconData';
import './Main.scss';

class CommentIcon extends React.Component {
  render() {
    return (
      <div className="response-icons">
        <ul>
          {COMMENTICON.map(icon => {
            return (
              <li key={icon.id}>
                <img src={icon.icon} alt={icon.alt} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentIcon;
