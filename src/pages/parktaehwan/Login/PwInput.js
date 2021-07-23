import React from 'react';

class PwInput extends React.Component {
  constructor() {
    super();

    this.state = {
      Pw: '',
    };
  }

  handlePwInput = e => {
    this.setState({
      Pw: e.target.value,
    });
  };

  render() {
    return (
      <input
        id="inputPw"
        className="inputPw"
        type="password"
        placeholder="비밀번호"
        value={this.state.Pw}
        onChange={e => {
          this.handlePwInput(e);
          console.log(this.state);
        }}
      />
    );
  }
}

export default PwInput;
