import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';
class LoginHun extends React.Component {
  constructor() {
    super();
    this.state = {
      userIdValue: '',
      userPasswordValue: '',
    };
  }
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  locationEvent = e => {
    fetch('http://10.58.0.181:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.userIdValue,
        password: this.state.userPasswordValue,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('data:>>>>>', data);
      });
  };

  goToMain = () => {
    this.props.history.push('/MainHun');
  };

  render() {
    const { userIdValue, userPasswordValue } = this.state;
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
              onFocus={this.inputFocus}
              onChange={this.handleInput}
              type="text"
              className="user-id"
              name="userIdValue"
            />
            <input
              placeholder="비밀번호"
              onChange={this.handleInput}
              type="password"
              className="user-password"
              name="userPasswordValue"
            />
            <button
              className="login-btn"
              type="button"
              onClick={this.locationEvent}
              disabled={
                userIdValue.includes('@') && userPasswordValue.length > 4
                  ? false
                  : true
              }
            >
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
