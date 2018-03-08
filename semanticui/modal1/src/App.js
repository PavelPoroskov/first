import React, { Component } from 'react';
//-
//import logo from './logo.svg';
//import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
//export default App;

import { connect } from "react-redux";
import { Container, Header, Button } from "semantic-ui-react";

import ModalManager from "./components/ModalManager";
import { openModal } from "./actions/modalActions";

class App extends Component {
  render() {
    return (
      <Container>
        <Header block size="huge">
          <Header.Content>semantic-ui-modal-redux</Header.Content>
          <Header.Subheader>It's alive</Header.Subheader>
        </Header>
        <ModalManager />
        <div>Our content will go here.</div>
        <Button onClick={() => this.props.openModal({
              header: "Test content",
              content: "Test content 2"
            })}>
          Open modal
        </Button>
      </Container>
      );
  }
}

export default connect(null, { openModal })(App);
