import React, { Component } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Selector from './components/Selector/Selector';
import Results from './components/Results/Results';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    url: 'https://cryptodex-server.herokuapp.com',
    coinInfo: [],
    currencies: [],
    currentSelection: '',
    currentRate: '',
    currency: ''
  };

  componentDidMount = () => {
    fetch(this.state.url + '/currencies', {
      method: 'GET', 
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => this.setState({
      currencies: data
    }))
  };

  selectorChangeHandler = (e) => {
    let newSelection = e.target.value;
    fetch(this.state.url + '/codeis/' + newSelection)
  };


  calculateHandler = () => {
    fetch(this.state.url + '/info')
      .then(res => res.json())
      .then(res => this.setState({
        coinInfo: res
      }))
      .then(this.currencyFormatHandler)
  };

  currencyFormatHandler = () => {
    let keys = Object.keys(this.state.coinInfo.bpi);
    let newRate = this.state.coinInfo.bpi[keys[1]].rate;
    let newCurrency = this.state.coinInfo.bpi[keys[1]].description;
    this.setState({
      currentRate: newRate,
      currency: newCurrency
    });
  };

  render() {
    return (
      <div>
        <Header />
        <About />
        <main>
          <Selector currencies={this.state.currencies}
          change={this.selectorChangeHandler} clicked={this.calculateHandler}/>          
          <Results rate={this.state.currentRate}
          currency={this.state.currency} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
