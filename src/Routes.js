import React from 'react';
import {Route, IndexRoute} from 'react-router';

// COMPONENTS
import Application from './components/App';
import Auth from './components/Auth/Main';

export default (
    <Route component={Application} path='/'>
      <IndexRoute component={Application}/>
      <Route component={Auth} path='auth'/>
    </Route>
);