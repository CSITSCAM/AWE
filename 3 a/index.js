//index.js

import React from 'react';
import ReactDOM from 'react-dom/client';


const r = ReactDOM.createRoot(document.getElementById('root'));
function Timer()
{
  var ob=new Date();
  var d=ob.toDateString();
  var t=ob.toTimeString();
  var element=<>
                <h1>Today's Date: {d}</h1>
                <h1>Timer: {t}</h1>
              </>
  r.render(element);
}
setInterval(Timer, 1000);
