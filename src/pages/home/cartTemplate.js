import React, { useContext } from "react";
import { ItemOrderContext } from "./usecontext";

let itemsOrdered = JSON.parse(localStorage.getItem("itemsOrder") || '[]');
export default function CartItems({id, image, brand, price, item}) {

    const { setItems } = useContext(ItemOrderContext);

    const addItem = (id) => {
        let addOrderItem = Object.assign([], itemsOrdered);
        addOrderItem = itemsOrdered.concat();
        addOrderItem.filter((x) => x.id == id).map((detail) => detail.item += 1);
        localStorage.setItem("itemsOrder", JSON.stringify(addOrderItem));
        setItems(addOrderItem);
        window.location.reload();
    };
    const subItem = (id) => {
        if(item > 1) {
            let subOrderItem = Object.assign([], itemsOrdered);
            subOrderItem = itemsOrdered.concat();
            subOrderItem.filter((x) => x.id == id).map((detail) => detail.item -= 1);
            localStorage.setItem("itemsOrder", JSON.stringify(subOrderItem));
            setItems(subOrderItem);
            window.location.reload();
        };
    };

    const remItem = (id) => {
        let remainOrder = itemsOrdered.filter((x) => x.id !== id);
        localStorage.setItem("itemsOrder", JSON.stringify(remainOrder));
        remainOrder = JSON.parse(localStorage.getItem("itemsOrder")); 
        setItems(remainOrder);
        window.location.reload();
    };


    return (
        <section className="itemSec">
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div className="itemDet">
                    <img src={image} className="itemPic" alt={brand}/>
                    <p className="itemName">{brand}</p>
                </div>
                <h1 className="itemPrice">&#8358; {price}</h1>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div className="itemParam">
                    <div className="itemParamBtn">
                        <button onClick={() => subItem(id)} className="itemBtn">-</button>
                        <var>{item}</var>
                        <button onClick={() => addItem(id)} className="itemBtn">+</button>
                    </div>
                    <var className="itemTotal">= &#8358;{price * item}</var>
                </div>
                <button onClick={() => remItem(id)} className="remItemBtn">Remove</button>
            </div>
        </section>
    );
};