//index.js



import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './Welcome';
import StudentData from './Student';

const r = ReactDOM.createRoot(document.getElementById('root'));




const obj1={
  name:'You',
  branch: 'CSIT',
  year: 4,
  cgpa: 0.0
}

r.render(
  <StudentData data={obj1}/>
);
