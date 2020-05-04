import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
