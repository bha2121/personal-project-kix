import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import axios from 'axios'
import { setCart } from './ducks/cartReducer';
import { connect } from 'react-redux'


class App extends Component {


  componentDidMount(){
    axios.get('/api/cart')
    .then(res => {
      
      this.props.setCart(res.data)
    })
  }


  render() {
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default connect (null, { setCart })(App);
