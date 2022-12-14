//index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './MySite/Home';
import ContactUs from './MySite/Contact';
import About from './MySite/About';
import Product from './MySite/Product';

function Main()
{
  return <>
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">About US</Link></li>
            <li><Link to="/contact">Contact US</Link></li>
            <li><Link to="/product">Products</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </>;
}

const r = ReactDOM.createRoot(document.getElementById('root'));
r.render(
  <Main/>
);
