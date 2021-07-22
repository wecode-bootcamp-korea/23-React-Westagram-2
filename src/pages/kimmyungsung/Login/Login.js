import React from 'react';
import './Login.scss';
import Login from './withRouter';

class LoginSung extends React.Component {
  render() {
    return (
      <form className="LoginSung">
        <header className="logo">
          <a href="LoginSung">Westagram</a>
        </header>
        <input
          type="text"
          id="loginId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input type="password" id="loginPassword" placeholder="비밀번호" />
        <Login />
        <a href="/#" className="forgetPassword">
          비밀번호를 잊으셨나요?
        </a>
      </form>
    );
  }
}

export default LoginSung;
