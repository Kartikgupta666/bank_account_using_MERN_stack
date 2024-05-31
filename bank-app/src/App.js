
// import './App.css';
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Main from './Pages/Main'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import DashBoard from './Pages/DashBoard'
import Depositmoney from './Pages/Depositmoney'

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/dashboard' element={<DashBoard />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Register' element={<Signup />}></Route>
        <Route path='/deposit' element={<Depositmoney />}></Route>


      </Routes>
      <Footer />
    </>
  );
}

export default App;
