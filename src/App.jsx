import {
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Movies from './pages/Movies';
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./pages/Cart";


function App() {

  return (
    <>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Details />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>

    </>
  )
}

export default App
