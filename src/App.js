import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainContainer from './MainContainer';
import ProfileContainer from './components/ProfileContainer';
import MembersContainer from './components/MembersContainer';
import MapContainer from './components/MapContainer';
import CompareContainer from './components/CompareContainer';
import BillsContainer from './components/BillsContainer';
import About from './components/About';
import BillItemContainer from './components/bills/Item';

class App extends Component {
  componentWillMount() {
    this.props.onRender();
  }

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
            <Route exact path='/bills' component={BillsContainer} />
            <Route exact path='/:congress/bills/:id' render={(routeProps) => {
              return <BillItemContainer {...routeProps}/>;
            }}/>
            <Route path='/compare/:chamber?/:firstMember?/:secondMember?' render={(routerProps) => <CompareContainer {...routerProps}/>} />
            <Route exact path='/about' component={About}/>
          </MainContainer>
        </div>
      </Router>
    );
  }
}

export default App;
