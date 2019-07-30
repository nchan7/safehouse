import React from 'react';
import './App.css';
import Earthquakes from './img/Earthquakes.png';
import EarthquakeMap from './img/EarthquakeMap.png';
import Unreinforced from './img/Unreinforced-masonry.png';
import {
    Link
    } from 'react-router-dom';
// import Map from './Map';

const Home = props => (
    <>
        <div className='home'>
            <h2>SAFEHOUSE!🏠</h2>
            <h4>grassroots initiative for earthquake safety</h4>
            <div className="context">
                <img className="image" src={Earthquakes}/><br/>
                <img className="image" src={EarthquakeMap}/><br/>
                <img className="image" src={Unreinforced}/><br/>
            </div>
            <Link to='/search'>
                <button className='button'>CHECK A BUILDING</button>
            </Link>
            {/* <div className="map">
                <Map></Map>
            </div> */}
            
        </div>
    </>
)

export default Home; 