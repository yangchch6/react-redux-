import {Component} from 'react';
import ReactDOM from 'react-dom';

import RootRouters from '../../route.jsx';
import {hashHistory } from 'react-router';

class App extends Component {
    constructor(props) {
          super(props);
    }
    render() {
        return (
            <RootRouters history={hashHistory}/>
                )
    }
}
export default App;
