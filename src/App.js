import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './coursesale';


class App extends Component {
  render() {
    var courses = [
      {
        name: "Complete full stack developement",
        price: 1000
      },
      {
        name: "Complete front end developement",
        price: 1500
      },
      {
        name: "Complete backend developement",
        price: 1000
      },
      {
        name: "Complete REST-API testing",
        price: 700
      },

    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Purchase Page </h1>
          <p> Demonstrate usage of Props and States </p>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
