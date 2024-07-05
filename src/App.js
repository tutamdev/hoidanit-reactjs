import logo from './logo.svg';
import './App.scss';
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './components/Header/Header';





const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='sidebar-container'>

        </div>
        <div className='app-container'>
          <Outlet />
        </div>
      </div>

    </div>
  );
}
export default App;
