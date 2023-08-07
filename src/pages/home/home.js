import React from "react";
import{ BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from "./products";
import Food from "../food/food";
import Shoe from "../shoe/shoe";
import Cloth from "../cloth/cloth";
import Layout from "../layout";
import Cart from "./cart";


const Home = () => {

    const Error = () => {
        return (
            <h1>This page is not available</h1>
        );
    }

    return (
        <>
            <Layout/>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Products/>}/>
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


export default Home;