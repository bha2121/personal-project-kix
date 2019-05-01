import React, { Component } from 'react';
import axios from 'axios'
import BrowseShoes from '../BrowseShoes/BrowseShoes'
import './Browse.css'
import adcGrey2 from './logos/adcGrey2.png'
import nikeGrey2 from './logos/nikeGrey2.png'
import jordGrey2 from './logos/jordGrey2.png'


class Browse extends Component {
  constructor(){
      super()
      this.state = {
        shoes: [],
        shoesTotal: '',
        // jordanN: '',
        // nikeN: '',
        // adidasN: '',
        brandToggle: true,
        sizeToggle: true,
        filterToggle: false,
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

      var a = res.data.reduce((accumulator, current) => {
        if (checkIfAlreadyExist(current)) {
          return accumulator;
        } else {
          return [...accumulator, current];
        }
      
        function checkIfAlreadyExist(currentVal) {
          return accumulator.some((item) => {
            return (item.model === currentVal.model&&
                    item.colorway === currentVal.colorway);
          });
        }
      }, []);
      
      this.setState({
        shoes: a,
        shoesTotal: a.length
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
      var a = res.data.reduce((accumulator, current) => {
        if (checkIfAlreadyExist(current)) {
          return accumulator;
        } else {
          return [...accumulator, current];
        }
      
        function checkIfAlreadyExist(currentVal) {
          return accumulator.some((item) => {
            return (item.model === currentVal.model&&
                    item.colorway === currentVal.colorway);
          });
        }
      }, []);
      
      this.setState({
        shoes: a,
        shoesTotal: a.length
      })

      this.filterToggleOff()

    }).catch(err => console.log('AXIOS GETALLSHOES ERR', err))
  }

  jordanFilter =(e)=>{
    axios.get('/api/getallshoes')
    .then(res => {
      let jordanArr = res.data.filter((el)=> el.brand === 'Jordan')
      this.setState({
        shoes: jordanArr,
        shoesTotal: jordanArr.length
      })
      var a = jordanArr.reduce((accumulator, current) => {
        if (checkIfAlreadyExist(current)) {
          return accumulator;
        } else {
          return [...accumulator, current];
        }
      
        function checkIfAlreadyExist(currentVal) {
          return accumulator.some((item) => {
            return (item.model === currentVal.model&&
                    item.colorway === currentVal.colorway);
          });
        }
      }, []);
      
      this.setState({
        shoes: a,
        shoesTotal: a.length
      })

      this.filterToggleOn()

    }).catch(err => console.log('JORDAN ERR', err))
  }

  nikeFilter =(e)=>{
    axios.get('/api/getallshoes')
    .then(res => {      
      let nikeArr = res.data.filter((el)=> el.brand === 'Nike')
      this.setState({
        shoes: nikeArr,
        shoesTotal: nikeArr.length
      })
      var a = nikeArr.reduce((accumulator, current) => {
        if (checkIfAlreadyExist(current)) {
          return accumulator;
        } else {
          return [...accumulator, current];
        }
      
        function checkIfAlreadyExist(currentVal) {
          return accumulator.some((item) => {
            return (item.model === currentVal.model&&
                    item.colorway === currentVal.colorway);
          });
        }
      }, []);
      
      this.setState({
        shoes: a,
        shoesTotal: a.length
      })
      this.filterToggleOn()

    }).catch(err => console.log('NIKE FILTER ERR', err))
  }
  
  adidasFilter =(e)=>{
    axios.get('/api/getallshoes')
    .then(res => {      
      let adidasArr = res.data.filter((el)=> el.brand === 'Adidas')
      this.setState({
        shoes: adidasArr,
        shoesTotal: adidasArr.length
      })
      var a = adidasArr.reduce((accumulator, current) => {
        if (checkIfAlreadyExist(current)) {
          return accumulator;
        } else {
          return [...accumulator, current];
        }
      
        function checkIfAlreadyExist(currentVal) {
          return accumulator.some((item) => {
            return (item.model === currentVal.model&&
                    item.colorway === currentVal.colorway);
          });
        }
      }, []);
      
      this.setState({
        shoes: a,
        shoesTotal: a.length
      })
      this.filterToggleOn()

    }).catch(err => console.log('ADIDAS ERR', err))
  }


  sizeFilterState = (shoeSize) => {
    let size = this.state.shoes.filter((el)=> el.size === shoeSize)
    this.setState({
      shoes: size,
      shoesTotal: size.length,
    })
    this.filterToggleOn()
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

  brandToggleOn = () => {
    this.setState({
      brandToggle: true
    })
  }

  brandToggleOff = () => {
    this.setState({
      brandToggle: false
    })
  }

  sizeToggleOn = () => {
    this.setState({
      sizeToggle: true
    })
  }

  sizeToggleOff = () => {
    this.setState({
      sizeToggle: false
    })
  }

  filterToggleOn = () => {
    this.setState({
      filterToggle: true
    })
  }

  filterToggleOff = () => {
    this.setState({
      filterToggle: false
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
  const {brandToggle, sizeToggle, filterToggle} = this.state
    return (
    <div>
      <div className="mainLanding">
        <header className='browseHeader'> </header> 
        <main className='browseMainContainer'>

          <div className="browseSideBarContainer">
            {
              !filterToggle ? (
                <div className="allProducts" > </div>
              ) : (
                <button className="allProducts" style={{color: "red", outline: 'none', fontWeight:900, fontSize:16}} onClick={()=>this.showAllProducts()}> 
                 <span>CLEAR FILTER</span>  <i className="fas fa-times-circle"></i>
                </button>
              )
            }
            {
              !brandToggle ? (
              <button className="categoryButton" onClick={() => this.brandToggleOn()}><span style={{fontSize:13, fontWeight:900}} > BRAND </span><span style={{fontSize:25, fontWeight:600}}> + </span></button>
              ) : (
              <div className="toggleBrandContainer">
                <button className="categoryButton" onClick={()=> this.brandToggleOff() }> <span style={{fontSize:13, fontWeight:900}} > BRAND </span> <span style={{fontSize:25, fontWeight:600}}> - </span></button>
                <div className="toggledBrands">
                  <button onClick={()=>this.jordanFilter()}> <img src={jordGrey2} alt=""/> </button>
                  <button onClick={()=>this.nikeFilter()}> <img src={nikeGrey2} alt=""/> </button>
                  <button onClick={()=>this.adidasFilter()}> <img src={adcGrey2} alt=""/> </button>
                  </div>
              </div>
              )
            }
            {
              !sizeToggle ? (
              <button className="categoryButton" onClick={() => this.sizeToggleOn()}><span style={{fontSize:13, fontWeight:900}} > SIZE </span><span style={{fontSize:25, fontWeight:600}}> + </span></button>
              ) : (
              <div className="toggleBrandContainer">
                <button className="categoryButton" onClick={()=> this.sizeToggleOff() }> <span style={{fontSize:13, fontWeight:900}} > SIZE </span> <span style={{fontSize:25, fontWeight:600}}> - </span></button>
                <div className="toggledBrands">
                  <button value="4.5" onClick={(e)=>this.sizeFilterState(e.target.value)}> 4.5 </button>
                  <button value="5" onClick={(e)=>this.sizeFilterState(e.target.value)}> 5 </button>
                  <button value="5.5" onClick={(e)=>this.sizeFilterState(e.target.value)}> 5.5 </button>
                  <button value="6" onClick={(e)=>this.sizeFilterState(e.target.value)}> 6 </button>
                  <button value="7" onClick={(e)=>this.sizeFilterState(e.target.value)}> 7 </button>
                  <button value="8" onClick={(e)=>this.sizeFilterState(e.target.value)}> 8 </button>
                  <button value="8.5" onClick={(e)=>this.sizeFilterState(e.target.value)}> 8.5 </button>
                  <button value="9" onClick={(e)=>this.sizeFilterState(e.target.value)}> 9 </button>
                  <button value="9.5" onClick={(e)=>this.sizeFilterState(e.target.value)}> 9.5 </button>
                  <button value="10" onClick={(e)=>this.sizeFilterState(e.target.value)}> 10 </button>
                  <button value="11" onClick={(e)=>this.sizeFilterState(e.target.value)}> 11 </button>
                  </div>
              </div>
              )
            }
          </div>

          <div className="browseProductsContainerRight">
            <div className="browseSort">
              <div className="refineResults">
                Filtered Results: ({this.state.shoesTotal})
              </div>
              <div className="sortBy">
                <p>Sort By:</p>
                <button onClick={()=>this.highestPriceSortState()}>Highest Price <span>↑</span></button>
                <button onClick={()=>this.lowestPriceSortState()}>Lowest Price <span>↓</span></button>
              </div>
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

export default Browse;

