import React from 'react';

class RecommandList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch('/data/recommandData.json')
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
      <div>
        {list.map(data => (
          <div className="recommandList" ket={data.id}>
            <div className="recommandProfile">
              <img alt="profile" src={data.img} />
              <div className="friendInform">
                <span>{data.userName}</span>
                <span>{data.status}</span>
              </div>
            </div>
            <button type="submit">팔로우</button>
          </div>
        ))}
      </div>
    );
  }
}

export default RecommandList;
