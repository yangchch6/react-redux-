import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {productImg} from './style.css'
import products from '../reducers/products';
import { Link } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
    console.log(e);
  }
  render() {
      const {title,price,quantity,icon} = this.props;
      return (
        <div>
          <img src={icon} className="productImg" onClick={(e) => {this.handleClick(e)}}></img>
          <div>{title} - &#36;{price}{quantity ? ` x ${quantity}` : null}</div>
        </div>
      )
  }
}

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
