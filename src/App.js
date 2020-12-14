import React from 'react';
import './App.css';
import { Navbar } from './app/Navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {CategoryPage} from "./features/category/CategoryPage"
import {HomePage} from "./features/HomePage"
import {BookLending} from "./features/booklending/BookLending"
import {Books} from "./features/books/Books"
import {LendReturn} from "./features/books/LendReturn"
import {User} from './features/User/User'
import NotFound from './app/NotFound'

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
        <Route exact path='/user' component={User} />
        <Route component={NotFound} />
      </Switch>      
    </Router>
    
    
     
    

  );
}

export default App;
