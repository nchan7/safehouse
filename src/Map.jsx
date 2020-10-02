import React from 'react';
import ReactMapGL from 'react-map-gl';
 
class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            viewport: {
            width: 800,
            height: 600,
            latitude: 47.6062,
            longitude: -122.3321,
            zoom: 8
            }
        }
    }
    
    render() {
        const token = "pk.eyJ1IjoibmNoYW43IiwiYSI6ImNqeGMxbXh3YTAwN3Ezb3A5Z2NiZ3d0bjYifQ.xBExfV164J2TU9NPnYXO2g";
        return (
        <ReactMapGL
            {...this.state.viewport}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken={token}
            onViewportChange={(viewport) => this.setState({viewport})}
        />
        );
    }
}


export default Map; 