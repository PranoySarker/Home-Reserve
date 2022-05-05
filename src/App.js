import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
