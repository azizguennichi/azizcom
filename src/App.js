import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/product" element={<Product/>}/>
      <Route exact path="/productliste" element={<ProductList/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
