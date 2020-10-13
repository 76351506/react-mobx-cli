import React from 'react';
import Test from './components/test';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from '@/router';

function App(props) {
  return <div>
    this is app
    <Test></Test>
    <Router>
      <RouterView></RouterView>
    </Router>

  </div>
}

export default App;
