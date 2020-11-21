import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './containers/Header'
import HeroSection from './containers/HeroSection'
import Home from './containers/Home'
import Layout from './containers/Layout'
import Footer from './containers/Footer'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Layout />
    <HeroSection />
    <Home/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
