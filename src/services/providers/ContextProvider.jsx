import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { shoeItem } from "../../pages/shoe/shoeObj";
import { foodItem } from "../../pages/food/foodObj";
import { clothItem } from "../../pages/cloth/clothObj";

export const NavigateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [shoeItems, setShoeItems] = useState(shoeItem);
  const [foodItems, setFoodItems] = useState(foodItem);
  const [clothItems, setClothItems] = useState(clothItem);
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
  const [clonedCart, setClonedCart] = useState(cartItems);
  useEffect(() => {
    setClonedCart(cartItems);
  }, [cartItems]);

  return <NavigateContext.Provider value={{ cartItems, setCartItems, shoeItems, setShoeItems, foodItems, setFoodItems, clothItems, setClothItems, clonedCart, setClonedCart }}>{children}</NavigateContext.Provider>
};