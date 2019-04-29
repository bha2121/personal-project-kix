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
import adcjordannikeupdated from './logos/adcjordannikeupdated.png'
import shippingBupdated from './logos/shippingBupdated.png'
import supremeUpdated from './logos/supremeUpdated.png'
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
                    <img src={supremeUpdated}/>
                </div>
                <div>
                    <img src={shippingBupdated}/>
                </div>
                <div>
                    <img src={adcjordannikeupdated}/>
                </div>
        </Carousel>

        <div className="landingRowContainer">
          <div className="rowHeaderJ">
            <img src={jordanLogo2} alt=""/>
            <p> SEE ALL </p>
          </div>
          <div className="jordanRow">
            {jordanArr.map((item,i) => {
              if (item.brand === 'Jordan')
              return <LandingShoes key={i} shoe={item} id={item.id}/>
            })}
          </div>

          <div className="rowHeaderN">
            <img src={nikeLogo} alt=""/>
            <p> SEE ALL </p>
          </div>
          <div className="nikeRow">
            {nikeArr.map((item,i) => {
              if (item.brand === 'Nike')
              return <LandingShoes key={i} shoe={item} id={item.id}/>
            })}
          </div>
          
            <div className="rowHeaderA">
              <img src={adidasLogo2} alt=""/>
              <p> SEE ALL </p>
            </div>
          <div className="adidasRow">
            {adidasArr.map((item,i) => {
              if (item.brand === 'Adidas')
              return <LandingShoes key={i} shoe={item} id={item.id}/>
            })}
          </div>
        </div>
        <footer>

        </footer>

      </div>
    );
  }
}


export default Landing;

