import React, { Component } from 'react';
import axios from 'axios'
import { getData, toggleLogout } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import './LoginRegister.css'


class LoginRegister extends Component {
  constructor(props){
    super(props)
    this.state ={
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      isadmin: false,
      loginToggle: true,

    }
  }

  async register () {
    const { firstname, lastname, email, password, isadmin } = this.state
    const res = await axios.post('/auth/register', {firstname, lastname, email, password, isadmin})
    if (res.data.loggedIn) {
      this.props.toggleLogout()
      this.props.history.push('/')
    }
    else alert(res.data.message)
  }

  async login () {
    const { email, password } = this.state
    const res = await axios.post('/auth/login', {email, password})
    // console.log('LOGIN/REGISTER RES', res)
    if (res.data.loggedIn) {
      this.props.toggleLogout()
      this.props.history.push('/')
    }
    else alert(res.data.message)
  }


  handleOnChange = (e) =>{
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }


  handleLoginToggle = () => {
    this.setState({
      loginToggle: true
    })
  }

  handleSignupToggle = () => {
    console.log('stog')
    this.setState({
      loginToggle: false
    })
  }
  
  
  render() {
    // console.log(this.props)
    
    return (
      <div className="loginPage">
        <header className="loginHeader"></header>
        <main className="mainLoginContainer">
          <div className="loginSignupContainer">
            <div className="loginSignupTop">
              <div className="loginToggle" onClick={()=> this.handleLoginToggle()}>
                <p>LOG IN</p>
              </div>
              <div className="signupToggle" onClick={()=> this.handleSignupToggle()}>
                <p>SIGN UP</p>
              </div>
            </div>

            {
              this.state.loginToggle ?(
            <div className="loginContainer">
              <div className="loginInputs">
                <input name='email' placeholder="Email" onChange={this.handleOnChange} autoComplete="off"/>
                <input name='password' placeholder="Password" type='password' onChange={this.handleOnChange} autoComplete="off"/>
              </div>
              <button onClick={() => this.login()}> LOG IN</button>
            </div>
              ):(
            <div className="signupContainer">
              <div className="signupInputs">
                <input name='firstname' placeholder="First Name" onChange={this.handleOnChange} type="text" autoComplete="off" />
                <input name='lastname' placeholder="Last Name" onChange={this.handleOnChange} autoComplete="off" />
                <input name='email' placeholder="Email" onChange={this.handleOnChange} autoComplete="off" />
                <input name='password' placeholder="Password" type='password' onChange={this.handleOnChange} autoComplete="off" />
              </div>
              <button onClick={()=> this.register()}>SIGN UP</button>
            </div>
                )
            }

          </div>

        </main>
        <footer className="sneakerFoot">
          <p> Copyright © 2019 SLC KiX. All rights reserved</p>
          <div className="footerLinksContainer">
            <p>About</p>
            <p>|</p>
            <p>Contact Us</p>
            <p>|</p>
            <p>FAQ</p>
          </div>
        </footer>
      </div>

    );
  }
}


const mapState = (reduxState) => reduxState;

export default connect(mapState, { getData, toggleLogout })(LoginRegister);

