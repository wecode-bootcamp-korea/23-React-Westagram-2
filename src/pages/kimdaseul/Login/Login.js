import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginSeul extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login-logo">Westagram</div>
        <div className="login-input">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            required
          />
          <input type="password" placeholder="비밀번호" required />
        </div>
        <div className="login-btn-box">
          <Link to="/mainseul" className="login-btn">
            로그인
          </Link>
        </div>
        <div className="login-pw-forget">비밀번호를 잊으셨나요?</div>
      </div>
    );
  }
}

export default LoginSeul;
