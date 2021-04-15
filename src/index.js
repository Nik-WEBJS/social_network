import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id:1, name: 'Sveta'},
  {id:2, name: 'Olya'},
  {id:3, name: 'Oleg'},
  {id:4, name: 'Mari'},
]

let messages = [
      {id:1, message: 'message'},
      {id:2, message: 'Hi'},
      {id:3, message: 'you'},
      {id:4, message: 'young'},
  ]

let posts = [
  {id:1, message: 'Hi you', likesCount: 12},
  {id:2, message: 'firts', likesCount: 3} ,
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
