import React from 'react';
// import IdInput from './IdInput';
// import PwInput from './PwInput';
import IdPwInput from './IdPwInput';
import LoginBtn from './Button';
import './Login.scss';

class LoginHwan extends React.Component {
  render() {
    return (
      <body className="loginBody">
        <div className="Loginmain">
          <div className="mainWrap">
            <header className="logo">westagram</header>
            <section className="loginInputs">
              <div className="idPw">
                {/* <IdInput />
                <PwInput /> */}
                <IdPwInput />
              </div>
              <LoginBtn />
            </section>
            <footer>
              <div className="forgotPw">
                <a className="forgotPwLink" href="">
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
