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

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
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
          name="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onInput={this.handleInput}
        />
        <input
          type="password"
          id="loginPassword"
          name="pw"
          placeholder="비밀번호"
          onInput={this.handleInput}
        />
        <LoginButton className={this.state.className} />
      </div>
    );
  }
}

export default LoginInput;
