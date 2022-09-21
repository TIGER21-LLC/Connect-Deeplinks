import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Deeplink } from './components/Deeplink';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Deeplink />} />
      </Routes>
      <h3>How this deeplink redirect service works?</h3>
      <ol>
        <li>When you request THIS-SITE/?path=some/path/here</li>
        <li>It automatically redirects to t21connect://some/path/here</li>
      </ol>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
