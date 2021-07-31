import React from 'react';
import LoginButton from './LoginButton';

class LoginInput extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      // className: 'deActiveLoginButton',
    };
  }

  // handleEvent = e => {
  //    e.preventDefault();
  //   fetch('api 주소', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: this.state.id,
  //       password: this.state.pw,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       if (result.token) {
  //         localStorage.setItem('token', result.token);
  //         this.props.history.push('./');
  //       }
  //     });
  // };

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  //   this.state.id.includes('@') && this.state.pw.length >= 5
  //     ? this.setState({ className: 'activeLoginButton' })
  //     : this.setState({ className: 'deActiveLoginButton' });
  // };

  render() {
    const { id, pw } = this.state;
    const buttonActiveConditon = id.includes('@') && pw.length >= 5;
    return (
      <div className="LoginInput">
        <input
          type="text"
          id="loginId"
          name="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onInput={this.handleInput}
        />
        <input
          type="password"
          id="loginPassword"
          name="pw"
          onInput={this.handleInput}
          placeholder="비밀번호"
        />
        <LoginButton
          className={
            buttonActiveConditon ? 'activeLoginButton' : 'deActiveLoginButton'
          }
        />
      </div>
    );
  }
}

export default LoginInput;
