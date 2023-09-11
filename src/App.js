import './App.css';
import ProductList from './component/ProductList';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductDetails from './component/ProductDetails';
import Header from './component/Header';
import Mycart from './component/Mycart';
import Checkout from './component/Checkout';
import Login from './LoginPage/Login';
import { useEffect } from 'react';

const App = () => {
  // useEffect(()=>{

  // },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<ProductList />} />
          <Route exact path='/products' element={<ProductDetails />} />
          <Route exact path='/my-cart' element={<Mycart />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
