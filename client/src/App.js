import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homescreen from './screens/Homescreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProduct from './screens/Singleproduct';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Admin from './screens/Admin';
import Editpage from './screens/Editpage';
import Addnewproducts from './screens/Addnewproducts';
function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
        <Route path="/" element={<Loginscreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/home" element={<Homescreen />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/edit/:id" element={<Editpage />} />
          <Route path="/addnewproduct" element={<Addnewproducts />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
