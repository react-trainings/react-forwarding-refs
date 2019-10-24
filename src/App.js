import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './component/UserInput/user-input.component';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <UserInput></UserInput>
            </header>
        </div>
    );
}

export default App;
