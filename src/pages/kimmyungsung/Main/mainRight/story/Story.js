import React from 'react';
import StoryList from './StoryList';

class Story extends React.Component {
  render() {
    return (
      <div className="story">
        <div className="storyTitle">
          <span>스토리</span>
          <span>모두 보기</span>
        </div>
        <StoryList />
      </div>
    );
  }
}

export default Story;
