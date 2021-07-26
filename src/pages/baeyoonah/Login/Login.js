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
      defaultColor: { backgroundColor: 'skyblue' },
      disabled: 'disabled',
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.state.idInput.includes('@') && this.state.pwInput.length >= 5
      ? this.setState({
          defaultColor: { backgroundColor: 'blue' },
          disabled: '',
        })
      : this.setState({
          defalutColor: { backgroundColor: 'skyblue' },
          disabled: 'disabled',
        });
  };

  render() {
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
                id="inputId"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>
            <div className="passwordContainer">
              <input
                onChange={this.handleInput}
                name="pwInput"
                type="password"
                id="inputPassword"
                placeholder="비밀번호"
              />
            </div>
            <button
              disabled={this.state.disabled}
              style={this.state.defaultColor}
              className="loginButton"
              onClick={this.goToMain}
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
