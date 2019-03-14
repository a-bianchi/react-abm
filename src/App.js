import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';


class App extends Component {

  renderCustomerListContainer = () => <h1>Customer List Container</h1>;

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>           
            <Route path="/customers/new" component={this.renderCustomerNewContainer} ></Route>
            <Route path="/customers/:dni" component={this.renderCustomerContainer} ></Route>
            <Route path="/customers" component={CustomersContainer} ></Route>
            <Route path="/" component={HomeContainer} ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
