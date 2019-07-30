import React from 'react';
import './App.css';
import homeImg1 from './img/context1.png';
import homeImg2 from './img/context2.png';
import homeImg3 from './img/context3.png';
import {
    Link
  } from 'react-router-dom';
import Map from './Map';

const Home = props => (
    <>
        <div className='home'>
            <h2>SafeHouse!🏠</h2>
            <Link to='/search'>
                <button className='button'>CHECK A BUILDING</button>
            </Link>
            <div className="context">
                <img className="image" src={homeImg1}/><br/>
                <img className="image" src={homeImg2}/><br/>
                <img className="image" src={homeImg3}/><br/>
            </div>
            <div className="map">
                <Map></Map>
            </div>
            
        </div>
    </>
)

export default Home; 