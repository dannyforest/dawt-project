import React from 'react';
import logo from './Google_logo.svg.png';
import './App.css';
import {useState} from 'react';

function App() {
    const handleClick = () => {
        window.open('https://google.ca', '_blank');
        console.log('clicked');
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" onClick={() => handleClick()}/>
                <a
                    className="App-link"
                    href="https://google.ca"
                    target={'_parent'}
                    rel="noopener noreferrer"
                >
                    To google search
                </a>
            </header>
        </div>
    );
}

export default App;
