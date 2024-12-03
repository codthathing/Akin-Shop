import React, { useContext, useEffect, useState } from "react";
import { NavigateContext } from "../../services/providers/ContextProvider";
import Template from "../template";
import Footer from "./footer";
import ashion from "../images/ashion.jpeg";
import casuals from "../images/casuals.jpeg";
import checkMen from "../images/checkMen.jpeg";
import pants from "../images/pants.jpeg";
import semo from "../images/semo.jpeg";
import spag from "../images/spag.jpeg"

const Home = () => {
  const { shoeItems, setShoeItems, foodItems, setFoodItems, clothItems, setClothItems } = useContext(NavigateContext);

  const [displayImage, setDisplayImage] = useState(ashion);
  const images = [ashion, casuals, checkMen, pants, semo, spag];
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayImage(images[i]);
      i = (i < images.length - 1) ? i + 1 : 0;
    }, 2500);

    return () => clearInterval(interval);
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
        <Template itemsArray={shoeItems.slice(0, 4)} setItemsArray={setShoeItems} />
        <h3 className="pro_name">Cloths</h3>
        <Template itemsArray={clothItems.slice(0, 4)} setItemsArray={setClothItems} />
        <h3 className="pro_name">Food</h3>
        <Template itemsArray={foodItems.slice(0, 4)} setItemsArray={setFoodItems} />
      </div>
      <footer><Footer /></footer>
    </>
  );
};

export default Home;