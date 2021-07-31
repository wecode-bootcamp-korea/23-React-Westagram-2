import React from 'react';
import Logo from './logo/Logo.js';
import LoginInput from './loginInput/LoginInput';
import './Login.scss';

class LoginSung extends React.Component {
  render() {
    return (
      <form className="LoginSung">
        <Logo />
        <LoginInput />
        <a href="/#" className="forgetPassword">
          비밀번호를 잊으셨나요?
        </a>
      </form>
    );
  }
}

export default LoginSung;
