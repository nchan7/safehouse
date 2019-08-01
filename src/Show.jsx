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
        
      }
    }
    handleChange = (event) => {
    this.setState({address: event.target.value});
    console.log( " your address is " + this.state.address);
  }
  

  handleSubmit = (event) => {
    // Your fetch here
    event.preventDefault()
    let address = this.state.address
    axios.get(`https://data.seattle.gov/resource/54qs-2h7f.json?address=${this.state.address}`).then(result =>{

      if  ( !(result.data.length)){
      contents=(
        <>
          <img src ={img1} alt = 'nodata'/>
          <p>No Data Available</p>
        </>
      )
      } else {
        let preliminary_risk_category = result.data[0].preliminary_risk_category;
        let neighborhood = result.data[0].neighborhood;
        let address = result.data[0].address;
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
          building_use,
          estimated_number_of_occupants
        })
      }
    })
    // Your state updates go under function(json)
  }
  resetForm = (event)=>{
    this.setState({
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
    })
  }

render() {

    let address = this.state.address
    let year_built = this.state.year_built
    let neighborhood = this.state.neighborhood
    let city = this.state.city
    let state = this.state.state
    let zip_code = this.state.zip_code
    let preliminary_risk_category = this.state.preliminary_risk_category
    let occupants = this.state.estimated_number_of_occupants


  if ( preliminary_risk_category === 'Critical Risk'){
    contents=(
      <>
        <div className="imageContainer">
          <img src={img4} alt="really bad"/>
          <div className="riskContainer">
            <h3>{preliminary_risk_category}</h3>
          </div>
          <div className="details">
            <div className='locationcontainer'>
              <h5>Address: {address}</h5>
              <h5>City: {city},{state}</h5>
              <h5>Neighboorhood: <br/> {neighborhood}</h5>
              <h5>Zip-Code: {zip_code}</h5>
              <h5>Estimated No. of Occupants: {occupants}</h5>
              <h5>Year-Built: {year_built}</h5>
            </div>
            <div className="nextsteps">
              <a href="./comment"  className='button'>What Can I Do About It?</a>
            </div>
          </div>
        </div>
      </>
    );
  }else if (preliminary_risk_category ==='High Risk'){
    contents=(
      <>
        <div className="imageContainer">
          <img src={img3} alt='high risk' />
          <div className="riskContainer">
            <h3>{preliminary_risk_category}</h3>  
          </div>
          <div className='details'>
            <div className='locationcontainer'>
              <h5>Address: {address}</h5>
              <h5>City: {city},{state}</h5>
              <h5>Neighboorhood: <br/> {neighborhood}</h5>
              <h5>Zip-Code: {zip_code}</h5>
              <h5>Estimated No. of Occupants: {occupants}</h5>
              <h5>Year-Built: {year_built}</h5>
            </div>
            <div className="nextsteps">
              <a href="./comment"  className='button'>What Can I Do About It?</a>
            </div>
          </div>
        </div>
      </>
    );
  }else if (preliminary_risk_category === 'Medium Risk') {
    contents=(
      <>
        <div className="imageContainer">
          <img src = {img2} alt='medium risk' />
          <div className="riskContainer">
            <h3>{preliminary_risk_category}</h3>
          </div>
          <div className='details'>
            <div className='locationcontainer'>
              <h5>Address: {address}</h5>
              <h5>City: {city},{state}</h5>
              <h5>Neighboorhood: <br/> {neighborhood}</h5>
              <h5>Zipcode: {zip_code}</h5>
              <h5>Estimated No. of Occupants: {occupants}</h5>
              <h5>Year Built: {year_built}</h5>
            </div>
            <div className="nextsteps">
              <a href="./comment"  className='button'>What Can I Do About It?</a>
            </div>
          </div>
        </div>
      </>
    );
  }
  


  return (
    <div className = 'container'>
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Please enter your address:</p>
          <input type="text" className="searchbar" onChange={this.handleChange} onClick={this.resetForm} placeholder="e.x. 123 Main St NE"/>
        </label>
        <input className='button' type="submit" value="Look Up Risk!" />
      </form>
      <div>{contents}</div>
    </div>
  )
}


}



export default Show;
