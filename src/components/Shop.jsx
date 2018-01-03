import React,{Component} from 'react';
import {Icon} from 'tinper-bee';

class Shop extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    console.log("add");
  }
  render() {
    return (
      <div>
        <h2>商品列表:</h2>
        <ul>
          <li>product1<Icon type="uf-add-c-o" onClick={this.handleClick}></Icon></li>
          <li>product2<Icon type="uf-add-c-o"></Icon></li>
          <li>product3<Icon type="uf-add-c-o"></Icon></li>
        </ul>  
      </div>
    )
  }
}
export default Shop;