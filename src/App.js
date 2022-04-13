import { useReducer, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { UserProvider } from './UserContext'
import { initialState, reducer } from './reducer/UserReducer'
import AppNavbar from './components/AppNavbar' 
import Footer from './components/Footer' 
import Home from './pages/Home'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Products from './pages/Products'

/* Users */
import UserDashboard from './pages/UserDashboard'
import UpdateUserInfo from './pages/UpdateUserInfo'

/* Products */
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'
import { useSelector } from 'react-redux';
import Layout from "./components/Layout";

function App() {

  const [ state, dispatch ] = useReducer( reducer, initialState )
  const cartItems = useSelector((state) => state.cart.itemsList)
	console.log(cartItems)
  return (
  <UserProvider value={{ state, dispatch }} >
      <BrowserRouter>
        <AppNavbar/>  
        <Routes>
          <Route path="/" element={ <Home/> } />   
          <Route path="/login" element={ <Login/> } />
          <Route path="/logout" element={ <Logout/> } />
          <Route path="/register" element={ <Register/> } />
          <Route path="/products" element={ <Products/> } />
          <Route path="/myCart" element={ <Layout/> } />
          <Route path="/add-product" element={ <AddProduct/> } />
          <Route path="/update-product/:id" element={ <UpdateProduct/> } />
          <Route path="/update-user/:id" element={ <UpdateUserInfo/> } />
          <Route path="/user-dashboard" element={ <UserDashboard/> } />
          <Route path="*" element={ <NotFound/> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
