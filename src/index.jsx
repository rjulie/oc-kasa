import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import About from './pages/About'
import Accomodation from './pages/Accomodation'
import Error from './components/Error'
import Header from './components/Header'
import Home from './pages/Home'
import './sass/main.css'
import Footer from './components/Footer'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/accomodation/:idAccomodation" element={<Accomodation />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
