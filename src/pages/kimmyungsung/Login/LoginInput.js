import React from 'react';
import LoginButton from './LoginButton';

class LoginInput extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      className: 'deActiveLoginButton',
    };
  }

  handleIdInput = event => {
    this.setState({
      id: event.target.value,
    });
    this.state.id.includes('@') && this.state.pw.length >= 5
      ? this.setState({ className: 'activeLoginButton' })
      : this.setState({ className: 'deActiveLoginButton' });
  };
  handlePwInput = event => {
    this.setState({
      pw: event.target.value,
    });
    this.state.id.includes('@') && this.state.pw.length >= 5
      ? this.setState({ className: 'activeLoginButton' })
      : this.setState({ className: 'deActiveLoginButton' });
  };

  render() {
    return (
      <div className="LoginInput">
        <input
          type="text"
          id="loginId"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onInput={this.handleIdInput}
        />
        <input
          type="password"
          id="loginPassword"
          placeholder="비밀번호"
          onInput={this.handlePwInput}
        />
        <LoginButton className={this.state.className} />
      </div>
    );
  }
}

export default LoginInput;
