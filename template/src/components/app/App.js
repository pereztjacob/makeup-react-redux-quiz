import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class App extends PureComponent {

  render() {

    return (
      <section className="home">
        <div>
          <p>component go here</p>
        </div>
      </section>
    );
  }
}

export default connect(
  null
)(App);