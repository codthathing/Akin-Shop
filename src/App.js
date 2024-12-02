import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home/home";
import Food from "./pages/food/food";
import Shoe from "./pages/shoe/shoe";
import Cloth from "./pages/cloth/cloth";
import Cart from "./pages/home/cart";

const App = () => {
  const Error = () => {
    return (
      <h1>This page is not available</h1>
    ); 
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/food" element={<Food />}></Route>
          <Route path="/shoe" element={<Shoe />}></Route>
          <Route path="/cloth" element={<Cloth />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;