import './App.css';
import Addproduct from './components/Addproduct';
import EditProduct from './components/EditProduct';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div>
      <Routers>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/addproduct' element={<Addproduct />} />
          <Route exact path='/editproduct/:productId' element={<EditProduct />} />
          <Route exact path='/viewproduct/:productId' element={<ViewProduct />} />
        </Routes>
      </Routers>



    </div>
  );
}

export default App;
