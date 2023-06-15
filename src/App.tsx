import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from "./components/NavigationBar/navigation";
import Page from "./components/Page/page";
import Listview from "./components/ListView/Listview";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Router>
            <Routes>
                <Route path="/topics/" Component={Listview} />
                <Route path="/" Component={Home} />
                <Route path="/about/:id" Component={Page} />
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