import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainContainer from './MainContainer';
import ProfileContainer from './components/ProfileContainer';
import MembersContainer from './components/MembersContainer';
import MapContainer from './components/MapContainer';
import CompareContainer from './components/CompareContainer';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <MainContainer>
            <Route exact path='/' component={MembersContainer}/>
            <Route exact path='/members/:id' render={(routeProps) => {
              return <ProfileContainer {...routeProps}/>;
            }}/>
            <Route exact path='/map' component={MapContainer} />
            <Route exact path='/compare' component={CompareContainer} />
            <Route exact path='/about' component={About}/>
          </MainContainer>
        </div>
      </Router>
    );
  }
}

export default App;
