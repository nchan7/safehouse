import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Show from './Show';
import Comment from './Comment';
import Next from './Next';
import Logo from './img/SafeHouseLogo.png';


class App extends React.Component {
    constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <>
      <Router>
        <nav>
          <Link to='/'>
            <img className="logo" src={Logo}/>
          </Link>
          {/* <Link className='link' to='/'> Home</Link> */}
          <Link className='link' to='/search'>Search</Link>
          <Link className='link' to='/comment'>Reach Out</Link>
          <Link className='link' to='/nextsteps'>What Can I Do?</Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Show} />
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/nextsteps" component={Next} />
      </Router>
      </>
    )
  }
}


export default App;

