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
      // console.log(item.sellingprice)
      total += Number(item.sellingprice)
  
    })
    return total
  }

  
  




  onToken = (token, addresses) => {
    axios.post('/api/stripe', {token, amount:(this.subTotal()*100)})
    .then(res => {
      console.log('checkout response', res)
      window.location.reload()
    })
    .catch(error => {
      console.log("Payment Error: ", error);
      alert("Payment Error");
    });
}





  
  

  render() {
    console.log(this.props)
    const publishableKey = "pk_test_Ph4ydsNgshUChfwlkP1cgDZP00iPEFbvNC";
  
    
    let cartItems = this.props.cart.map(item=>{
      return(
      <div className='single-cart-product' key={item.cart_item_id}>
        <img src={item.img} alt=""/>
        <div className='cart-product'>
          <p> {item.brand} {item.model} </p>
          <p> {item.colorway} </p>
          <p> Size: {item.size} </p>
        </div>
        <div className='cart-shoe-price'> ${item.sellingprice}.00 </div>
        <button onClick={() => this.removeItem(item.cart_item_id)}><i className="far fa-trash-alt"></i></button>
      </div>
    )})


    return this.subTotal() >0 ?(
      <div className="cartPage">
        <header className="cartHeader"></header>
        <h1>
          Cart items ({this.props.cart.length})
        </h1>
        <main className="cartMain"> 
          <div className="cartLeft">
            <div className="cartItemsHeader">
              <p>Product</p>
              <p>Details</p>
              <p>Price</p>
              <p>Remove</p>
            </div>
            <div>
                {cartItems}
            </div>
          </div>

          <div className="cartRight">
            <div className="cartRightBox">
              <div className="orderSum"> Order Summary </div>
                <div className='subCon'>
                  <div className="subConLeft">
                    <p style={{fontWeight:600}}>SUBTOTAL:</p>
                    <p style={{fontSize:12}}>({this.props.cart.length} Items)</p>
                  </div>
                  <p>${this.subTotal()}.00</p>
                </div>
                <div className="shipCon">
                  <p style={{fontWeight:600}}> SHIPPING:</p>
                  <p> FREE </p>
                </div>
                <div className="totalCon">
                  <p style={{fontWeight:600}}> TOTAL:</p>
                  <p>${this.subTotal()}.00</p>
                </div>

              {this.subTotal() !== 0 ? 
                <div className="strCheck">
                  <StripeCheckout
                  name="SLC KiX"
                  image={slckix4}
                  email="contactus@slckix.com"
                  
                  token= {this.onToken}
                  stripeKey={publishableKey}
                  amount={(this.subTotal()*100)}
                  /> 
                </div>
                  :
                  <h2>Cart is Empty!</h2>
                }
            </div>
          </div>
        </main>
        <footer>

        </footer>
      </div>
      
    )
    :(
      <div>

      <header className="cartHeader"></header>
      <h2>Cart is Empty!</h2>
      </div>
    )
  }
}


const mapState = (reduxState) => reduxState;

export default connect (mapState, {getData, setCart })(Cart);