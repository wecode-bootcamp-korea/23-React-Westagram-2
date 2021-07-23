import React from 'react';

class IdPwInput extends React.Component {
  constructor() {
    super();

    this.state = {
      Id: '',
      Pw: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      Id: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      Pw: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <input
          id="inputId"
          className="inputId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={this.state.Id}
          onChange={e => {
            this.handleIdInput(e);
          }}
        />
        <input
          id="inputPw"
          className="inputPw"
          type="password"
          placeholder="비밀번호"
          value={this.state.Pw}
          onChange={e => {
            this.handlePwInput(e);
          }}
        />
      </div>
    );
  }
}

export default IdPwInput;
