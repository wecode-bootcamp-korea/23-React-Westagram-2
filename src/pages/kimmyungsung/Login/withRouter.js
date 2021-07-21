import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push('/mainSung');
  };

  render() {
    return (
      <div>
        <button type="submit" className="loginBtn" onClick={this.goToMain}>
          로그인
        </button>
      </div>
    );
  }
}

export default withRouter(Login);
