
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory, createHashHistory } from 'history';
import { isElectron } from './utils';
import Home from './Home';
import About from './About';
import './index.css';

export const history = isElectron()
  ? createHashHistory()
  : createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/about' exact element={<About />}> </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);