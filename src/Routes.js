import React from 'react';
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
// import LoginSeul from './pages/kimdaseul/Login/Login.js';
// import MainSeul from './pages/kimdaseul/Main/Main.js';
// import LoginAh from './pages/baeyoonah/Login/Login';
// import MainAh from './pages/baeyoonah/Main/Main.js';
// import LoginHwan from './pages/parktaehwan/Login/Login.js';
// import MainHwan from './pages/parktaehwan/Main/Main.js';
// import LoginHoon from './pages/kimjihoon/Login/Login.js';
// import MainHoon from './pages/kimjihoon/Main/Main.js';
// import LoginSung from './pages/kimmyungsung/Login/Login.js';
// import MainSung from './pages/kimmyungsung/Main/Main.js';
import Nav from './components/Nav/Nav.js';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Nav} />
          {/* <Route exact path="/Login" component={LoginSeul} />
          <Route exact path="/Main" component={MainSeul} />
          <Route exact path="/Login" component={LoginAh} />
          <Route exact path="/Main" component={MainAh} />
          <Route exact path="/Login" component={LoginHwan} />
          <Route exact path="/Main" component={MainHwan} />
          <Route exact path="/Login" component={LoginHoon} />
          <Route exact path="/Main" component={MainHoon} />
          <Route exact path="/Login" component={LoginSung} />
          <Route exact path="/Main" component={MainSung} /> */}
        </Switch>
      </Router>
    )
  }
}

export default Routes;