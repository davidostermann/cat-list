import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import CatList from './CatList';
import CatSelection from './CatSelection';

class App extends Component {


  state = {
    cats: data.cats.map( item => ({ ...item, selected: false}))
  }

  selectCat = (cat) => {

    const newCats = this.state.cats.map( item => {

      if(item.id === cat.id) {
        item.selected = !item.selected ;
      }

      return item;

    });

    this.setState({
      cats: newCats
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CatSelection cats={this.state.cats}/>
          <CatList cats={this.state.cats} selectCat={this.selectCat}/>
        </div>
      </div>
    );
  }
}

export default App;
