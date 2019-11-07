import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <p>This is the unsecured Welcome page. <br />
        This app is using the keycloak-js library from Keycloak to require a valid token on the /secured route <br />
        Set up Keycloak realm and client settings in the public/keycloak.json file.</p>
      </div>
    );
  }
}
export default Welcome;