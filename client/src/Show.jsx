import React,{Component} from 'react';
import axios from 'axios'
import img1 from './img/dial-01.png'
import img2 from './img/dial-02.png'
import img3 from './img/dial-03.png'
import img4 from './img/dial-04.png'
import './App.css';
var contents


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
        estimated_number_of_occupants: " ",
        coordinates: []
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
    
    if (result.data[0].preliminary_risk_category===undefined){
    contents=(
      <>
        <img src ={img1} alt = 'nodata'/>
        <p>No Data Available</p>
      </>
    )
    }else{


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
      let coordinates = result.data[0].geocoded_column.coordinates
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
        estimated_number_of_occupants,
        coordinates
      })
    }
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


  if ( preliminary_risk_category === 'Critical Risk'){
    contents=(
      <>
        <div className="informationContainer">
          <div className='locationcontainer'>
            <h4>Address{address}</h4>
            <h4>City{city},{state}{zip_code}</h4>
            <h4>Neighboorhood{neighborhood}</h4>
            <h4>Zip-Code{zip_code}</h4>
            <h4>Year-Built{year_built}</h4>
          </div>
          <div className="riskContainer">
            <h4>{preliminary_risk_category}</h4>
            
          </div>
        </div>
        <img src={img4} alt="really bad"/>
      </>
    );
  }else if (preliminary_risk_category ==='High Risk'){
    contents=(
      <>
        <div className="informationContainer">
          <div className='locationcontainer'>
            <h4>Address{address}</h4>
            <h4>City{city},{state}{zip_code}</h4>
            <h4>Neighboorhood{neighborhood}</h4>
            <h4>Zip-Code{zip_code}</h4>
            <h4>Year-Built{year_built}</h4>
          </div>
          <div className="riskContainer">
            <h4>{preliminary_risk_category}</h4>
            
          </div>
        </div>
      <img src={img3} alt='high risk' />
      </>
    );
  }else if (preliminary_risk_category === 'Medium Risk') {
    contents=(
      <>
        <div className="informationContainer">
          <div className='locationcontainer'>
            <h4>Address{address}</h4>
            <h4>City{city},{state}{zip_code}</h4>
            <h4>Neighboorhood{neighborhood}</h4>
            <h4>Zip-Code{zip_code}</h4>
            <h4>Year-Built{year_built}</h4>
          </div>
          <div className="riskContainer">
            <h4>{preliminary_risk_category}</h4>
            
          </div>
        </div>
      <img src = {img2} alt='medium risk' />
      </>
    );
  }
  


  return (
    <div className = 'container'>
      <form onSubmit={this.handleSubmit}>
        <label>
            Please enter your address:
            <input type="text" onChange={this.handleChange} />
          </label>
            <input type="submit" value="Look up Risk!" />
      </form>
        <div>{contents}</div>
    </div>
  )
}


}



export default Show;
