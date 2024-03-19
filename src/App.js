import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import MainArea from './MainArea';
import StatusBar from './StatusBar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainArea />
      <StatusBar />
    </div>
  );
}

export default App;
