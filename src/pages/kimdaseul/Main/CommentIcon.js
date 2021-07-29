import React from 'react';
import { COMMENTICON } from './CommentIconData';
import './Main.scss';

class CommentIcon extends React.Component {
  render() {
    return (
      <div className="response-icons">
        <ul>
          {COMMENTICON.map(el => {
            return (
              <li key={el.id}>
                <img src={el.icon} alt={el.alt} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentIcon;
