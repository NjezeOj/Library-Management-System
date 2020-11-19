import React from 'react';
import './App.css';
import { Navbar } from './app/Navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {CategoryPage} from "./features/category/CategoryPage"
import {HomePage} from "./features/HomePage"
import {BookLending} from "./features/booklending/BookLending"
import {Books} from "./features/books/Books"
import {LendReturn} from "./features/books/LendReturn"

function App() {
  return (   

    <Router>
      <Navbar />
      <Switch>
        

        <Route exact path="/" component={HomePage} />
        <Route exact path="/registercategory" component={CategoryPage} />
        <Route exact path="/policy" component={BookLending} />
        <Route exact path="/registerbook" component={Books} />
        <Route exact path="/lendreturn" component={LendReturn} />
        
      </Switch>      
    </Router>
    
    
     
    

  );
}

export default App;
