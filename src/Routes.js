import React, { PropTypes } from 'react';
import {hashHistory,IndexRoute,Router,Route} from 'react-router';

import App from './App.js';
import List from './List.js';
import Complete from './Complete.js';
import Active from './Active.js';
class Routes extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={List} />
          <Route path="/complete" component={Complete} />
          <Route path="/active" component={Active} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
