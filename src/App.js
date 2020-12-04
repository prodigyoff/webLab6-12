import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './containers/Header'
import HeroSection from './containers/HeroSection'
import Home from './containers/Home'
import ProductsListHome from './containers/ProductsListHome'
import Layout from './containers/Layout'
import Footer from './containers/Footer'
import Catalog from './pages/Catalog'
import ItemPage from './pages/ItemPage'
import {data} from './components/Data'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path = '/'>
          <HomePage/> 
        </Route>
        <Route path = '/catalog'>
          <Catalog items={data}/>
        </Route>
        <Route path = {`/item/:id`}>
          <ItemPage items={data}/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
