import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getData } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import './NavBar.css'
import slckixRed2 from './Logos/slckixRed2.png'




class NavBar extends Component {
  
  
  componentDidMount() {
    this.props.getData()
  }



  render() {
    // const {toggleLogout} = this.props.user
    const {toggleLogout} = this.props
    // console.log('render props', this.props)
    // const {id} = this.props.user
    
    return  toggleLogout ?(
      <nav>
        <div className="navContainer">
          <div className='leftnavitems'>
            <Link to='/'>
            <img src={slckixRed2} alt=""/>
            </Link>
            <input placeholder='Search for brand, model, etc.'/>
          </div>
          <div className='linksContainer'>
            <Link to='/browse'>
              <button>Browse</button>
            </Link>
            <Link to='/'>
              <button>About</button>
            </Link>
            <Link to='/myaccount'>
              <button>My Account</button>
            </Link>
            <a href={process.env.REACT_APP_LOGOUT}>
              <button >Logout</button>
            </a>
            <Link to='/cart'>
              <button>Cart</button>
            </Link>
          </div>
        </div> 
      </nav>
    ) 
    : (
      <nav>
        <div className="navContainer">
          <div className='leftnavitems'>
          <Link to='/'>
            <img src={slckixRed2} alt=""/>
            </Link>
            <input placeholder='Search for brand, model, etc.'/>
          </div>
          <div type= 'none' className='linksContainer'>
            <Link to='/browse'>
              <button>Browse</button>
            </Link>
            <Link to='/'>
              <button>About</button>
            </Link>
            <Link to='/login'>
              <button>Sign Up</button>
            </Link>
            <Link to='/login'>
              <button >Login</button>
            </Link>
            <Link to='/cart'>
              <button >Cart</button>
            </Link>
          </div>
        </div>
      
      </nav>
    )
  }
}


const mapState = (reduxState) => reduxState.user;

export default connect(mapState, { getData })(NavBar);