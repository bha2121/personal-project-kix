import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom'
import { getData } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import './NavBar.css'


class NavBar extends Component {
  
  // componentDidMount = async () => {
  //   let worky = await this.props.getData()
  //   console.log('worky', worky)
  //   const { id } = this.props.user
  //   if (worky.value.id) {
  //   this.setState({
  //     toggleLogout: true
  //   })}
  // }

  componentDidMount() {
    this.props.getData()
    
    // .then(()=>{
    //   if (this.props.user.id){
    //   this.setState({
    //     toggleLogout: true
    //   })
    // }
    // })
  }


 
  



  render() {
    const {toggleLogout} = this.props
    console.log('render props', this.props)
    // const {id} = this.props.user
    
    return  toggleLogout ?(
      <nav>
        <div className="navContainer">
          <div className='leftnavitems'>
            <h1>
              KiX
            </h1>
            <input placeholder='Search for brand, model, etc.'/>
          </div>
          <div className='linksContainer'>
            <Link to='/'>
              <button>Home</button>
            </Link>
            <Link to='/browse'>
              <button>Browse</button>
            </Link>
            <Link to='/myaccount'>
              <button>My Account</button>
            </Link>
            <a href="http://localhost:4000/logout">
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
            <h1>
              KiX
            </h1>
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


const mapState = (reduxState) => reduxState;

export default connect(mapState, { getData })(NavBar);