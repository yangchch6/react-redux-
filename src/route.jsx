import React, {Component} from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom'

import SideBar from './components/SideBar';
import CartContainer from './containers/CartContainer';
import ProductsContainer from './containers/ProductsContainer';

class RootRouters extends Component{ 
    constructor(props) {
        super(props);
    }
    render(){
        const {history} = this.props;
        return( 
          <Router>
              <div>
                <Route path ="/" component={SideBar}/>
                <Route path ="/shopList" component={ProductsContainer} />
                <Route path ="/shopCart" component={CartContainer} />
              </div>
          </Router>
        )
    }
}
export default RootRouters;
