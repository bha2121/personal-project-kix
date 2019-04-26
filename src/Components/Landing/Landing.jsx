import React, { Component } from 'react';
import axios from 'axios'
import LandingShoes from '../LandingShoes/LandingShoes'
import './Landing.css'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import jordanLogo2 from './jordanLogo2.png'
import nikeLogo from './nikeLogo.png'
import adidasLogo2 from './adidasLogo2.png'
import adcjordannike2 from './adcjordannike2.png'
import shippingB from './shippingB.png'
import supreme2 from './supreme2.png'
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
                    <img src={supreme2}/>
                </div>
                <div>
                    <img src={shippingB}/>
                </div>
                <div>
                    <img src={adcjordannike2}/>
                </div>
        </Carousel>

        <div className="rowContainer">
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

      </div>
    );
  }
}


export default Landing;

