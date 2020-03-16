import React, {View} from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './Styles';

export const add = (x, y) =>  x + y;

export const total = (shipping, subTotal) => "$" + (add(shipping, subTotal)).toString();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Circle></Circle>
      </header>
    </div>
  );
}




export default App;
