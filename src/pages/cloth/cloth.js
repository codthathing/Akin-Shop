import React from "react";
import Template from '../template'
import { clothItem } from "./clothObj";

const Cloth = () => {
    return (
        <div className="brand_div">
            {clothItem.map((details)=> {
                const {id, image, brand, desc, price} = details;
                return <Template key={id} {...details}></Template>
            })};
        </div>
    );
};

export default Cloth;