import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginSeul extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      opacity: false,
      disabled: true,
    };
  }
  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
    const isValid = this.state.id.includes('@') && this.state.pw.length >= 5;
    this.setState({
      opacity: isValid,
      disabled: !isValid,
    });
  };

  goToMain = () => {
    this.props.history.push('/mainseul');
  };

  testzzz = () => {
    fetch('http://10.58.3.99:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(
        result => {
          if (result.access_token) {
            localStorage.setItem('token', result.access_token); // setItem('token') ??? setItem('access_token') ????
            this.props.history.push('/mainseul');
          } else {
            alert('다시 입력');
          }
        }
        // 삼항연산자 이용시
        // result.access_token
        //   ? this.props.history.push('/mainseul')
        //   : alert('로그인 실패')
      );
  };

  render() {
    const { disabled, opacity } = this.state;
    const { handleInput, testzzz } = this;
    return (
      <div className="login">
        <div className="login-logo">Westagram</div>
        <div className="login-input">
          <input
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
          />
          <input
            type="password"
            name="pw"
            placeholder="비밀번호"
            required
            onChange={handleInput}
          />
        </div>
        <div className="login-btn-box">
          <button
            // onClick={this.goToMain}

            onClick={testzzz}
            disabled={disabled ? 'disabled' : ''}
            style={{ opacity: opacity ? '1' : '0.3' }}
            className="login-btn"
          >
            로그인
          </button>
        </div>
        <div className="login-pw-forget">비밀번호를 잊으셨나요?</div>
      </div>
    );
  }
}

export default withRouter(LoginSeul);
