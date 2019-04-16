import React, { Component } from 'react';
import axios from 'axios'


class LoginRegister extends Component {
  constructor(props){
    super(props)
    this.state ={
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      isadmin: false
    }
  }

  async register () {
    const { firstname, lastname, email, password, isadmin } = this.state
    const res = await axios.post('/auth/register', {firstname, lastname, email, password, isadmin})
    if (res.data.loggedIn) this.props.history.push('/')
    else alert(res.data.message)
  }

  async login () {
    const { email, password } = this.state
    const res = await axios.post('/auth/login', {email, password})
    console.log(res)
    if (res.data.loggedIn) this.props.history.push('/')
    else alert(res.data.message)
  }


  handleOnChange = (e) =>{
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }
  
  
  render() {
    
    return (
      <div>
        <div className="register">
          <p>
            <span>First Name:</span>
            <input name='firstname' 
                    type='text' 
                    onChange={this.handleOnChange} />
          </p>
          <p>
            <span>Last Name:</span>
            <input name='lastname' 
                    type='text' 
                    onChange={this.handleOnChange} />
          </p>
          <p>
            <span>Email:</span>
            <input name='email' 
                    type='text' 
                    onChange={this.handleOnChange} />
          </p>
          <p>
            <span>Password:</span>
            <input name='password' 
                    type='text' 
                    onChange={this.handleOnChange} />
          </p>
          <button onClick={()=> this.register()}> Register </button>
        </div>

        <div className="login">
          <p>
            <span>Email:</span>
            <input name='email' 
                    type='text' 
                    onChange={this.handleOnChange} />
          </p>
          <p>
            <span>Password:</span>
            <input name='password' 
                    type='text' 
                    onChange={this.handleOnChange} />
          </p>
          <button onClick={() => this.login()}> Log in </button>
        </div>


      </div>
    );
  }
}

export default LoginRegister;