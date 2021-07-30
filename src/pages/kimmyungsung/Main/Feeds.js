import React from 'react';
import ProfileTop from './ProfileTop';
import MainContents from './MainContents';

class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
    };
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/data/feedData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         commentList: data,
  //       });
  //     });
  // }
  render() {
    const { commentList } = this.state;
    const getFeeds = () => {
      fetch('/data/feedData.json', {
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          this.setState({
            commentList: data,
          });
        });
    };
    getFeeds();

    return (
      <div className="newFeed">
        {commentList.map(comment => {
          return (
            <div className="feeds" key={comment.id}>
              <ProfileTop />
              <MainContents
                img={comment.img}
                id={comment.userName}
                content={comment.content}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Feeds;
