import React from 'react';
import './Login.scss';
import Logo from './Logo';
import LoginInput from './LoginInput';

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
