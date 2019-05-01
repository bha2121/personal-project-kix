import React, { Component } from 'react';
import axios from 'axios';
import './Sneaker.css'
import { connect } from 'react-redux'
import { setCart } from '../../ducks/cartReducer'
import SneakerSizes from './SneakerSizes'
import swal from 'sweetalert';


class Sneaker extends Component {
  constructor(){
    super()
    this.state = {
      brand: '',
      model: '',
      colorway: '',
      colorscheme: '',
      size: '',
      img: '',
      releasedate: '',
      sellingprice: '',
      quantity: '',
      shoe_id: '',
      sizeArr: [],
      selected: ''
      // shoe: []
    }
  }

  handleSelected = (shoe_id) => {
    console.log(shoe_id)
    this.setState({
      selected: shoe_id
    })
    axios.get(`/api/sneaker/${shoe_id}`).then(res => {
      // console.log(res.data[0])
      this.setState({
        brand: res.data[0].brand,
        model: res.data[0].model,
        colorway: res.data[0].colorway,
        colorscheme: res.data[0].colorscheme,
        size: res.data[0].size,
        img: res.data[0].img,
        releasedate: res.data[0].releasedate,
        sellingprice: res.data[0].sellingprice,
        quantity: res.data[0].quantity,
        shoe_id: res.data[0].shoe_id
        // shoe: res.data[0]
      });
    })
    

  }

  
  componentDidMount = async () => {
    console.log(this.props)
    const shoe_id = this.props.match.params.id;
    await axios.get(`/api/sneaker/${shoe_id}`).then(res => {
      // console.log(res.data[0])
      this.setState({
        brand: res.data[0].brand,
        model: res.data[0].model,
        colorway: res.data[0].colorway,
        colorscheme: res.data[0].colorscheme,
        size: res.data[0].size,
        img: res.data[0].img,
        releasedate: res.data[0].releasedate,
        sellingprice: res.data[0].sellingprice,
        quantity: res.data[0].quantity,
        shoe_id: res.data[0].shoe_id
        // shoe: res.data[0]
      });
      const {brand, model, colorway} = this.state
      let shoeBody = {brand, model, colorway}
      console.log(shoeBody)
      axios.post('/api/shoesizes', shoeBody).then(res =>{
        this.setState({
          sizeArr: res.data
        })
      })
      .catch(err => console.log('AXIOS GETALLSHOES ERR', err))
    })
  };

  handleAddToCart(shoe_id){
    console.log('shoeiii', shoe_id)
    axios.post('/api/addtocart', {shoe_id})
    .then(res =>{
      this.props.setCart(res.data)
      
      swal({
        title: `${res.data[0].brand} ${res.data[0].model} ${res.data[0].colorway} Size: ${res.data[0].size}`,
        text: `Was Added to Cart` ,
        icon: "success",
      })
    })
    this.setState({
      selected: ''
    })
    console.log("prrops her?", this.props)
  }



  render() {
    // console.log(this.props)
    // console.log(this.state.shoe_id)
    const {shoe_id, sizeArr} = this.state
  console.log(this.state.selected)  
    
    return (
      <div className="sneakerPage">
        <header className="sneakerHeader"></header>
        <main className="sneakerPageContainer">
          <div className="sneakerleftMainContainer">
            <img src={this.state.img} alt=""/>
          </div>
          <div className="sneakerRightMainContainer">
            <div className="sneakerTitle">
              <p>{this.state.brand} {this.state.model}</p>
              <p>{this.state.colorway}</p>
              <p>${this.state.sellingprice}</p>
            </div>
            <div className="sneakerSizeContainer">
              <p>Select Size (US):</p>
              <div className="sneakerSizeTileContainer">
                {sizeArr.map((item, i) => {
                  return <SneakerSizes key={item.shoe_id} shoeS={item} 
                  id={item.shoe_id} handleSelected={this.handleSelected} selected={this.state.selected} />
                }).sort((a,b)=> a.size*1 - b.size*1)}
              </div>
              <div className="addToCartButton">
                <button onClick={()=> {this.handleAddToCart(shoe_id)}}> Add to cart</button>
              </div>
            </div>
            <div className="sneakerDescriptionContainer">
              <p>Details:</p>
              <p>CONDITION: NEW IN BOX | <span style={{color: 'green', textDecoration: 'none', fontSize:16}}>100%</span> AUTHENTIC</p>
              <p>COLOR: {this.state.colorscheme}</p>
              <p>RELEASE DATE: {this.state.releasedate}</p>
              <p style={{color: "white"}}>.</p>
              {/* <p>SIZE: {this.state.size}</p> */}
            </div>
          </div>
        </main>
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
    )
  }
}

export default connect (null, { setCart })(Sneaker);