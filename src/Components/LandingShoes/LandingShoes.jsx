import React from 'react';
import { Link } from 'react-router-dom'
import './LandingShoes.css'


function LandingShoes(props){
    return (
    <div className="shoeTile">
        <Link to='/sneaker'>
            <div className="shoepic">
                <img src={props.shoe.img} alt="house"/>
            </div>
            <p>{`${props.shoe.brand} ${props.shoe.model} ${props.shoe.colorway}`}</p>
            <p>{`$${props.shoe.sellingprice}`}</p>
        </Link>
  </div>
    )
}



export default LandingShoes


