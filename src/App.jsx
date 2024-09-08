import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Authentication } from './pages/Authentication';
import { Register } from './pages/Register';
import { Products } from './pages/Products';
import ProductDetail from './pages/ProductDetail';


function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/:id" element={<ProductDetail />} />
        </Routes>
    );
}

export default App;
