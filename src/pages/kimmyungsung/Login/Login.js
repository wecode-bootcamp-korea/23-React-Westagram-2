/* eslint-disable react/no-direct-mutation-state */
import React from 'react';
import './Login.scss';

class LoginSung extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      disabled: true,
      opacity: 0.2,
    };
  }
  goToMain = () => {
    this.props.history.push('/MainSung');
  };

  handleIdInput = event => {
    this.setState({
      id: event.target.value,
    });
    this.state.id =
      /@*/ && this.state.pw.length >= 5
        ? this.setState({ disabled: false, opacity: 1 })
        : this.setState({ disabled: true, opacity: 0.2 });
  };
  handlePwInput = event => {
    this.setState({
      pw: event.target.value,
    });
    this.state.id =
      /@*/ && this.state.pw.length >= 5
        ? this.setState({ disabled: false, opacity: 1 })
        : this.setState({ disabled: true, opacity: 0.2 });
  };
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
          onInput={this.handleIdInput}
        />
        <input
          type="password"
          id="loginPassword"
          placeholder="비밀번호"
          onInput={this.handlePwInput}
        />
        <button
          type="submit"
          className="loginBtn"
          style={{ opacity: this.state.opacity }}
          disabled={this.state.disabled}
          onClick={this.goToMain}
        >
          로그인
        </button>
        <a href="/#" className="forgetPassword">
          비밀번호를 잊으셨나요?
        </a>
      </form>
    );
  }
}

export default LoginSung;
