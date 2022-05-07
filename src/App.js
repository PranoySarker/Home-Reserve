import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNew from './components/AddNew/AddNew';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Login from './components/Login/Login';
import ManageInventory from './components/ManageInventory/ManageInventory';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './components/Shared/Header/Header';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <PrivateRoute>
            <ManageInventory></ManageInventory>
          </PrivateRoute>}></Route>
        <Route path='/inventory/:id' element={
          <PrivateRoute>
            <ItemDetails></ItemDetails>
          </PrivateRoute>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/additem' element={<AddNew></AddNew>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
