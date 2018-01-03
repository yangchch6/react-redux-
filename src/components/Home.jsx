import React,{Component} from 'react';
import { Link } from 'react-router';

class Home extends Component{
  render() {
    return (
      <div>
        <h1>React Router:</h1>
        <nav>
          <Link to="/shop">商品列表</Link> | 
          <Link to="/detail">商品详情</Link> | 
          <Link to="/cart">购物车</Link>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
export default Home;