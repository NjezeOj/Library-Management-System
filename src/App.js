import React from 'react';
import './App.css';
import { Navbar } from './app/Navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {CategoryPage} from "./features/category/CategoryPage"
import {HomePage} from "./features/HomePage"

function App() {
  return (   

    <Router>
      <Navbar />
      <Switch>
        

        <Route exact path="/" component={HomePage} />
        <Route exact path="/registercategory" component={CategoryPage} />
      </Switch>      
    </Router>
    
    
     
    

  );
}

export default App;
