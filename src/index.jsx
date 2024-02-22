import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About'
import Accomodation from './pages/Accomodation'
import Error from './components/Error'
import Home from './pages/Home'


// import './main.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/accomodation/:idAccomodation" element={<Accomodation />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<Error />} />
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
