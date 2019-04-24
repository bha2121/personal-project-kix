import React, { Component } from 'react';
import { getData } from '../../ducks/userReducer'
import { setCart } from '../../ducks/cartReducer'
import { connect } from 'react-redux'
import './Cart.css'
import axios from 'axios';


class Cart extends Component {
  
  // componentDidMount(){
  //   this.sup()
  // }

  // sup = () =>{
  //   axios.get('/api/cart')
  // }

  async removeItem(cart_item_id){
    console.log(cart_item_id)
    const cartReponse = await axios.delete(`/api/cart/${cart_item_id}`)
    this.props.setCart(cartReponse.data)
    console.log(cartReponse)
  }
  
  
  

  render() {
    console.log(this.props)
    
    let cartItems = this.props.cart.map(item=>{
      return(
      <div className='single-cart-product' key={item.cart_item_id}>
      <img src={item.img} alt=""/>
      <div className='cart-product'>{item.brand} {item.model} {item.colorway}</div>
      <div className='cart-shoe-price'> ${item.sellingprice}.00 </div>
      <button onClick={() => this.removeItem(item.cart_item_id)}>REMOVE</button>
      </div>
    )})


    return (
      <div>
        <header className="cartHeader"></header>
        <h1>
          Cart
        </h1>
        <h2>
          {cartItems}
        </h2>
      </div>
    );
  }
}


const mapState = (reduxState) => reduxState;

export default connect (mapState, {getData, setCart })(Cart);