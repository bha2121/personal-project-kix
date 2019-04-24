import React, { Component } from 'react';
import axios from 'axios'
import LandingShoes from '../LandingShoes/LandingShoes'
import './Landing.css'
// import headerLogo from './jordanHeader.jpeg'

class Landing extends Component {
  constructor(){
      super()
      this.state = {
        // jordanArr: [],
        // nikeArr: [],
        // adidasArr: []
        shoes: []
      }
    }

  
  componentDidMount(){
    axios.get('/api/getallshoes')
    .then(res => {
      // console.log(res.data)
      this.setState({
          shoes: res.data
      })
  }).catch(err => console.log('AXIOS GETALLSHOES ERR', err))
  }

  render() {
    // console.log(this.state.shoes.filter((item,i) => {
    //   if (item.brand =='Jordan'){
    //     return item
    //   }}))

    let jordanArr = this.state.shoes.filter((item,i) =>{
      if(item.brand === 'Jordan')
        return item
    }).splice(0,3)

    let nikeArr = this.state.shoes.filter((item,i) =>{
      if(item.brand === 'Nike')
        return item
    }).splice(0,3)

    let adidasArr = this.state.shoes.filter((item,i) =>{
      if(item.brand === 'Adidas')
        return item
    }).splice(0,3)

  
    return (
      <div className="mainLanding">
        <header className='landingHeader'> </header> 

        <div className="rowContainer">
          <div className="jordanRow">
            {jordanArr.map((item,i) => {
              if (item.brand === 'Jordan')
              return <LandingShoes key={i} shoe={item} id={item.id}/>
            })}
          </div>

          <div className="nikeRow">
            {nikeArr.map((item,i) => {
              if (item.brand === 'Nike')
              return <LandingShoes key={i} shoe={item} id={item.id}/>
            })}
          </div>
          
          <div className="adidasRow">
            {adidasArr.map((item,i) => {
              if (item.brand === 'Adidas')
              return <LandingShoes key={i} shoe={item} id={item.id}/>
            })}
          </div>
        </div>

      </div>
    );
  }
}

export default Landing;

