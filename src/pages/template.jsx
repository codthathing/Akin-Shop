import React, { useContext } from "react";
import { NavigateContext } from "../services/providers/ContextProvider";

const Template = ({ itemsArray, setItemsArray }) => {
    const { cartItems, setCartItems } = useContext(NavigateContext);

    const itemFunction = (id, type) => {
        setItemsArray((prevState) => prevState.map((item) => item.id === id ? { ...item, ...(type === "ADD" ? { item: item.item + 1 } : { item: item.item > 1 ? item.item - 1 : 1 }), } : item));
    };

    const addToCart = (id) => {
        const newCartItem = itemsArray.find((item) => item.id === id);
        if (cartItems.some(({ brand }) => brand === newCartItem.brand)) {
            setCartItems((prevState) => prevState.map((item) => item.brand === newCartItem.brand ? { ...item, item: item.item + newCartItem.item } : item));
        } else {
            setCartItems([...cartItems, newCartItem]);
        };
        setItemsArray(prevState => prevState.map((item) => item.id === id ? { ...item, item: 1 } : item));
    };

    return (
        <div className="brand_div">
            {itemsArray.map(({ id, image, brand, desc, item, price }) => {
                return (
                    <div key={id} className="item_div">
                        <img className="brand_img" src={image} alt="" />
                        <h5 className="brand_name">{brand}</h5>
                        <p className="brand_desc">{desc}</p>
                        <var className="brand_price">${price}</var>
                        <div className="pur_div">
                            <div className="pur_det">
                                <button
                                    onClick={() => itemFunction(id, "MINUS")}
                                    className="pur_btn"
                                >
                                    -
                                </button>
                                <p className="pur_num">{item}</p>
                                <button
                                    onClick={() => itemFunction(id, "ADD")}
                                    className="pur_btn"
                                >
                                    +
                                </button>
                            </div>
                            <button onClick={() => addToCart(id)} className="cart_btn">
                                Add
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Template;
