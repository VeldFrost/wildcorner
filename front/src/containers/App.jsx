import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import HeaderApp from '../components/main/HeaderApp'
import FooterApp from '../components/main/FooterApp'
import Itempage from './Itempage';
import Userpage from './Userpage';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderApp />
          <div className="content">
          <Switch>
            <Route exact path="/" component={Itempage}/>
            <Route path="/userpage" component={Userpage}/>
            <Route path="/search" component={Search}/>
          </Switch>
          </div>
          <FooterApp />
      </div>
    );
  }
}

export default App;
