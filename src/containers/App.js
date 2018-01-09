import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import RootRouters from '../route.jsx';

class App extends Component {
  constructor(props) {
        super(props);
  }
  render() {
      return (
          <RootRouters/>
      )
  }
}
export default App;
