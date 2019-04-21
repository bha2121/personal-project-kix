import React, { Component } from 'react';
import axios from 'axios';
import './Sneaker.css'


class Sneaker extends Component {
  constructor(){
    super()
    this.state = {
      brand: '',
      model: '',
      colorway: '',
      colorscheme: '',
      size: '',
      img: ''
      // shoe: []
    }
  }

  // componentDidMount= async ()=>{
  //   const shoe_id = this.props.match.params.id;
  //   axios.get(`/api/sneaker/${shoe_id}`)
  //   this.setState({
  //     shoe: res.data
  //   })
  // }


  // componentDidMount(){
  //   const shoe_id = this.props.match.params.id;
  //   axios.get(`/api/sneaker/${shoe_id}`)
  //   .then(res =>{
  //     this.setState({
  //       shoe: res.data
  //     })
  //   }).catch(err => console.log('AXIOS GETTHESNEAKER ERR', err))
  // }


  // handleGetSneaker = async () =>{
  //   const shoe_id = this.props.match.params.id;
  //   let res = await axios.get(`/api/sneaker/${shoe_id}`)
  //     this.setState({
  //       shoe: res.data
  //     })
  // }

  // componentDidMount() {
  //   this.handleGetSneaker();
  // }


  componentDidMount = async () => {
    const shoe_id = this.props.match.params.id;
    await axios.get(`/api/sneaker/${shoe_id}`).then(res => {
      this.setState({
        brand: res.data[0].brand,
        model: res.data[0].model,
        colorway: res.data[0].colorway,
        colorscheme: res.data[0].colorscheme,
        size: res.data[0].size,
        img: res.data[0].img
        // shoe: res.data
      });
    });
  };






  render() {
    // console.log(this.props)
    console.log( this.state)
    
    return (
      <div>
        <header className="sneakerHeader"></header>
        <h1>
           {this.state.brand} 
           {this.state.model} 
           {this.state.colorway} 
        </h1>
        <img src={this.state.img} alt=""/>
      </div>
    )
  }
}

export default Sneaker;