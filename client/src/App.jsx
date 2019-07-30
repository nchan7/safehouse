import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Comment from './Comment';


class App extends React.Component {
    constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <>
      <Router>
        <nav>
          <Link className='link' to='/'> Safehouse!</Link>
          <Link className='link' to='/search'>Search</Link>
          <Link className='link' to='/comment'>Reach Out</Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/comment" component={Comment} />
      </Router>
      </>
    )
  }
}


export default App;

