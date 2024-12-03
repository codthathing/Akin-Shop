import React, { useState } from "react";

let itemsOrdered = JSON.parse(localStorage.getItem("itemsOrder") || '[]');
const Template = ({id, image, brand, desc, price, purchase}) => {

    const [arrayItem, setArray] = useState(itemsOrdered);
    const [item, setItem] = useState(1);

    const addItem = () => {
        setItem(item + 1);
    };
    const subItem = () => {
        if(item >1) {
            setItem(item - 1); 
        };
    };

    const addToCart = () => {
        if(item > 0) {
            let itemDetail = {
                id: arrayItem.length,
                image: image,
                brand: brand,
                desc: desc,
                price: price,
                item: item
            };
            arrayItem.push(itemDetail);
            localStorage.setItem("itemsOrder", JSON.stringify(arrayItem));
            setItem(1);
        };
    };
    
    

    return (
        <div className="item_div">
            <img className="brand_img" src={image} alt=""/>
            <h5 className="brand_name">{brand}</h5>
            <p className="brand_desc">{desc}</p>
            <var className="brand_price">${price}</var>
            <div className="pur_div">
                <div className="pur_det">
                    <button onClick={subItem} className="pur_btn">-</button>
                    <p className="pur_num">{item}</p>
                    <button onClick={addItem} className="pur_btn">+</button>
                </div>
                <button onClick={addToCart} className="cart_btn">Add</button>
            </div>
        </div>
    );
};

export default Template;