import React,{Component} from 'react';
import axios from 'axios'
import img1 from './img/dial-01.png'
import img2 from './img/dial-02.png'
import img3 from './img/dial-03.png'
import img4 from './img/dial-04.png'

import './App.css';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
    // Your required states here
        preliminary_risk_category: " ",
        neighborhood: " ",
        address: " ",
        city : " ",
        zip_code: " ",
        state: " ",
        year_built:" ",
        no_stories: " ",
        building_use : " ",
        estimated_number_of_occupants: " "
    }
  }

  handleChange = (event) => {
    this.setState({address: event.target.value});
    console.log( " your adress is " + this.state.adress);
  }

  handleSubmit = (event) => {
    // Your fetch here
    event.preventDefault()
    let address = this.state.address
    axios.get(`https://data.seattle.gov/resource/54qs-2h7f.json?address=${this.state.address}`).then(result =>{
    

      let preliminary_risk_category = result.data[0].preliminary_risk_category;
      let neighborhood = result.data[0].neighborhood;
      let address = result.data[0].adress;
      let city = result.data[0].city;
      let zip_code = result.data[0].zip_code;
      let state = result.data[0].state;
      let year_built = result.data[0].year_built;
      let  no_stories = result.data[0].no_stories;
      let building_use = result.data[0].building_use;
      let estimated_number_of_occupants = result.data[0].estimated_number_of_occupants;
      this.setState({
        preliminary_risk_category,
        neighborhood,
        address,
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
    let address = this.state.address
    let year_built = this.state.year_built
    let neighborhood = this.state.neighborhood
    let city = this.state.city
    let state = this.state.state
    let zip_code = this.state.zip_code
    let preliminary_risk_category = this.state.preliminary_risk_category


  var contents
  if ( preliminary_risk_category === 'Critical Risk'){
    contents=(
      <img src={img4} alt="really bad"/>
    );
  }else if (preliminary_risk_category ==='High Risk'){
    contents=(
      <img src={img3} alt='high risk' />
    );
  }else if (preliminary_risk_category === 'Medium Risk') {
    contents=(
      <img src = {img2} alt='medium risk' />
    );
  }else if (preliminary_risk_category === " ") {
    contents=(
      <>
        <img src ={img1} alt = 'nodata'/>
        <p>No Data Available</p>
      </>
    );
  }


  return (
    <div className = 'container'>
      <form onSubmit={this.handleSubmit}>
          
          <label>
            Please enter your adress:
            <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Look up Risk!" />
          
        <div >
          <h4>{address}</h4>
          <h4>year built:{year_built}</h4>
          <h4>{neighborhood}</h4>
          <h4>{city}</h4>
          <h4>{state}</h4>
          <h4>{zip_code}</h4>
          <h4>{preliminary_risk_category}</h4>
          <div>{contents}</div>
        </div>
        
        </form>
    </div>
  )
}


}



export default Show;
// function Show() {
//   return (
//     <div className="App">
//       <h3>Your Home's Risk</h3>
//           <h5>Address:</h5>
//           <p>{props.address}</p>
//           <h5>Zip Code:</h5>
//           <p>{props.zipcode}</p>
//     </div>
//   );
// }
// export default Show;