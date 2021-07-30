import React from 'react';
import { withRouter } from 'react-router-dom';

class IdPwInput extends React.Component {
  constructor() {
    super();

    this.state = {
      Id: '',
      Pw: '',
      btnChange: 'loginBtn',
      disabled: true,
    };
  }
  Join = () => {
    fetch('http://10.58.3.104:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        // name: '박태환',
        id: this.state.Id,
        password: this.state.Pw,
        // phone_number: '01011111111',
        // age: 29,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('결과: ', result);
        !result.token
          ? alert('입력을 확인해주세요!')
          : this.props.history.push('/MainHwan');
      });
  };

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

  loginKeyup = () => {
    if (this.state.Id.includes('@') && this.state.Pw.length >= 5) {
      this.setState({
        btnChange: 'loginBtnOn',
        disabled: false,
      });
    } else {
      this.setState({
        btnChange: 'loginBtn',
        disabled: true,
      });
    }
  };

  pressEnter = e => {
    if (e.key === 'Enter') {
      this.Join();
    }
  };

  render() {
    console.log(this.state);
    return (
      <div onKeyUp={this.loginKeyup}>
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
          onKeyPress={this.pressEnter}
        />
        <div className="btn">
          <button
            onClick={this.Join}
            className={this.state.btnChange}
            disabled={this.state.disabled}
          >
            로그인
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(IdPwInput);
