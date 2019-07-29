import React, { Component } from 'react';
import Show from './Show';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';


class App extends React.Component {
    constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <>
        <div className='Container'>
            <Show></Show>
          </div>
      <Router>
        <nav>
          <Link to='/'> Safehouse!</Link>
          <Link to='/search'>Search</Link>
          <Link to='/comment'>Comment</Link>
        </nav>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/" component={Home} /> */}
      </Router>
      </>
    )
  }
}


export default App;

