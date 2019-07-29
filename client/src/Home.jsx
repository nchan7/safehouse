import React from 'react';
import './App.css';
import {
    Link
  } from 'react-router-dom';

const Home = props => (
    <>
        <div className='home'>
            <h2>SafeHouse!🏠</h2>
            <h4>Who are you?</h4>
            <button className='button'>Homeowner/Resident</button><br/><br/>
            <button className='button'>Developer</button>
        </div>
    </>
)

export default Home; 