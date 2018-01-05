import React,{Component} from 'react';
import { Link } from 'react-router';
import {home_content} from './style.css';

class Home extends Component{
  render() {
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        <div className="home_content">
          <ul>
            <li><Link to="/shop">商品列表</Link></li>
            <li><Link to="/detail">商品详情</Link></li>
            <li><Link to="/cart">购物车</Link></li>
          </ul>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
export default Home;