import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginAh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idInput: '',
      pwInput: '',
    };
  }

  loginTest = () => {
    fetch('users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.idInput,
        password: this.state.pwInput,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.props.history.push('/MainAh');
        } else {
          alert('아이디/비밀번호가 틀렸습니다!');
        }
      });
  };
  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  goToMain = () => {
    this.props.history.push('/MainAh');
  };

  render() {
    const { idInput, pwInput } = this.state;
    const isButtonActive = idInput.includes('@') && pwInput.length >= 5;
    return (
      <div className="Login">
        <div className="container">
          <div className="loginContainer">
            <p>westagram</p>
            <div className="idContainer">
              <input
                onChange={this.handleInput}
                name="idInput"
                type="text"
                className="inputId"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>
            <div className="passwordContainer">
              <input
                onChange={this.handleInput}
                name="pwInput"
                type="password"
                className="inputPassword"
                placeholder="비밀번호"
              />
            </div>
            <button
              disabled={!isButtonActive}
              className={`loginButton ${
                isButtonActive ? 'loginButtonOn' : 'loginButtonOff'
              }`}
              // onClick={this.goToMain}
              onClick={this.loginTest}
            >
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
