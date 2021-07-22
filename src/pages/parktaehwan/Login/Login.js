import React from 'react';
import './Login.scss';

class LoginHwan extends React.Component {
  goToMain = () => {
    this.props.history.push('/MainHwan');
  };

  render() {
    return (
      <body className="loginBody">
        <div className="Loginmain">
          <div className="mainWrap">
            <header className="logo">westagram</header>
            <section className="loginInputs">
              <div className="idPw">
                <input
                  id="inputId"
                  className="inputId"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input
                  id="inputPw"
                  className="inputPw"
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <div className="btn">
                <button onClick={this.goToMain} className="loginBtn">
                  로그인
                </button>
              </div>
            </section>
            <footer>
              <div className="forgotPw">
                <a className="forgotPwLink" href="#">
                  비밀번호를 잊으셨나요?
                </a>
              </div>
            </footer>
          </div>
        </div>
      </body>
    );
  }
}

export default LoginHwan;
