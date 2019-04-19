import React, { Component } from 'react';
import axios from 'axios'
import LandingShoes from '../LandingShoes/LandingShoes'
import './Landing.css'
// import headerLogo from './jordanHeader.jpeg'

class Landing extends Component {
  constructor(){
      super()
      this.state = {
        shoes: []
      }
    }

  
  componentDidMount(){
    axios.get('/api/getallshoes')
    .then(res => {
      console.log(res.data)
      this.setState({
          shoes: res.data
      })
  }).catch(err => console.log('AXIOS GETALLSHOES ERR', err))
  }

  render() {
  
    return (
      <div className="mainLanding">
        <header className='landingHeader'> </header> 
        <div className="rowContainer">
          <div className="row">
            {this.state.shoes.map((item,i) => {
              return <LandingShoes key={i} shoe={item} id={item.id}/>
            })}
          </div>
        </div>

      </div>
    );
  }
}

export default Landing;

