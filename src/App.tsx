import React from 'react';
import { Login } from './login/Login';
// import { Login } from './login/Login';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="main">
      <Login />
    </div>
  );
}

export default App;