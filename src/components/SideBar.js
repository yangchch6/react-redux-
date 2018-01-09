import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        <ul>
          <li><Link to="/shopList">主页</Link></li>
          <li><Link to="/shopCart">购物车</Link></li>
        </ul>
      </div>
    )
  }
}

export default SideBar;