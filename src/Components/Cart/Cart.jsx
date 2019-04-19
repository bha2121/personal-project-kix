import React, { Component } from 'react';
import { getData } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import './Cart.css'


class Cart extends Component {
  render() {
    return (
      <div>
        <header className="cartHeader"></header>
        <h1>
          Cart
        </h1>
      </div>
    );
  }
}

export default Cart;