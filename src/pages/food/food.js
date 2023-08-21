import React from "react";
import Template from '../template'
import { foodItem } from './foodObj'

const Food = () => {
    return (
        <div className="brand_div">
            {foodItem.map((details)=> {
                const {id, image, brand, desc, price} = details;
                return <Template key={id} {...details}></Template>
            })}
        </div>
    );
};
export default Food;