import React from 'react';
import ReactionButton from './ReactionButton';
import LikeNumber from './LikeNumber';
import Content from './Content';
import Reply from './Reply';

class MainContents extends React.Component {
  render() {
    return (
      <article className="MainContents">
        <img alt="/articlepicture" src={this.props.img} />
        <ReactionButton />
        <LikeNumber />
        <Content id={this.props.id} content={this.props.content} />
        <Reply />
      </article>
    );
  }
}

export default MainContents;
