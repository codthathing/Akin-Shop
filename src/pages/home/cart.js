import React, { useState } from "react";
import CartItems from "./cartTemplate";

let itemsOrdered = JSON.parse(localStorage.getItem("itemsOrder") || '[]')
const Cart = () => {
    let [items, setItems] = useState(itemsOrdered)

    return (
        <div>
            {items.map((details)=> {
                const {id, image, brand, desc, price, purchase} = details          
                return <CartItems key={id} {...details}></CartItems>
            })}
            <button id="conOrderBtn">
                <p>Confirm Order</p> 
                <p style={{fontStyle:'italic'}}>Total = &#8358;16,000</p>
            </button>
        </div>
    );
    
}

export default Cart;