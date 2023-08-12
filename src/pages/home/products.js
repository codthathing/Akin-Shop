import React, { useEffect, useState } from "react";
import Template from "../template";
import { shoeItem } from "../shoe/shoeObj";
import { foodItem } from "../food/foodObj";
import { clothItem } from "../cloth/clothObj";
import Footer from "./footer";
import laptop from "../images/laptop_main.jpg"
import liveseg from "../images/livesegball.png"
import shopify from "../images/shopify.png"

const Products = () => {

    // let i = 0
    // const images = [liveseg, laptop, shopify]
    // const imgChange = () => {
    //     document.getElementById('displayPro').src = images[0]
    //     if(i < images.length - 1) {
    //         i++;
    //     } else {
    //         i = 0
    //     }
    //     setTimeout("imgChange()", 2500)
    // }
    // useEffect(()=> {
    //     imgChange()
    // }, [])

    return (
        <>
            <article id="introText">
                Lorem, ipsum dolor sit amet consectetur adipisicing 
                elit. Aut molestiae mollitia blanditiis minus 
                similique nobis, odio aperiam labore facere 
                reprehenderit!
            </article>
            <img id="displayPro" src={liveseg} name="disPro"/>
            <div>
                <h3 className="pro_name">Shoes</h3>
                <div className="brand_div">
                    {shoeItem.map((details)=> {
                        const {id, image, brand, desc, price} = details
                        if(id < 5) {
                            return <Template key={id} {...details}></Template>
                        }
                    })}
                </div>
                <h3 className="pro_name">cloths</h3>
                <div className="brand_div">
                    {clothItem.map((details)=> {
                        const {id, image, brand, desc, price} = details
                        if(id < 5) {
                            return <Template key={id} {...details}></Template>
                        }
                    })}
                </div>
                <h3 className="pro_name">food</h3>
                <div className="brand_div">
                    {foodItem.map((details)=> {
                        const {id, image, brand, desc, price} = details
                        if(id < 5) {
                            return <Template key={id} {...details}></Template>
                        }
                    })}
                </div>
            </div>
            <footer><Footer/></footer>   
        </>
        
    );
}

export default Products;