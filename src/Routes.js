import React from 'react';
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import LoginSeul from './pages/이름/Login/Login.js';
import MainSeul from './pages/이름/Main/Main.js';
import LoginAh from './pages/이름/Login/Login.js';
import MainAh from './pages/이름/Main/Main.js';
import LoginHwan from './pages/이름/Login/Login.js';
import MainHwan from './pages/이름/Main/Main.js';
import LoginHoon from './pages/이름/Login/Login.js';
import MainHoon from './pages/이름/Main/Main.js';
import LoginSung from './pages/이름/Login/Login.js';
import MainSung from './pages/이름/Main/Main.js';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={LoginSeul} />
          <Route exact path="/Main" component={MainSeul} />
          <Route exact path="/Login" component={LoginAh} />
          <Route exact path="/Main" component={MainAh} />
          <Route exact path="/Login" component={LoginHwan} />
          <Route exact path="/Main" component={MainHwan} />
          <Route exact path="/Login" component={LoginHoon} />
          <Route exact path="/Main" component={MainHoon} />
          <Route exact path="/Login" component={LoginSung} />
          <Route exact path="/Main" component={MainSung} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;