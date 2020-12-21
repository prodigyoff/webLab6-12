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
import ProtectedRoute from './components/ProtectedRoute'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <ProtectedRoute component={<HomePage/>} path={'/'} exact />
        <ProtectedRoute component={<Catalog />} path={'/item'} />
        <ProtectedRoute component={<ItemPage />} path={'/item/:id'} />
        <ProtectedRoute component={<CartPage />} path={'/cart'} />
        <ProtectedRoute component={<CheckoutPage />} path={'/checkout'} />
        <ProtectedRoute component={<SuccessPage />} path={'/success'} />
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
