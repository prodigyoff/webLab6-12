import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './containers/Header'
import Footer from './containers/Footer'
import Catalog from './pages/Catalog'
import ItemPage from './pages/ItemPage'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import SuccessPage from './pages/SuccessPage'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path = '/'>
          <HomePage/> 
        </Route>
        <Route exact path = '/item'>
          <Catalog/>
        </Route>
        <Route path = {`/item/:id`}>
          <ItemPage/>
        </Route>
        <Route path = '/cart'>
          <CartPage/>
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
