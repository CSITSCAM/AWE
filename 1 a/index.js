//index.js



import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './Welcome';
import StudentData from './Student';

const r = ReactDOM.createRoot(document.getElementById('root'));




const obj1={
  name:'Sri',
  branch: 'CSIT',
  year: 4,
  cgpa: 9.17
}

r.render(
  <StudentData data={obj1}/>
);
