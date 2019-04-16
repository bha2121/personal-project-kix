import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <div>
        <h1>
          Header
        </h1>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/browse'>
          <button>browse</button>
        </Link>
        <Link to='/login'>
          <button>login</button>
        </Link>
        <Link to='/login'>
          <button>register</button>
        </Link>
      </div>
    );
  }
}

export default Header;