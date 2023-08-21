import React from 'react';
import ReactDOM  from 'react-dom';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/home';
import Layout from './pages/layout';
import Food from './pages/food/food';
import Shoe from './pages/shoe/shoe';
import Cloth from './pages/cloth/cloth';
import Cart from './pages/home/cart';
import './style.css'

const Main = () => {

  const Error = () => {
    return (
        <h1>This page is not available</h1>
    ); 
  };
  
  return (
      <>
          <Layout/>
          <BrowserRouter>
              <Routes>
                  <Route path="/">
                      <Route index element={<Home/>}/>
                      <Route path="food" element={<Food/>}/>
                      <Route path="shoe" element={<Shoe/>}/>
                      <Route path="cloth" element={<Cloth/>}/>
                      <Route path="cart" element={<Cart/>}/>
                      <Route path="*" element={<Error/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>   
      </>
  );
}

ReactDOM.render(<Main/>, document.getElementById("root"));

