import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getData } from './../../ducks/userReducer'
import { connect } from 'react-redux'


class Header extends Component {
  constructor(){
    super()
    this.state = {
      toggleLogout: false
    }
  }
  componentDidMount = async () => {
    await this.props.getData()
    this.setState({
      toggleLogout: true
    })
  }




  render() {
    console.log(this.props.user)
    const {toggleLogout} = this.state
    
    return  !toggleLogout ?(
      <div>
        <h1>
          Header
        </h1>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/browse'>
          <button>browse</button>
        </Link>
        <Link to='/login'>
          <button>login</button>
        </Link>
        <Link to='/login'>
          <button>register</button>
        </Link>
      </div>
    ) 
    : (
      <div>
        <h1>
          Header
        </h1>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/browse'>
          <button>browse</button>
        </Link>
        <a href="http://localhost:4000/logout">
          <button>Logout</button>
        </a>
      </div>
    )
  }
}


const mapState = (reduxState) => reduxState;

export default connect(mapState, { getData })(Header);