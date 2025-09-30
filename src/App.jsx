
import './App.css'
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Route,Routes } from 'react-router-dom';
function App() {
 

  return (
    <>
     <div className='bg-slate-900'>
      
    <Navbar/>
     </div>
    <Routes>
      <Route path="/" element ={<Home/>} >
      </Route>
         <Route path="/cart" element ={<Cart/>} >
      </Route>
     </Routes>
    </>
  )
}

export default App
