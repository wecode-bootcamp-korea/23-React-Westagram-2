import React from 'react';
// import IdInput from './IdInput';
// import PwInput from './PwInput';
import IdPwInput from './IdPwInput';
import './Login.scss';

class LoginHwan extends React.Component {
  goToMain = () => {
    this.props.history.push('/MainHwan');
  };

  render() {
    return (
      <div className="loginBody">
        <div className="Loginmain">
          <div className="mainWrap">
            <header className="logo">westagram</header>
            <section className="loginInputs">
              <div className="idPw">
                <IdPwInput goMain={this.goToMain} />
              </div>
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
      </div>
    );
  }
}

export default LoginHwan;
