import React, { Component } from 'react';
import axios from 'axios'
import BrowseShoes from '../BrowseShoes/BrowseShoes'
import BrowseSideBar from '../BrowseSideBar/BrowseSideBar'
import './Browse.css'
import { readdirSync } from 'fs';


class Browse extends Component {
  constructor(){
      super()
      this.state = {
        shoes: [],
        shoesTotal: '',
        jordanN: '',
        nikeN: '',
        adidasN: ''
      }
    }

  
  componentDidMount(){
    axios.get('/api/getallshoes')
    .then(res => {
      console.log('SHOE DATA', res.data)
      this.setState({
          shoes: res.data,
          shoesTotal: res.data.length
      })

      let jordanSizes = res.data.map(item  => {
        let size = 0
        if (item.brand === 'Jordan'){
          size = size +1
          return size
        } 
        else {
          size = 0
          return size
        }
      }).reduce((total, num) => total + num)
      this.setState({
        jordanN: jordanSizes
      })

      let nikeSizes = res.data.map(item  => {
        let size = 0
        if (item.brand === 'Nike'){
          size = size +1
          return size
        } 
        else {
          size = 0
          return size
        }
      }).reduce((total, num) => total + num)
      this.setState({
        nikeN: nikeSizes
      })

      let adidasSizes = res.data.map(item  => {
        let size = 0
        if (item.brand === 'Adidas'){
          size = size +1
          return size
        } 
        else {
          size = 0
          return size
        }
      }).reduce((total, num) => total + num)
      this.setState({
        adidasN: adidasSizes
      })



  }).catch(err => console.log('AXIOS GETALLSHOES ERR', err))
  }

  showAllProducts(){
    axios.get('/api/getallshoes')
    .then(res => {
      this.setState({
          shoes: res.data,
          shoesTotal: res.data.length
      })
    })
  }

  jordanFilter =(e)=>{
    axios.get('/api/getallshoes')
    .then(res => {
      let jordanArr = res.data.filter((el)=> el.brand === 'Jordan')
      this.setState({
        shoes: jordanArr,
        shoesTotal: jordanArr.length
      })
    })
  }

  nikeFilter =(e)=>{
    axios.get('/api/getallshoes')
    .then(res => {      
      let nikeArr = res.data.filter((el)=> el.brand === 'Nike')
      this.setState({
        shoes: nikeArr,
        shoesTotal: nikeArr.length
      })
    })
  }
  
  adidasFilter =(e)=>{
    axios.get('/api/getallshoes')
    .then(res => {      
      let adidasArr = res.data.filter((el)=> el.brand === 'Adidas')
      this.setState({
        shoes: adidasArr,
        shoesTotal: adidasArr.length
      })
    })
  }

  
  lowestPriceSortState =(e)=>{
    let sort = this.state.shoes.sort((a,b)=> a.sellingprice - b.sellingprice)
    this.setState({
      shoes: sort
    })
  }
  
  highestPriceSortState =(e)=>{
    let sort = this.state.shoes.sort((a,b)=> b.sellingprice - a.sellingprice)
    this.setState({
      shoes: sort
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

  render() {
  console.log(this.state.jordanN)
    return (
    <div>
      <div className="mainLanding">
        <header className='browseHeader'> </header> 
        <main className='browseMainContainer'>

          <div className="browseSideBarContainer">
            <div className="refineResults">
              Refine Results
            </div>
            <button onClick={()=>this.showAllProducts()}> All Products </button>
            <button onClick={()=>this.jordanFilter()}> Jordan ({this.state.jordanN}) </button>
            <button onClick={()=>this.nikeFilter()}> Nike ({this.state.nikeN}) </button>
            <button onClick={()=>this.adidasFilter()}> Adidas ({this.state.adidasN}) </button>
          </div>

          <div className="browseProductsContainerRight">
            <div className="browseSort">
              <div>
                Sneakers: ({this.state.shoesTotal})
              </div>
              <span>Sort By:</span>
              <button onClick={()=>this.lowestPriceSortState()}>Lowest Price</button>
              <button onClick={()=>this.highestPriceSortState()}>Highest Price</button>
            </div>
            <div className="browseRowContainer">
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
        <footer>

        </footer>
    </div>
    );
  }
}

export default Browse;

