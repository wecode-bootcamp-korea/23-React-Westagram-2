import React from 'react';
import ReactionButton from './reactionButton/ReactionButton';
import LikeNumber from './likeNumber/LikeNumber';
import Content from './content/Content';
import Reply from './reply/Reply';

class MainContents extends React.Component {
  render() {
    return (
      <article className="MainContents">
        <img
          className="contentPicture"
          alt="/articlepicture"
          src={this.props.img}
        />
        <ReactionButton />
        <LikeNumber />
        <Content id={this.props.id} content={this.props.content} />
        <Reply />
      </article>
    );
  }
}

export default MainContents;
