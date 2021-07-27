import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginButton extends React.Component {
  goToMain = () => {
    this.props.history.push('/MainSung');
  };

  render() {
    return (
      <button
        type="submit"
        className={this.props.className}
        onClick={this.goToMain}
      >
        로그인
      </button>
    );
  }
}

export default withRouter(LoginButton);
