import React from "react";
import Template from "../template";
import  { shoeItem } from "./shoeObj";

const Shoe = () => {
    return (
        <div className="brand_div">
            {shoeItem.map((details)=> {
                const {id, image, brand, desc, price} = details;
                return <Template key={id} {...details}></Template>
            })}
        </div>
    );
};
export default Shoe;