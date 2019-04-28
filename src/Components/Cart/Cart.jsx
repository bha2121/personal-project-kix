import React, { Component } from 'react';
import { getData } from '../../ducks/userReducer'
import { setCart } from '../../ducks/cartReducer'
import { connect } from 'react-redux'
import './Cart.css'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import slckix4 from './slckix4.png'


class Cart extends Component {
  
  async removeItem(cart_item_id){
    console.log(cart_item_id)
    const cartReponse = await axios.delete(`/api/cart/${cart_item_id}`)
    this.props.setCart(cartReponse.data)
    console.log(cartReponse)
  }
  
  subTotal = () => {
    const cart = this.props.cart
    console.log(cart)
    let total = 0
    cart.forEach(item => {
      console.log(item.sellingprice)
      total += Number(item.sellingprice)
  
    })
    return total
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


    return this.subTotal() >0 ?(
      <div>
        <header className="cartHeader"></header>
        <h1>
          Cart items ({this.props.cart.length})
        </h1>
        <h2>
          {cartItems}
        </h2>
        <div>
        </div>
        <h3>Subtotal: ${this.subTotal()}.00</h3>
        {this.subTotal() !== 0 ? 
            <StripeCheckout
               name="SLC KiX"
              //  description="Utah Toyota Off-Road"
               image={slckix4}
               email="contact@slckix.com"
          
               token= {this.onToken}
               stripeKey={process.env.REACT_APP_STRIPE_KEY}
               amount={(this.subTotal()*100)}
              /> 
              :
            <h2>Cart is Empty! Go buy something!</h2>
            }
          </div>
      
    )
    :(
      <div>

      <header className="cartHeader"></header>
      <h2>Cart is Empty! Go buy something!</h2>
      </div>
    )
  }
}


const mapState = (reduxState) => reduxState;

export default connect (mapState, {getData, setCart })(Cart);