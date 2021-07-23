import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginAh extends React.Component {
  goToMain = () => {
    this.props.history.push('/MainAh');
  };

  constructor(props) {
    super(props);
    this.state = {
      idInput: '',
      pwInput: '',
    };
  }
  handleIdInput = event => {
    this.setState({
      idInput: event.target.value,
    });
    console.log('아이디가 나오는지 확인');
  };

  handlePwInput = event => {
    this.setState({
      pwInput: event.target.value,
    });
    console.log('비밀번호가 나오는지 확인');
  };

  render() {
    return (
      <div className="Login">
        <div className="container">
          <div className="loginContainer">
            <p>westagram</p>
            <div className="idContainer">
              <input
                onChange={this.handleIdInput}
                type="text"
                id="inputId"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>
            <div className="passwordContainer">
              <input
                onChange={this.handlePwInput}
                type="password"
                id="inputPassword"
                placeholder="비밀번호"
              />
            </div>
            <button className="loginButton" onClick={this.goToMain}>
              로그인
            </button>
            <div>
              <a href="google.com">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginAh);
