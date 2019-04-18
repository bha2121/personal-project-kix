import React, { Component } from 'react';
import axios from 'axios'
import LandingShoes from '../LandingShoes/LandingShoes'


class Landing extends Component {
  constructor(){
      super()
      this.state = {
        shoes: []
      }
    }

  
  componentDidMount(){
    axios.get('/api/getallshoes')
    .then(res => {
      console.log(res.data)
      this.setState({
          shoes: res.data
      })
  }).catch(err => console.log('AXIOS GETALLSHOES ERR', err))
  }

            // <div>
            //          Dashboard
            //          <Link to='/wizard'><button>Add New Property</button></Link>
            //          {this.state.houses.map((item, i) => {
            //                return <House deleteHouse={this.deleteHouse}
            //                key={i} house={item} id={item.id}/>
            //          })}
            //      </div>


  render() {
  
    return (
      <div>
        <header>
          <img src="https://stockx-assets.imgix.net/headers/home_2.png?auto=compress%2Cformat" alt=""/>
        </header>
        <div>
          {this.state.shoes.map((item,i) => {
            return <LandingShoes key={i} 
                                 shoe={item} 
                                 id={item.id}/>
          })}
        </div>
      </div>
    );
  }
}

export default Landing;

