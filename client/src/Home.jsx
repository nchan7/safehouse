import React from 'react';
import './App.css';
import {
    Link
  } from 'react-router-dom';

const Home = props => (
    <>
        <div className='home'>
            <h2>SafeHouse!🏠</h2>
            <Link to='/search'>
                <button className='button'>Check A Building</button>
            </Link>
        </div>
    </>
)

export default Home; 