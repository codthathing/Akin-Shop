import React, { useEffect, useState } from "react";
import Template from "../template";
import { shoeItem } from "../shoe/shoeObj";
import { foodItem } from "../food/foodObj";
import { clothItem } from "../cloth/clothObj";
import Footer from "./footer";
import ashion from "../images/ashion.jpeg";
import casuals from "../images/casuals.jpeg";
import checkMen from "../images/checkMen.jpeg";
import pants from "../images/pants.jpeg";
import semo from "../images/semo.jpeg";
import spag from "../images/spag.jpeg"

const Home = () => {
  const [displayImage, setDisplayImage] = useState(ashion);

  const images = [ashion, casuals, checkMen, pants, semo, spag];
  useEffect(() => {
    let i = 0;
    setInterval(() => {
      setDisplayImage(images[i]);
      { (i < images.length - 1) ? i++ : i = 0 };
    }, 2500);
  }, []);


  return (
    <>
      <article id="introText">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut molestiae mollitia blanditiis minus similique nobis, odio aperiam labore facere reprehenderit!
      </article>
      <div id="display-image-div">
        <img src={displayImage} id="display-image" name="displayPro" />
      </div>
      <div>
        <h3 className="pro_name">Shoes</h3>
        <div className="brand_div">
          {shoeItem.map((details) => {
            const { id, image, brand, desc, price } = details;
            if (id < 5) {
              return <Template key={id} {...details}></Template>
            };
          })}
        </div>
        <h3 className="pro_name">Cloths</h3>
        <div className="brand_div">
          {clothItem.map((details) => {
            const { id, image, brand, desc, price } = details;
            if (id < 5) {
              return <Template key={id} {...details}></Template>
            };
          })}
        </div>
        <h3 className="pro_name">Food</h3>
        <div className="brand_div">
          {foodItem.map((details) => {
            const { id, image, brand, desc, price } = details;
            if (id < 5) {
              return <Template key={id} {...details}></Template>
            };
          })}
        </div>
      </div>
      <footer><Footer /></footer>
    </>
  );
};

export default Home;