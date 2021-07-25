import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';
class LoginHun extends React.Component {
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
              className="user-id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              autofocus
            />
            <input
              className="user-password"
              type="password"
              placeholder="비밀번호"
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
