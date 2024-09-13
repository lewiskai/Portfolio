import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MouseLight from './components/MouseLight';
import './styles/App.css';

function App() {
  return (
    <div className="container">
      <MouseLight />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;