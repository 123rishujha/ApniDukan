import { Routes, Route } from 'react-router-dom';
import AddProduct from '../components/Admin/AddProduct';
import AdminDashboard from '../components/Admin/Admin_Dashboard';
import AdminProducts from '../components/Admin/AdminProducts';
import Product from '../pages/Product';
import Login from "../pages/login/Login";
import SignUp from '../pages/signup/SignUp';

const AllRoutes = () =>{
    return(
        <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/products' element={<Product/>} />
            <Route path='/product/:id' element={<h1>productDetails</h1>} />
            <Route path='/cart' element={<h1>cart</h1>} />

            <Route path='/admin' element={<AdminDashboard/>} />
            <Route path='/addProduct' element={<AddProduct/>}></Route>
            <Route path='/adminProducts' element={<AdminProducts/>}></Route>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            
        </Routes>
    )
}

export default AllRoutes