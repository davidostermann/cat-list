import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json';
import CatList from './CatList';
import CatSelection from './CatSelection';

console.log('data : ', data);

class App extends Component {

  constructor(props) {
    super(props);

    const smartCats = data.cats.map( item => {
      return { ...item, selected: false};
    });

    console.log('smartCats : ', smartCats);

    this.state = {
      cats: smartCats
    };


  }

  selectCat(cat) {


    console.log('cat : ', this.state.cats);

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
          <CatList cats={this.state.cats} selectCat={this.selectCat.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
