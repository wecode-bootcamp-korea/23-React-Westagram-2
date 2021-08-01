import React from 'react';
import Feed from './Feed';

class Feeds extends React.Component {
  constructor() {
    super();

    this.state = {
      feeds: [],
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  goToLogin = () => {
    this.props.history.push('/LoginHwan');
  };

  render() {
    return (
      <div className="feeds">
        {this.state.feeds.map((el, index) => (
          <Feed
            key={index}
            writerName={el.writerName}
            writeContent={el.writeContent}
            imageSrc={el.imageSrc}
            cmtName={el.cmtName}
            cmtContent={el.cmtContent}
            goToLogin={this.props.goToLogin}
          />
        ))}
      </div>
    );
  }
}

export default Feeds;