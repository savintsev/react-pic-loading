import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchPic } from './actions';

import Index from './pages/Index';
import History from './pages/History';

import NavItem from './components/NavItem';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPic());
  }, [dispatch]);

  const pages = [
    {
      path: '/',
      name: 'Главная',
      component: Index
    },
    {
      path: '/history',
      name: 'История',
      component: History
    }
  ];

  const pagesNavigation = pages => pages.map(({ path, name }) => (
    <NavItem key={path} path={path} name={name} />
  ));

  const pagesRoutes = pages => pages.map(({ path, component }) => (
    <Route exact key={path} path={path} component={component} />
  ));

  return (
    <Router>
      <div className="main">
        <nav className="navigation">
          <ul className="navigation__list">
            {pagesNavigation(pages)}
          </ul>
        </nav>

        <div className="container">
          <Switch>
            {pagesRoutes(pages)}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
