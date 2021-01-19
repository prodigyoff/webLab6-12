import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './containers/Header'
import HeroSection from './containers/HeroSection'
import Home from './containers/Home'
import ProductsListHome from './containers/ProductsListHome'
import ProductsListCatalog from './containers/ProductsListCatalog'
import Layout from './containers/Layout'
import Footer from './containers/Footer'
import Catalog from './containers/Catalog'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path = '/'>
        <Layout />
        <HeroSection />
        <Home/>
        <ProductsListHome/>
        </Route>
        <Route exact path = '/catalog'>
          <Catalog/>
          <ProductsListCatalog/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
