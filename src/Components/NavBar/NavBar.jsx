import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
    console.log('render props', this.props.history)
    // const {id} = this.props.user
    
    return  toggleLogout ?(
      <div className="fixeddiv">
        
      <nav className='logIC'>
        <div className='logIH'>
          <div className='leftnavitems'>
            <h1>
              KiX
            </h1>
            <input placeholder='Search for brand, model, etc.'/>
          </div>
          <div className='linksLI'>
            <Link to='/'>
              <button>Home</button>
            </Link>
            <Link to='/browse'>
              <button>Browse</button>
            </Link>
            <a href="http://localhost:4000/logout">
              <button >Logout</button>
            </a>
          </div>
        </div> 
      </nav>

      </div>
    ) 
    : (
      <div className='fixeddiv'>

      <nav className='notLIC'>
        <div className='notLIH'>
          <div className='leftnavitems'>
            <h1>
              KiX
            </h1>
            <input placeholder='Search for brand, model, etc.'/>
          </div>
          <div type= 'none' className='linksNLI'>
            <Link to='/browse'>
              <button>Browse</button>
            </Link>
            <Link to='/'>
              <button>About</button>
            </Link>
            <Link to='/login'>
              <button >Login</button>
            </Link>
            <Link to='/login'>
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>
      
      </div>
    )
  }
}


const mapState = (reduxState) => reduxState;

export default connect(mapState, { getData })(NavBar);