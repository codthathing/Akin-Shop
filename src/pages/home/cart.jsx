import React, { useContext } from "react";
import { NavigateContext } from "../../services/providers/ContextProvider";
import { calculateCartItems } from "../../utils/calculateCartItems";
import CartItems from "./cartTemplate";

const Cart = () => {
    const { cartItems } = useContext(NavigateContext);

    return (
        <>
            <CartItems cartItem={cartItems}/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button id="conOrderBtn">
                    <p>Confirm Order</p>
                    <p style={{ fontStyle: 'italic' }}>Total = &#8358;{calculateCartItems()}</p>
                </button>
            </div>
        </>
    );

};

export default Cart;