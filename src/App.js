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
import Products from './pages/Products'
import UserDashboard from './pages/UserDashboard'
import AddProduct from './pages/AddProduct'
import NotFound from './pages/NotFound'




function App() {

  const [ state, dispatch ] = useReducer( reducer, initialState )

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
          <Route path="/add-product" element={ <AddProduct/> } />
          <Route path="/user-dashboard" element={ <UserDashboard/> } />
          <Route path="*" element={ <NotFound/> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
