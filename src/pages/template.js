import React, { useState } from "react";
import  { shoeItem } from "./shoe/shoeObj";
import { arrayItem } from './arrayOrder'


const Template = ({id, image, brand, desc, price, purchase}) => {

    const [item, setItem] = useState(0)
    const addItem = () => {
        setItem(item + 1)
    }
    const subItem = () => {
        if(item >0) {
            setItem(item - 1)
        }
    }

    const addToCart = (id) => {
        shoeItem.filter((item) => item.id === id).map((details)=> {
            const {id, image, brand, desc, price, purchase} = details
            arrayItem.push({...details})
            console.log(arrayItem)
            localStorage.setItem("itemsOrder", JSON.stringify(arrayItem))
        })
    }
    
    

    return (
        <div className="item_div">
            <img className="brand_img" src={image} alt=""/>
            <h5 className="brand_name">{brand}</h5>
            <p className="brand_desc">{desc}</p>
            <var className="brand_price">${price}</var>
            <div className="pur_div">
                <div className="pur_det">
                    <button onClick={subItem} className="pur_btn">-</button>
                    <p className="pur_num">{purchase}</p>
                    <button onClick={addItem} className="pur_btn">+</button>
                </div>
                <button onClick={() => addToCart(id)} className="cart_btn">Add</button>
            </div>
        </div>
    );
}

export default Template;