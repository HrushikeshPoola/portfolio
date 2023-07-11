import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import BannerWrapper from "./components/BannerComponent/BannerWrapper";
import MDWrapper from "./components/MDWrapper/MDWrapper";
import CardWrapper from "./components/Card/CardWrapper";
import NotFound from "./components/NotFound/NotFound";
function App() {
    const content = [
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: '/projects/react/install',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },{
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },{
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
        {
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },{
            date: 'Day - 1',
            title: 'Install',
            subtitle: 'Steps To Install React',
            description: 'To install React locally, you need to install Node.js and create a new React project using create-react-app. Then, start the development server and modify your React app as needed.',
            timeToRead: 5,
            link: 'https://example.com/card1',
        },
    ]
    const Home = () => <h4 className="p-4">Home Component</h4>;
    return (

    <div className="App">
        <Router>
            <Suspense fallback={<div>Loading...</div>}/>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header/>
                    <div style={{ flex: 1 }}>
                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path="/learn" element={<BannerWrapper/>}/>
                            <Route path="/projects/" element={<CardWrapper content = {content}/>}/>
                            <Route path="/projects/:id" element={<MDWrapper/>}/>
                            <Route path="/topics/" element={<CardWrapper content = {content}/>}/>
                            <Route path="*" Component={NotFound}/>
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