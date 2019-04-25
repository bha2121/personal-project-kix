import React, { Component } from 'react';
import axios from 'axios'
import LandingShoes from '../LandingShoes/LandingShoes'
import './Landing.css'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import jordanLogo2 from './jordanLogo2.png'
import nikeLogo from './nikeLogo.png'
import adidasLogo2 from './adidasLogo2.png'
import yeezyBanner from './yeezyBanner.jpg'
// import headerLogo from './jordanHeader.jpeg'

class Landing extends Component {
  constructor(){
      super()
      this.state = {
        // jordanArr: [],
        // nikeArr: [],
        // adidasArr: []
        shoes: []
      }
    }

  
  componentDidMount(){
    axios.get('/api/getallshoes')
    .then(res => {
      // console.log(res.data)
      this.setState({
          shoes: res.data
      })
  }).catch(err => console.log('AXIOS GETALLSHOES ERR', err))
  }

  render() {
    // console.log(this.state.shoes.filter((item,i) => {
    //   if (item.brand =='Jordan'){
    //     return item
    //   }}))

    let jordanArr = this.state.shoes.filter((item,i) =>{
      if(item.brand === 'Jordan')
        return item
    }).splice(0,4)

    let nikeArr = this.state.shoes.filter((item,i) =>{
      if(item.brand === 'Nike')
        return item
    }).splice(0,4)

    let adidasArr = this.state.shoes.filter((item,i) =>{
      if(item.brand === 'Adidas')
        return item
    }).splice(0,4)

  
    return (
      <div className="mainLanding">
        <header className='landingHeader'> swag </header> 
        <Carousel className='carouselPics' autoPlay showArrows={false} showStatus={false} 
                  showThumbs={false} infiniteLoop={true} axis={'vertical'} 
                  transitionTime={800} stopOnHover={false} showIndicators={false}>
                <div>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODM4NygtLjcBCgoKDg0NDg0NFSsZFRkrKys3LS0rKystLSs3Kzc3KzcrKysrKzctKy0tLSstKzc3NzcrKysrNys3Ky03KzcrLf/AABEIALcBFAMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAAAAQMCBAX/xAAaEAEBAQEBAQEAAAAAAAAAAAAAEhEBAhNh/8QAGgEBAQEBAAMAAAAAAAAAAAAAAAECAwQGB//EABkRAQEBAQEBAAAAAAAAAAAAAAAREhMBIf/aAAwDAQACEQMRAD8A8UHh4+jPRqyeHgwKzgxrBgVnBjWDClZw8PBhSlgw8PClZwY1gwpWQ1gxKlZPDw8KVnBjWDClZwY1gKVnDwzKlZwY0ClZw8MYhSwYeDApYGsGBWTPBglIHgBjDwwLSwYYClgxoBWcGNAKzgxoYFZw8PBghA8GAQPDwGQ1gCs4MaGIUsGHh4UrODGsGCVnDw8GBSwYeGFZwNBKUsGHgwSlgw8PArOBrAFTw8MYq0geACB4AIGYMjGsGJSsmeDBKQw8GAWDGgDOHh4MAsGGApYMawYJWcGNYMQpYMPDwKzgxrBgVk8PDwSs4MawYUrIawYlKzhtYAqRmFWkMMBSGGMClgawYFZDWDApYMPBglLA1gwKyMawYhSwYeHhSs4MawYVKzh4eHhSs4MawYlKWDGsGFSs4MawYUrOHh4eFKzgxrBiVKzgxrBgUsJsgqeDGsGNVqs4MawYlKzh41gwqVnBjWDClZwY3gwpWcGNYMKVnBjWDEqVnBjWDApYMawYUrODGsGFKWDGsGFSs4Maw8SlZwY1gwpWcGN4MKlZwY3glKVjBikiSjGDFJ/BHUp9TwK88A0s9c+DGsGNVWQ3gwqMjGsGFGcGN4MKMYeNYMSjODG8GFRjBikiSqxgxSRKUnqeDFYOCk9SwYtBwmlz6jIlf5nCaXHqEnK/PB88Gl5oc8dOF+eGoZ01zc3zP5uiDg2vNz88HH46IOU0vNz88HC8nKaax4hA54Xk5TRjxHngLSDTWXnwJdECHTTlzQkS6OeBBo5ueBDog4NHNzwcL88HCaXmhzwIdHPBwml5uaDh0QINHND5nC8iU0uEeeDhaTlNLhCDhaTk0uUYOFZOU0uUoOVZEppcpyJVkSlInJ88qSclWJyJUk5SkSk5Uk5SkSk5Vg4NESkStAhNLEZNaAaI45EqyJbrUTgSrIk0RKRK0iU0RKRKsiSpE5EqyJKRKRKsiUqRORKkiSkTk5UgQUieDFYPnhNESw8Vg4TSxGTlaDlNERk4Wk5TS5Sg4Vk4TS5SgTxaDhNLEZOVoEGiIz+HK0HKaIjIleRKaWISHRINEedJytzycOujKMiV4OE0uXPJy6OeDhNGXNBw6IOE0Zc8HC8HBoy54EOiBCaMoQIdECDRlCRLo+Z/NNGXPIl0fM/maTLng4dEHCaWOeD54Xk5TREIOF5OE0RCD55XgQmliMnK0CTQjJytIlNCMnK0iU0JSJWwSaEZC0go4ueGueF+eThrTtlCDheDhNGXPBw6IEGjLng/m6IEpoy5/mcOiBBpMoQIXg4TRlCBK8CDREJOF4EppIhBwtJyaSIQcLwcJoiEHK/zHzTRlCTlf5nBoy55EumBCaMueDh0QcJtcuaDh0QcGzLn+Y+bog4TRlzwIdHPA+Zoy544HT8waMOPng4Wg5XTyIjAheDhNJEIOF4HzNEQkSv8zhNGXPJyvBwaMueTheDg0mXPAh0ScJoy5/mcOiDhNGXPzwcLwcJoyhAl0QfPBow54OHRzwcJtcOaDh0wfPCbXDm+Z/N0wcJsw5vmfzdMHCbXm5vmPm6YEJtebn+Z/N0QcG15ub5n83TAhNrzc0E6ZBpObzuc1rnkg7etRvnkSAysORIBUgk5ACHIkwlIJEgJSHzycgFJ4ciQEqzw5PnkBKTw5OQEqwc4cgIsOT55ARfPDk5ARYcjABYMPAAh84MMIsLBhgWM4ACpH//Z"/>
                </div>
                <div>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFxUVFRUVFRUXFxUVFRUYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKysrKys3KysrNys3KysrKysrKysrKysrKysrKys3KysrKysrKysrKysrKysrKysrK//AABEIAI0BZQMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIGA//EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOnCjDSiCgAAggCABUAFQQA0QFQQBUAAAE1UAAgAQBRCAoACiAAQAAAAFVFgKqLAaxBBGwEUgCiCgJUVAQoAggCpQBASgqAACAoIAAACAoaAKkUARQAAAAAAAUBUUFVAGgQG0UQAFBFARGsSwGcKpgMDWJQQFwGRqxkEFARGrEoIVQEBQQAAAAIoIphgIpigguJgAYACgAKAqNACoDYCABVAAEFSgiLUBBUBAAEq1KCKiggGAgqAAoCAAAAqKAAAAAAAAAAA1EUBYKCooDQKggqKAACLAGRamAiVpmgi6AIACAAYioCCoACghqoAAAoAAAKiggoCUVAFABYkWAqxFBQwBpQAAwBFsAQVAShQExK0yCEMAEVAEVAEVKAACKiggKCKAAGAAQBQAAAAAAAUICqLAAAeiKVBFBQRQEBQZRpARGksBkUBEsaSgzgoCI0gILYYDIoCCkgIoQExQAAAFSAKACKAigAoAqxI1ABQGxUsERYYQURQEFQBFARMWgIjSAiY0mAyNYmAiNYmCIjWArIoIyKCgLgIuACYKSCIoCgKCCgIAAKQFWIoNSBARsWRcBnEawkBBcARG7EwGcFwBkxTATEreJYDGFaMBgawwGBvEwGUbxLAZwUBEawBnCKuAyNYYCGKWAyuLhgILhgJgsAQaxLABcAIpiwAWQB//9k="/>
                </div>
                <div>
                    <img src={yeezyBanner}/>
                </div>
        </Carousel>

        <div className="rowContainer">
          <div className="rowHeaderJ">
            <img src={jordanLogo2} alt=""/>
            <p> SEE ALL </p>
          </div>
          <div className="jordanRow">
            {jordanArr.map((item,i) => {
              if (item.brand === 'Jordan')
              return <LandingShoes key={i} shoe={item} id={item.id}/>
            })}
          </div>

          <div className="rowHeaderN">
            <img src={nikeLogo} alt=""/>
            <p> SEE ALL </p>
          </div>
          <div className="nikeRow">
            {nikeArr.map((item,i) => {
              if (item.brand === 'Nike')
              return <LandingShoes key={i} shoe={item} id={item.id}/>
            })}
          </div>
          
            <div className="rowHeaderA">
              <img src={adidasLogo2} alt=""/>
              <p> SEE ALL </p>
            </div>
          <div className="adidasRow">
            {adidasArr.map((item,i) => {
              if (item.brand === 'Adidas')
              return <LandingShoes key={i} shoe={item} id={item.id}/>
            })}
          </div>
        </div>

      </div>
    );
  }
}


export default Landing;

