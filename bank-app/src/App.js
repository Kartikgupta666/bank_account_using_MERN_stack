
// import './App.css';

import Navbar from "./Component/Navbar";
import Main from './Pages/Main'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import DashBoard from './Pages/DashBoard'
import Depositmoney from './Pages/Depositmoney'
import { Route, Routes } from "react-router-dom";
import AccountState from "./Context/account/AccountState";
import Fundtransfer from "./Pages/Fundtransfer";
function App() {
  return (
    <>
      <AccountState>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/dashboard' element={<DashBoard />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Register' element={<Signup />}></Route>
          <Route path='/deposit' element={<Depositmoney />}></Route>
          <Route path='/FundTransfer' element={<Fundtransfer />}></Route>
        </Routes>
      
      </AccountState>
    </>
  );
}

export default App;
