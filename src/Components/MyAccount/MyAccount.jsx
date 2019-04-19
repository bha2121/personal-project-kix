import React, { Component } from 'react';
import { getData } from '../../ducks/userReducer'
import { connect } from 'react-redux'

class MyAccount extends Component {
  constructor(){
    super()
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      isadmin: false
    }
  }

  componentDidMount = async() => {
    await this.props.getData()
    console.log(this.props.user)
    this.setState({
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      email: this.props.user.email,
      isadmin: this.props.user.isadmin,
      editToggle: false
    })
    }


  


  render() {
    const {editToggle} = this.state
    console.log(this.state)
    return (
      <div>
        <header></header>
        <h1>
          {`${this.props.user.firstname} ${this.props.user.lastname}'s Account`}
        </h1>
        <div className="userInfoContainer">
          <button>Edit</button>
          <div className="userInfo">
            <p>First Name:{this.state.firstname}</p>
            <p>Last Name:{this.state.lastname}</p>
            <p>Email:{this.state.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (reduxState) => reduxState;

export default connect(mapState, { getData })(MyAccount);