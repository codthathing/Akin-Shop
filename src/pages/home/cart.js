import React, { useState } from "react";
import CartItems from "./cartTemplate";
import { ItemOrderContext } from "./usecontext";


let itemsOrdered = JSON.parse(localStorage.getItem("itemsOrder") || '[]');
const Cart = () => {
    let [items, setItems] = useState(itemsOrdered);

    let sum = 0;
    items.map((details) => {
        const {id, image, brand, desc, price, item} = details;
        let priceTotal = price * item;
        sum += priceTotal;
        return sum;
    });


    return (
        <ItemOrderContext.Provider value={{items, setItems}}>
            {items.map((details)=> {
                const {id, image, brand, desc, price, item} = details          
                return <CartItems key={id} {...details}></CartItems>
            })}
            <div style={{display: 'flex', justifyContent:'center'}}>
                <button id="conOrderBtn">
                    <p>Confirm Order</p> 
                    <p style={{fontStyle:'italic'}}>Total = &#8358;{sum}</p>
                </button>
            </div>
        </ItemOrderContext.Provider>
    );
    
};

export default Cart;