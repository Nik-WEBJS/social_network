/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Profile from './components/Profile/Profile.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        {/*<Profile />*/}
        <Dialogs />
      </div>
    </div>
  );
}


export default App;
