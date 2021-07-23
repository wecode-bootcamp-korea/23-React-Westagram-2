import React from 'react';

class IdInput extends React.Component {
  constructor() {
    super();

    this.state = {
      Id: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      Id: e.target.value,
    });
  };

  render() {
    return (
      <input
        id="inputId"
        className="inputId"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        value={this.state.Id}
        onChange={e => {
          this.handleIdInput(e);
          console.log(this.state);
        }}
      />
    );
  }
}

export default IdInput;
