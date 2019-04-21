import React, { Component } from 'react';
import axios from 'axios'
import BrowseShoes from '../BrowseShoes/BrowseShoes'
import BrowseSideBar from '../BrowseSideBar/BrowseSideBar'
import './Browse.css'


class Browse extends Component {
  constructor(){
      super()
      this.state = {
        shoes: []
      }
    }

  
  componentDidMount(){
    axios.get('/api/getallshoes')
    .then(res => {
      console.log('SHOE DATA', res.data)
      this.setState({
          shoes: res.data
      })
  }).catch(err => console.log('AXIOS GETALLSHOES ERR', err))
  }

  showAllProducts(){
    axios.get('/api/getallshoes')
    .then(res => {
      this.setState({
          shoes: res.data
      })
    })
  }

  jordanFilter =(e)=>{
    axios.get('/api/getallshoes')
    .then(res => {
      let jordanArr = res.data.filter((el)=> el.brand === 'Jordan')
      this.setState({
        shoes: jordanArr
      })
    })
  }

  nikeFilter =(e)=>{
    axios.get('/api/getallshoes')
    .then(res => {      
      let jordanArr = res.data.filter((el)=> el.brand === 'Nike')
      this.setState({
        shoes: jordanArr
      })
    })
  }
  
  adidasFilter =(e)=>{
    axios.get('/api/getallshoes')
    .then(res => {      
      let jordanArr = res.data.filter((el)=> el.brand === 'Adidas')
      this.setState({
        shoes: jordanArr
      })
    })
  }

  // lowestPriceState =(e)=>{
  //   axios.get('/api/getallshoes')
  //   .then(res => {
  //     console.log(res.data)
  //     let jordanArr = res.data.sort((a,b)=> a.sellingprice - b.sellingprice)
  //     this.setState({
  //       shoes: jordanArr
  //     })
  //   })
  // }

  lowestPriceSortState =(e)=>{
    let sort = this.state.shoes.sort((a,b)=> a.sellingprice - b.sellingprice)
    this.setState({
      shoes: sort
    })
  }


  render() {
  
    return (
      <div className="mainLanding">
        <header className='browseHeader'> </header> 
        <div className="browseSort">
        <span>Sort By:</span>
        <button onClick={()=>this.lowestPriceSortState()}>Lowest Price</button>
        </div>
        <main className='browseMainContainer'>
          <div className="browseSideBarContainer">
            <button onClick={()=>this.showAllProducts()}> All Products </button>
            <button onClick={()=>this.jordanFilter()}> Jordan </button>
            <button onClick={()=>this.nikeFilter()}> Nike </button>
            <button onClick={()=>this.adidasFilter()}> Adidas </button>
          </div>
          <div className="browseProductsContainerRight">
            <div className="rowContainer">
              <div className="row">
                {this.state.shoes.map((item,i) => {
                  return <BrowseShoes key={i} 
                  shoe={item} 
                  id={item.id}/>
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Browse;

