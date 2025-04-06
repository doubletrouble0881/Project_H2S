import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Footer from './footer';
import Card from './card';
import Product from './Product';
import Page from './page';
import Info from './info'; // Importing Info page

const Home = () => {
  return (
    <>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/page" element={<Page />} />
        <Route path="/info" element={<Info />} /> {/* This makes sure /info works */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
