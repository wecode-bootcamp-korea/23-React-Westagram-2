import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginSeul extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      opacity: '0.3',
    };
  }
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push('/mainseul');
  };

  render() {
    return (
      <div className="login">
        <div className="login-logo">Westagram</div>
        <div className="login-input">
          <input
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleInput}
          />
          <input
            type="password"
            name="pw"
            placeholder="비밀번호"
            required
            onChange={this.handleInput}
          />
        </div>
        <div className="login-btn-box">
          <button
            onClick={this.goToMain}
            style={{ opacity: this.state.opacity }}
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
