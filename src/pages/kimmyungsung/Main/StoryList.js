import React from 'react';

class StoryList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch('/data/storyData.json', { method: `GET` })
      .then(res => res.json())
      .then(data => {
        this.setState({
          list: data,
        });
      });
  }

  render() {
    const { list } = this.state;
    return (
      <>
        {list.map(data => (
          <div className="friendStory" key={data.id}>
            <img alt="profile" src={data.img} />
            <div className="friendInform">
              <span>{data.userName}</span>
              <span>{data.uploadTime}</span>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default StoryList;
