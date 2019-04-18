import React from 'react';
import { Link } from 'react-router-dom'


function LandingShoes(props){
    return (
    <div className="listOfShoesED">
        <Link to='/sneaker'>
        <div className="leftShoeInfo" >
            <img src={props.shoe.img} alt="house"/>
            <p>{`${props.shoe.brand} ${props.shoe.model} ${props.shoe.colorway}`}</p>
            <p>{props.shoe.colorway}</p>
            <p>{`$${props.shoe.sellingprice}`}</p>
        </div>  
        </Link>

  </div>
    )
}



export default LandingShoes


