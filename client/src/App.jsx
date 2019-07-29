import React, { Component } from 'react';
import axios from 'axios'
import './App.css';


class safeHouse extends Component {

  state = {
    // Your required states here
    preliminary_risk_category: " ",
    neighborhood: " ",
    adress: " ",
    city : " ",
    zip_code: " ",
    state: " ",
    year_built:" ",
    no_stories: " ",
    building_use : " ",
    estimated_number_of_occupants: " "
        
    
  }

  handleChange = (event) => {
    this.setState({adress: event.target.value});
    console.log( " your adress is " + this.state.adress);
  }

  handleSubmit = (event) => {
    // Your fetch here
    event.preventDefault()
    let adress = this.state.adress
    axios.get(`https://data.seattle.gov/resource/54qs-2h7f.json?address=${this.state.adress}`).then(result =>{
    

      let preliminary_risk_category = result.data.preliminary_risk_category;
      let neighborhood = result.data.neighborhood;
      let adress = result.data.adress;
      let city = result.data.city;
      let zip_code = result.data.zip_code;
      let state = result.data.state;
      let year_built = result.data.year_built;
      let  no_stories = result.data.no_stories;
      let building_use = result.data.building_use;
      let estimated_number_of_occupants = result.data.estimated_number_of_occupants;
        
        this.setState({
          preliminary_risk_category,
          neighborhood,
          adress,
          city ,
          zip_code,
          state,
          year_built,
          no_stories,
          building_use ,
          estimated_number_of_occupants
        })
    })
    // Your state updates go under function(json)
  }

  render() {
    let adress = this.state.adress
    return (
      <div class = 'container'>
        <form onSubmit={this.handleSubmit}>
        <p>
          
        <div >
          <h4>{adress}</h4>
          
        </div>
            </p>
            <label>
              Please enter your adress:
              <input type="text" onChange={this.handleChange} />
            </label>
            <input type="submit" value="Look up Risk!" />
          </form>
      </div>
    )
  }
}


export default safeHouse;



