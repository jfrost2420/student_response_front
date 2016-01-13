/**
 *
 * app.js
 *
 * This is the entry file for the application, mostly just setup and boilerplate
 * code. Routes are configured at the end of this file!
 *
 */


// Import all the third party stuff
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, IndexRoute } from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import the pages
import AppLoader from './components/AppLoader';
import MainApp from './components/App.react';
import HomePage from './components/pages/HomePage.react';
import LoginPage from './components/pages/LoginPage.react';
import ReadmePage from './components/pages/ReadmePage.react';


import app from './components/app';
import page1 from './components/page1';
import page2 from './components/page2';
import tab1 from './components/tab1';
import tab2 from './components/tab2';

import { CHANGE_OWNER_NAME, CHANGE_PROJECT_NAME } from './constants/AppConstants';

import auth from './api/auth';


// Import the CSS file, which HtmlWebpackPlugin transfers to the build folder
import '../css/main.css';

import rootReducer from './reducers/rootReducer';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);


function authCheck(nextState, replace) {
  console.log('authCheck...');
  const { user } = store.getState();
  if(!user) {
    replace({},'/login');
  }
}

// Mostly boilerplate, except for the Routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
render((
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={AppLoader}>
        <IndexRoute component={LoginPage}/>
        <Route path="login" component={LoginPage} />
        <Route path="page1" component={page1}>
          <Route path="tab1" component={tab1} />
          <Route path="tab2" component={tab2} />
        </Route>
        <Route path="page2" component={page2} onEnter={authCheck}>
          <Route path="tab1" component={tab1} />
          <Route path="tab2" component={tab2} />
        </Route>
      </Route>

    </Router>
  </Provider>
  ), document.getElementById('app')
);
