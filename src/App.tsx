import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import BannerWrapper from "./components/BannerComponent/BannerWrapper";
import MDWrapper from "./components/MDWrapper/MDWrapper";
import CardWrapper from "./components/Card/CardWrapper";
function App() {
  return (
    <div className="App">
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header/>
                    <div style={{ flex: 1 }}>
                        <Routes>
                            <Route path="/learn" Component={BannerWrapper} />
                            <Route path="/projects" Component={MDWrapper} />
                            <Route path="/topics" Component={CardWrapper}/>
                        </Routes>
                    </div>
                <Footer/>
            </div>
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