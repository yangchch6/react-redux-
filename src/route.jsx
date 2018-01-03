import React, {PropTypes, Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Home from 'components/Home';
import Shop from 'components/Shop';
import Detail from 'components/Detail';
import Cart from 'components/Cart';

class RootRouters extends Component{ 
    constructor(props) {
        super(props);
    }
    render(){
        const {history} = this.props;
        return( 
            <Router history={hashHistory}>
                <Route path="/" component={Home}>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/detail" component={Detail}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Route>
            </Router>
        )
    }
}
export default RootRouters;
