import React from 'react'

import { Footer, Blog , Possibility, Features, WhatGPT3, Header } from './containers';
import { Navbar, Brand, CTA } from './components';
import './App.css';
import './index.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">             
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
