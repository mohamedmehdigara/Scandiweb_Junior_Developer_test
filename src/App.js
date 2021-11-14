
import './App.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {
  Routes,
  Route,
} from "react-router-dom";
import ItemPage from './components/ItemPage';
import Cart from './components/Cart';


class App extends React.Component{
  render(){
    return (
      
      <div className="App">
        <div  className="wrapper">
    
        <Header />
        <Routes>
        <Route path="/" element ={<Main />} />
        <Route path="/cart" element ={<Cart /> } />
        <Route path="/item/:id" element={<ItemPage />} />
      </ Routes>
       
        </div>
      </div>
      
    )
  }
} 

  
  
  export default App 
