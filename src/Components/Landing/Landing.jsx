import React, { Component } from 'react';
import axios from 'axios'
import LandingShoes from '../LandingShoes/LandingShoes'
import './Landing.css'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import jordanLogo2 from './logos/jordanLogo2.png'
import nikeLogo from './logos/nikeLogo.png'
import adidasLogo2 from './logos/adidasLogo2.png'
import adcjordannike3 from './logos/adcjordannike3.png'
import shippingupdated2 from './logos/shippingupdated2.png'
import { Link } from 'react-router-dom'

import shoebanner3 from './logos/shoebanner3.png'
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
    
    let jordanArr = this.state.shoes.filter((item,i) =>{
      if(item.brand === 'Jordan')
        return item
    }).splice(0,4)

    let nikeArr = this.state.shoes.filter((item,i) =>{
      if(item.brand === 'Nike')
        return item
    }).splice(0,4)

    let adidasArr = this.state.shoes.filter((item,i) =>{
      if(item.brand === 'Adidas')
        return item
    }).splice(0,4)

  
    return (
      <div className="mainLanding">
        <div className="headerContainer">
          <header className='landingHeader'>
          <h4>
            SLC KiX
          </h4>
          <h1>
            BUY AUTHENTIC SNEAKERS
          </h1>
          </header> 
        </div>
        <Carousel className='carouselPics' autoPlay showArrows={false} showStatus={false} 
                  showThumbs={false} infiniteLoop={true} axis={'vertical'} 
                  transitionTime={800} stopOnHover={false} showIndicators={false}>
                <div>
                    <img src={shoebanner3}/>
                </div>
                <div>
                    <img src={shippingupdated2}/>
                </div>
                <div>
                    <img src={adcjordannike3}/>
                </div>
        </Carousel>

        <div className="landingRowContainer">
          <div className="rowHeaderJ">
            <img src={jordanLogo2} alt=""/>
            <Link to='/browse' style={{textDecoration:"none", color:'black'}}>
              <p > SEE ALL </p>
            </Link>
          </div>
          <div className="jordanRow">
            {jordanArr.map((item,i) => {
              if (item.brand === 'Jordan')
              return <LandingShoes key={i} shoe={item} id={item.id}/>
            })}
          </div>

          <div className="rowHeaderN">
            <img src={nikeLogo} alt=""/>
            <Link to='/browse' style={{textDecoration:"none", color:'black'}}>
              <p> SEE ALL </p>
            </Link>
          </div>
          <div className="nikeRow">
            {nikeArr.map((item,i) => {
              if (item.brand === 'Nike')
              return <LandingShoes key={i} shoe={item} id={item.id}/>
            })}
          </div>
          
            <div className="rowHeaderA">
              <img src={adidasLogo2} alt=""/>
              <Link to='/browse' style={{textDecoration:"none", color:'black'}}>
              <p> SEE ALL </p>
              </Link>
            </div>
          <div className="adidasRow">
            {adidasArr.map((item,i) => {
              if (item.brand === 'Adidas')
              return <LandingShoes key={i} shoe={item} id={item.id}/>
            })}
          </div>
        </div>
        <footer className="sneakerFoot">
          <p> Copyright © 2019 SLC KiX. All rights reserved</p>
          <div className="footerLinksContainer">
            <p>About</p>
            <p>|</p>
            <p>Contact Us</p>
            <p>|</p>
            <p>FAQ</p>
          </div>
        </footer>

      </div>
    );
  }
}


export default Landing;

