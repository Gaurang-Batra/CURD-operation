import './App.css';
import Nav from './components/nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';
import AddProduct from './components/addProduct/AddProduct';
import ProductList from './components/productList/ProductList';
import UpdateProduct from './components/updateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* Routes without PrivateComponent */}
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/logout" element={<h1>Logout/Login</h1>} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
