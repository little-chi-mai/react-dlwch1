import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style.css';

import Form from './views/Form';
// import Result from './views/Result';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Form />} />
          {/* <Route exact path="/result" component={() => <Result />} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
