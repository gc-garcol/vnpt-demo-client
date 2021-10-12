import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from "resources/Router";

import "styles/App.scss"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {
          Object.keys(routes).map((path) => {
            return <Route exact key={ path } path={ path } component={ routes[path] } ></Route>
          })
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
