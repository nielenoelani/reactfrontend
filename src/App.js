import React, { useState, createContext } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Feeds from './Feeds';
import Contact from './Contact';
import './App.css';

export const AppContext = createContext();

const App = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path ="/" exact component ={Home} />
                <Route path ="/about" component ={About} />
                <Route path ="/contact" component ={Contact} />
                <Route path ="/feeds" component ={Feeds} />
            </Switch>
        </BrowserRouter>
    
    
    )
}

export default App;