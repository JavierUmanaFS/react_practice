import React from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/layout/UserItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar title='Github Finder' icon='fa fa-github'
      />
      <UserItem />
    </div>
  );
}

export default App;
