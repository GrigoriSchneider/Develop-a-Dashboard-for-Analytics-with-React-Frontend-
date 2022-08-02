import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './page/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HorizontalNavigation from './components/HorizontalNavigation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HorizontalNavigation />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
