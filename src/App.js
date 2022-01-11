import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="container p-3 text-center" style={{ backgroundColor: "grey" }}>
      <Header />
      <div className="d-flex my-5">
        <Navigation />
        <Main>
          <div className="d-flex">
          <SubContents />
          <SubContents />
          <SubContents />
          </div>
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;
