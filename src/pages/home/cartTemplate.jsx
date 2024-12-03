import React, { useContext } from "react";
import { NavigateContext } from "../../services/providers/ContextProvider";

export default function CartItems({ cartItem }) {
    const { setCartItems } = useContext(NavigateContext);

    const itemFunction = (id, type) => {
        setCartItems(prevState => prevState.map((item) => (item.id === id) ? { ...item, ...(type === "ADD" ? { item: item.item + 1 } : { item: item.item > 1 ? item.item - 1 : 1 }) } : item));
    };

    const remItem = (id) => {
        setCartItems(prevState => prevState.filter((item) => item.id !== id));
    };


    return (
        <>
            {cartItem.map(({ id, image, brand, price, item }) => {
                return (
                    <section key={id} className="itemSec">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="itemDet">
                                <img src={image} className="itemPic" alt={brand} />
                                <p className="itemName">{brand}</p>
                            </div>
                            <h1 className="itemPrice">&#8358; {price}</h1>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className="itemParam">
                                <div className="itemParamBtn">
                                    <button onClick={() => itemFunction(id, "MINUS")} className="itemBtn">-</button>
                                    <var>{item}</var>
                                    <button onClick={() => itemFunction(id, "ADD")} className="itemBtn">+</button>
                                </div>
                                <var className="itemTotal">= &#8358;{price * item}</var>
                            </div>
                            <button onClick={() => remItem(id)} className="remItemBtn">Remove</button>
                        </div>
                    </section>
                );
            })}
        </>
    );
};