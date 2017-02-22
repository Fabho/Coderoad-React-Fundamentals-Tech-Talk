import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import JsxElement from './JsxElement';
import PropsTest from './PropsTest';
import Clock from './Clock';
import './index.css';

const comment = {
  date: new Date(),
  text: 'I love cats!',
  author: {
    name: 'Hello Escurri the kat',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
  //JsxElement ,
  /*<PropsTest
    	date={comment.date}
    	text={comment.text}
    	author={comment.author} />,*/
   <Clock />,
  document.getElementById('root')
);
