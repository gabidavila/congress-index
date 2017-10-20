import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import membersReducer from './reducers/membersReducer';
import statesReducer from './reducers/statesReducer';
import filtersReducer from './reducers/filtersReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-108411781-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const rootReducer = combineReducers({ members: membersReducer, states: statesReducer, filters: filtersReducer });
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App onRender={logPageView}/></Provider>, document.getElementById('root'));
registerServiceWorker();
