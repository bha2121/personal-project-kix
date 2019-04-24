import React, { Component } from 'react';
import axios from 'axios';
import './Sneaker.css'
import { connect } from 'react-redux'
import { setCart } from '../../ducks/cartReducer'


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
      shoe_id: ''
      // shoe: []
    }
  }

  
  componentDidMount = async () => {
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
    });
  };

  handleAddToCart(shoe_id){
    axios.post('/api/addtocart', {shoe_id})
    .then(res =>{
      this.props.setCart(res.data)
    })
  }




  render() {
    // console.log(this.props)
    // console.log(this.state.shoe_id)
    const {shoe_id} = this.state
    
    return (
      <div>
        <header className="sneakerHeader"></header>
        <div>
          <h1>
           {this.state.brand} {this.state.model} {this.state.colorway}
          </h1>
        </div>
        <img src={this.state.img} alt=""/>
        <button onClick={()=> {this.handleAddToCart(shoe_id)}}> Add to cart</button>
        <div>

          <p>SIZE: {this.state.size}</p>
          <p>COLOR: {this.state.colorscheme}</p>
          <p>RELEASE DATE: {this.state.releasedate}</p>
        </div>
      </div>
    )
  }
}

export default connect (null, { setCart })(Sneaker);