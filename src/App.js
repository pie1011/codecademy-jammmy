import './App.css';
import React from 'react';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

import { music } from './musicData';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          codecademy project <span className="heart">♥️</span> jammmy
        </p>
        <p>
          <SearchBar />
        </p>
        <p>
          <SearchResults />
        </p>
      </header>
      <div className="App-body">
        <p className='small'>
        Photo by <a href="https://unsplash.com/fr/@blocks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">blocks</a> on <a href="https://unsplash.com/images/things/music?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
        </div>
    </div>
  );
}

export default App;
