/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx'
import Nav from './components/Nav/Nav.jsx'
import Profile from './components/Profile/Profile.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'
import Music from './components/Music/Music.jsx'
import News from './components/News/News.jsx'
import Settings from './components/Settings/Settings.jsx' 
import {BrowserRouter, Route} from 'react-router-dom'


const App = (props) => {
  
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path='/Profile' render={() => <Profile posts={props.state.profilePage.posts}/>}/>
        <Route path='/Dialogs' render={() => <Dialogs messages={props.state.messagesPage.messages} dialogs={props.state.messagesPage.dialogs}/>}/>
        <Route path='/Music' render={() => <Music />}/>
        <Route path='/News' render={() => <News />}/>
        <Route path='/Settings' render={() => <Settings />}/>
      </div>
    </div>
    </BrowserRouter>
  );
}


export default App;
