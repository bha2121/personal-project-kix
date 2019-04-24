import React, { Component } from 'react';
import { getData } from '../../ducks/userReducer'
import { connect } from 'react-redux'
import './MyAccount.css'
import axios from 'axios';


class MyAccount extends Component {
  constructor(){
    super()
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      isadmin: false,
      editUserToggle: false
    }
  }

  componentDidMount = async() => {
    await this.props.getData()
    // console.log(this.props)
    this.setState({
      // firstname: this.props.user.user.firstname,
      firstname: this.props.user.firstname,
      // lastname: this.props.user.user.lastname,
      lastname: this.props.user.lastname,
      // email: this.props.user.user.email,
      email: this.props.user.email,
      // isadmin: this.props.user.user.isadmin,
      isadmin: this.props.user.isadmin,
    })
    }

    handleEditUserToggle=()=>{
      // console.log('editToggle')
      this.setState({
        editUserToggle: true
      })
    }

    handleCancelEdit=()=>{
      this.setState({
        editUserToggle: false
      })
    }

    
    updateUser=()=> {
      const { firstname, lastname, email} = this.state
      // const {id} = this.props.user.user
      const {id} = this.props.user
      const userBody = {id, firstname, lastname, email,}
      axios.put(`/api/auth/edituser`, userBody).then(res => {
        // console.log('edit response', res)
        this.setState({
          // firstname: this.props.user.firstname,
          // lastname: this.props.user.lastname,
          // email: this.props.user.email,
          firstname: res.data[0].firstname,
          lastname: res.data[0].lastname,
          email: res.data[0].email
        })
        this.setState({
          editUserToggle: false
        })
        this.props.getData()
      })
      .catch(err => console.log('update user ERR', err))
    }
    


    handleOnChange = (e) =>{
      const {name, value} = e.target
      this.setState({
        [name]: value
      })
    }




  render() {
    // console.log('RENDER OF STATE',this.state)
    // console.log('RENDER OF PROPS>USER', this.props.user.user)
    
    const {editUserToggle} = this.state
    // console.log(this.state)
    return (
      <div className="myAccountBody">
        <header className="myAccountHeader"></header>
        <div className="myAccountMainContainer">
          <div className="myAccountSideBar">
            <div className="myAccountUserName">
              <div className="myAccountNameText">
                {`${this.props.user.firstname} ${this.props.user.lastname}`}
                {/* {`${this.props.user.user.firstname} ${this.props.user.user.lastname}`} */}
              </div>
            </div>
            <div className="myAccountSidebarLinks">
              <p>Profile</p>
              <p>Orders</p>
            </div>
          </div>
          <div className="MyProfileBody">
            <div className="userInfoHeader">My Account</div>
            <div className="myProfileFlagContainer">
              <div className="flagTriangle"></div>
              <div className="myProfileFlag"> PROFILE</div>
            </div>
            {
              !editUserToggle ? (
                <div className="userInfoContainer">
                  <div className="userInfo">
                    <p>First Name: {this.state.firstname}</p>
                    <p>Last Name: {this.state.lastname}</p>
                    <p>Email: {this.state.email}</p>
                  </div>
                  <button onClick={this.handleEditUserToggle}>Edit</button>
                </div>
              ) : (
                <div>
                  {/* <input name='firstname' value={this.state.firstname} onChange={this.handleOnChange}/> */}
                  <input name='firstname' value={this.state.firstname} onChange={this.handleOnChange}/>
                  {/* <input name='lastname' value={this.state.lastname} onChange={this.handleOnChange}/> */}
                  <input name='lastname' value={this.state.lastname} onChange={this.handleOnChange}/>
                  {/* <input name='email' value={this.state.email} onChange={this.handleOnChange}/> */}
                  <input name='email' value={this.state.email} onChange={this.handleOnChange}/>
                  <button onClick={() => this.updateUser()}> Save </button>
                  <button onClick={this.handleCancelEdit}> Cancel </button>
                </div>
              )
            }
            <div className="userAddress">
              {/* <p>First Name:{this.state.firstname}</p>
              <p>Last Name:{this.state.lastname}</p>
              <p>Email:{this.state.email}</p> */}
            </div>
          </div>
        </div>
        <footer className="accountFooter">footer</footer>
      </div>
    );
  }
}

const mapState = (reduxState) => reduxState.user;

export default connect(mapState, { getData })(MyAccount);