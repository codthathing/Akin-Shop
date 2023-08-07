import React from "react";

export default function CartItems({id, image, brand, price, purchase}) {

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
                        <button className="itemBtn">-</button>
                        <var>{purchase}</var>
                        <button className="itemBtn">+</button>
                    </div>
                    <var className="itemTotal">= &#8358;{price * purchase}</var>
                </div>
                <button className="remItemBtn">Remove</button>
            </div>
        </section>
    );
}