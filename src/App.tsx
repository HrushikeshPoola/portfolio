import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from "./components/NavigationBar/navigation";
import Page from "./components/Page/page";
import Listview from "./components/ListView/Listview";
import Home from "./components/Home/Home";
import {CardProps} from "./components/ListView/CardProps";
import NavComponent from "./components/NavComponent";

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Router>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/:id" Component={Page} />
                <Route path="/test" Component={NavComponent}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;

/*
* Need to decide on components
*  Paragraph Component
*
* */