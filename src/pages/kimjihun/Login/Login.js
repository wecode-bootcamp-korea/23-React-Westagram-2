import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';
class LoginHun extends React.Component {
  constructor() {
    super();
    this.state = {
      userIdValue: '',
      userPasswordValue: '',
    };
  }
  handleIdInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push('/MainHun');
  };

  render() {
    return (
      <div className="container">
        <header className="login-body">
          <div className="logo">
            <h1 className="main-title">Westagram</h1>
          </div>
        </header>
        <section className="user-login">
          <div className="user-input">
            <input
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
              type="text"
              className="user-id"
              name="userIdValue"
            />
            <input
              placeholder="비밀번호"
              onChange={this.handleIdInput}
              type="password"
              className="user-password"
              name="userPasswordValue"
            />
            <button className="login-btn" type="button" onclick={this.goToMain}>
              로그인
            </button>
          </div>
        </section>
        <footer>
          <p>비밀번호를 잊으셨나요?</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(LoginHun);
