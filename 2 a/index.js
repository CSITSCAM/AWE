//index.js



import React from 'react';
import ReactDOM from 'react-dom/client';
import Greet from './Greet';

const r = ReactDOM.createRoot(document.getElementById('root'));



const obj1={
  name: 'Sri',
  branch: 'CSIT'
}
r.render(
  <Greet data={obj1}/>
);
