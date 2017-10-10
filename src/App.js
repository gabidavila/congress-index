import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainContainer from './MainContainer';
import MembersContainer from './components/MembersContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainContainer>
            <MembersContainer/>
          </MainContainer>
        </div>
      </Router>
    );
  }
}

export default App;
