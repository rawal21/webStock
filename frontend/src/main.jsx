import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter , Routes, Route} from  'react-router-dom'
import HomePage from './landing_page/home/HomePage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import About from  './landing_page/about/AboutPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import PricingPage from './landing_page/pricing/PricePage.jsx'
import SupportsPage from './landing_page/supports/SupportsPage.jsx'
import NavBar from './landing_page/NavBar.jsx'
import Footer from './landing_page/Footer.jsx'
import Error from './landing_page/Error.jsx'
import './index.css'
import Login from './landing_page/login/Login.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <NavBar/>
 <Routes>
  <Route path='/' element = {<HomePage/>}></Route>
  <Route path='/signup' element = {<Signup/>}></Route>
  <Route path='/login' element = {<Login/>}></Route>
  <Route path='/about' element = {<About/>}></Route>
  <Route path='/products' element = {<ProductPage/>}></Route>
  <Route path='/pricing' element = {<PricingPage/>}></Route>
  <Route path='/supports' element = {<SupportsPage/>}></Route>
  <Route path='*' element = {<Error/>}></Route>
 </Routes>
 <Footer/>

 </BrowserRouter>
)
