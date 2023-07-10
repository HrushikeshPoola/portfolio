import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
        <Header></Header>
        {/*<DynamicComponentRender></DynamicComponentRender>*/}
        <Footer></Footer>

    </div>
  );
}

export default App;

/*
* Need to decide on components
*  Paragraph Component
*
* */