import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Secured from './Secured';
import Unsecured from './Unsecured';
import Header from './Header';
import {Jumbotron, Button} from 'react-bootstrap';
import './App.css';
import './bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container">
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              <Route exact path="/" component={Welcome} />
            </p>
            <p>
              <Link to="/unsecured">Unsecured Route</Link> <br />
              <Link to="/secured">Secured Route + Load User Data</Link>
            </p>
          </Jumbotron>
          <Route path="/unsecured" component={Unsecured} />
          <Route path="/secured" component={Secured} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
