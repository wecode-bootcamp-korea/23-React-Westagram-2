import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginSeul from './pages/kimdaseul/Login/Login.js';
import MainSeul from './pages/kimdaseul/Main/Main.js';
import LoginAh from './pages/baeyoonah/Login/Login';
import MainAh from './pages/baeyoonah/Main/Main.js';
import LoginHwan from './pages/parktaehwan/Login/Login.js';
import MainHwan from './pages/parktaehwan/Main/Main.js';
import LoginHun from './pages/kimjihun/Login/Login.js';
import MainHun from './pages/kimjihun/Main/Main.js';
import LoginSung from './pages/kimmyungsung/login/Login';
import MainSung from './pages/kimmyungsung/main/Main';
import Nav from './components/Nav/Nav.js';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Nav} />
          <Route exact path="/LoginSeul" component={LoginSeul} />
          <Route exact path="/MainSeul" component={MainSeul} />
          <Route exact path="/LoginAh" component={LoginAh} />
          <Route exact path="/MainAh" component={MainAh} />
          <Route exact path="/LoginHwan" component={LoginHwan} />
          <Route exact path="/MainHwan" component={MainHwan} />
          <Route exact path="/LoginHun" component={LoginHun} />
          <Route exact path="/MainHun" component={MainHun} />
          <Route exact path="/LoginSung" component={LoginSung} />
          <Route exact path="/MainSung" component={MainSung} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
