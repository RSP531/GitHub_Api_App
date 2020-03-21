import React, {Component} from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';

class App extends Component {
  render(){
    return (
      <nav className="navbar bg-primary">
        <Navbar/>
        <h1>
          Hello Rob
        </h1>
      </nav>
    );
  }
}

export default App;
