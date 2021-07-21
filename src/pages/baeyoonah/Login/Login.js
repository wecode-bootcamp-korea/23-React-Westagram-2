import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginAh extends React.Component {
  goToMain = () => {
    this.props.history.push('/MainAh');
  };

  render() {
    return (
      <div className="Login">
        <div className="container">
          <div className="loginContainer">
            <p>westagram</p>
            <div className="idContainer">
              <input
                type="text"
                id="inputId"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>
            <div className="passwordContainer">
              <input
                type="password"
                id="inputPassword"
                placeholder="비밀번호"
              />
            </div>
            <button className="loginButton" onClick={this.goToMain}>
              로그인
            </button>
            <div>
              <a href="#">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginAh);
