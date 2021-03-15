import './App.css';
import React from 'react';
import Navigation from "./Navigation";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Posts from "./components/Posts";
import Albums from "./components/Albums";
import Users from "./components/Users";


function App() {


    return (
        <BrowserRouter>
            <div className="App">
                <Navigation/>

                <Switch>
                    <Route path="/components/Users" component={Users}/>
                    <Route path="/components/Posts" component={Posts}/>
                    <Route path="/components/Albums" component={Albums}/>
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
