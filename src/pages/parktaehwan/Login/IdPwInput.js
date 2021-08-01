import React from 'react';
import { withRouter } from 'react-router-dom';

class IdPwInput extends React.Component {
  constructor() {
    super();

    this.state = {
      loginId: '',
      loginPw: '',
    };
  }

  join = () => {
    const { loginId, loginPw } = this.state;
    fetch('http://10.58.3.104:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        // name: '박태환',
        id: loginId,
        password: loginPw,
        // phone_number: '01011111111',
        // age: 29,
      }),
    })
      .then(response => response.json())
      .then(result => {
        !result.token
          ? alert('입력을 확인해주세요!')
          : this.props.history.push('/MainHwan');
      });
  };

  handleIdPwInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  pressEnter = e => {
    if (e.key === 'Enter') {
      this.join();
    }
  };

  render() {
    const { loginId, loginPw } = this.state;
    const { handleIdPwInput, pressEnter, join } = this;
    const isButtonActive = loginId.includes('@') && loginPw.length >= 5;
    return (
      <div onKeyUp={this.loginKeyup}>
        <input
          id="inputId"
          className="inputId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={loginId}
          name="loginId"
          onChange={handleIdPwInput}
        />
        <input
          id="inputPw"
          className="inputPw"
          type="password"
          placeholder="비밀번호"
          value={loginPw}
          name="loginPw"
          onChange={handleIdPwInput}
          onKeyPress={pressEnter}
        />
        <div className="btn">
          <button
            onClick={join}
            className={isButtonActive ? 'loginBtnOn' : 'loginBtn'}
            disabled={!isButtonActive}
          >
            로그인
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(IdPwInput);
