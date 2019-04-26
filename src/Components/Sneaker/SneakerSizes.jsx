import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class SneakerSizes extends Component{
    constructor(){
        super()
        this.state = {
            bgcolor: 'grey'
        }
    }

    // handlebutton=()=>{
    //     this.setState({
    //       bgColor: 'grey'
    //     })
    //   }

    // onClick={this.handlebutton}


    render(){
    let idmatch = (this.props.selected === this.props.id)
    console.log(idmatch, this.props.id, this.props.selected)
    return (
        <div className="sizeTile">
            <Link to={`/sneaker/${this.props.shoeS.shoe_id}`}>
                <button onClick={(e)=> this.props.handleSelected(this.props.id)} 
          style={idmatch ? {backgroundColor:"grey"} : {backgroundColor:"white"}}> {this.props.shoeS.size} </button>
            </Link>
        </div>
    )}
}

export default SneakerSizes